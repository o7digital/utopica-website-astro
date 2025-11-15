import type { APIRoute } from 'astro';
import { 
  warmCaches, 
  warmCriticalCaches, 
  smartWarm, 
  postDeploymentWarm,
  getWarmingHealth,
  type WarmingTarget
} from '@/lib/cache/warming';

const ADMIN_TOKEN = import.meta.env.CACHE_WARMING_TOKEN || import.meta.env.ADMIN_TOKEN;

interface WarmingRequest {
  action: 'warm' | 'critical' | 'smart' | 'deployment' | 'health';
  targets?: WarmingTarget[];
  options?: {
    concurrency?: number;
    priorityFilter?: ('critical' | 'high' | 'normal' | 'low')[];
    respectPriorities?: boolean;
  };
}

export const POST: APIRoute = async ({ request, url }) => {
  const token = url.searchParams.get('token');

  // Verify authentication
  if (token !== ADMIN_TOKEN) {
    return new Response(JSON.stringify({ error: 'Invalid admin token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body: WarmingRequest = await request.json();
    const { action, targets, options } = body;

    let result;

    switch (action) {
      case 'warm':
        result = await warmCaches(targets, options);
        break;
      case 'critical':
        result = await warmCriticalCaches();
        break;
      case 'smart':
        result = await smartWarm();
        break;
      case 'deployment':
        result = await postDeploymentWarm();
        break;
      case 'health':
        result = getWarmingHealth();
        break;
      default:
        return new Response(JSON.stringify({ error: 'Invalid action' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Cache warming error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Cache warming failed',
      details: import.meta.env.DEV ? (error instanceof Error ? error.message : String(error)) : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async ({ url }) => {
  const token = url.searchParams.get('token');

  if (token !== ADMIN_TOKEN) {
    return new Response(JSON.stringify({ error: 'Invalid admin token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const health = getWarmingHealth();
  
  return new Response(JSON.stringify({
    success: true,
    data: health,
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
