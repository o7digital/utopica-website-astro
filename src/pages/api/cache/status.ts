import type { APIRoute } from 'astro';

const ADMIN_TOKEN = import.meta.env.ADMIN_TOKEN || import.meta.env.REVALIDATE_TOKEN;

export const GET: APIRoute = async ({ url }) => {
  const token = url.searchParams.get('token');

  if (token !== ADMIN_TOKEN) {
    return new Response(JSON.stringify({ error: 'Invalid admin token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Return cache status (simplified for Astro)
  return new Response(JSON.stringify({
    success: true,
    message: 'Cache status endpoint - Astro does not use ISR like Next.js',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
