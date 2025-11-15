import type { APIRoute } from 'astro';
import { getRevalidationLogs } from '@/lib/cache/revalidation';

const ADMIN_TOKEN = import.meta.env.ADMIN_TOKEN || import.meta.env.REVALIDATE_TOKEN;

export const GET: APIRoute = async ({ url }) => {
  const token = url.searchParams.get('token');

  // Verify admin authentication
  if (token !== ADMIN_TOKEN) {
    return new Response(JSON.stringify({ error: 'Invalid admin token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Parse filter parameters
    const filters: Record<string, any> = {
      type: url.searchParams.get('type') || undefined,
      source: url.searchParams.get('source') || undefined,
      limit: url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : 50,
      since: url.searchParams.get('since') || undefined
    };

    // Remove undefined values
    Object.keys(filters).forEach(key => {
      if (filters[key] === undefined) {
        delete filters[key];
      }
    });

    const logs = getRevalidationLogs(filters);
    
    return new Response(JSON.stringify({
      success: true,
      data: {
        logs,
        filters: Object.keys(filters).length > 0 ? filters : null,
        total: logs.length
      },
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error fetching revalidation logs:', error);
    
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Failed to fetch revalidation logs',
      details: import.meta.env.DEV ? (error instanceof Error ? error.message : String(error)) : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
