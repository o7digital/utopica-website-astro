import type { APIRoute } from 'astro';
import { getRevalidationStats } from '@/lib/cache/revalidation';

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
    const stats = getRevalidationStats();
    
    return new Response(JSON.stringify({
      success: true,
      data: stats,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error fetching cache stats:', error);
    
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Failed to fetch cache statistics',
      details: import.meta.env.DEV ? (error instanceof Error ? error.message : String(error)) : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
