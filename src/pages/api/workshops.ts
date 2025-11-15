import type { APIRoute } from 'astro';
import { getWorkshopsWithFallback, getCacheMetrics } from '@/lib/trello';
import { 
  CACHE_DURATIONS, 
  CACHE_TAGS,
  getOptimizedCacheHeaders,
  generateAdvancedETag
} from '@/lib/utils/cache';

export const GET: APIRoute = async ({ request, url }) => {
  const startTime = Date.now();
  const includeMetrics = url.searchParams.get('metrics') === 'true';
  
  try {
    // Get workshops with intelligent fallback
    const { workshops, source, metrics } = await getWorkshopsWithFallback();
    
    // Serializar las fechas a string para evitar problemas de serialización
    const serializedWorkshops = workshops.map(workshop => ({
      ...workshop,
      date: workshop.date instanceof Date ? workshop.date.toISOString() : workshop.date
    }));
    
    const responseTime = Date.now() - startTime;
    
    const responseData = {
      success: true,
      data: {
        workshops: serializedWorkshops,
        meta: {
          total: workshops.length,
          source,
          lastUpdated: new Date().toISOString(),
          responseTime: `${responseTime}ms`,
          revalidateIn: CACHE_DURATIONS.WORKSHOPS,
          cached: source === 'cache'
        }
      }
    };

    // Include cache metrics if requested
    if (includeMetrics) {
      (responseData.data.meta as any).cacheMetrics = metrics;
    }
    
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    // Use advanced cache headers based on source and user agent
    if (source !== 'mock') {
      const userAgent = request.headers.get('user-agent') || '';
      const acceptEncoding = request.headers.get('accept-encoding') || '';
      
      const optimizedHeaders = getOptimizedCacheHeaders('WORKSHOPS', {
        isStatic: false,
        userAgent,
        acceptEncoding
      });
      
      // Apply optimized headers
      optimizedHeaders.forEach((value, key) => {
        headers.set(key, value);
      });
    } else {
      // Don't cache mock data
      headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
    
    // Advanced ETag with content metadata
    const etag = generateAdvancedETag(serializedWorkshops, {
      source,
      timestamp: Date.now(),
      version: '2.0'
    });
    headers.set('ETag', etag);
    
    // Performance and debugging headers
    headers.set('X-Cache-Tags', CACHE_TAGS.WORKSHOPS);
    headers.set('X-Data-Source', source);
    headers.set('X-Response-Time', `${responseTime}ms`);
    headers.set('X-Cache-Hit-Ratio', `${metrics.hitRatio.toFixed(1)}%`);
    headers.set('X-API-Version', '2.0');
    
    // Cache warming hint
    if (request.headers.get('x-cache-warming') === 'true') {
      headers.set('X-Cache-Warmed', 'true');
    }
    
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers
    });
  } catch (error) {
    console.error('Error in workshops API:', error);
    
    return new Response(JSON.stringify({ 
      success: false,
      error: {
        code: 'WORKSHOPS_API_ERROR',
        message: 'Error al obtener talleres',
        timestamp: new Date().toISOString()
      }
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Error': 'true'
      }
    });
  }
};
