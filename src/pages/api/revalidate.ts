import type { APIRoute } from 'astro';

// Note: Astro n'a pas de système de revalidation comme Next.js ISR
// Cette endpoint est fournie pour la compatibilité mais n'effectue pas de revalidation réelle

const REVALIDATE_TOKEN = import.meta.env.REVALIDATE_TOKEN;
const ADMIN_TOKEN = import.meta.env.ADMIN_TOKEN;

export const POST: APIRoute = async ({ request, url }) => {
  const token = url.searchParams.get('token');
  
  // Verify authentication
  const isValid = token === REVALIDATE_TOKEN || token === ADMIN_TOKEN;
  
  if (!isValid) {
    return new Response(JSON.stringify({ error: 'Invalid authentication token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({
    success: true,
    message: 'Revalidation endpoint - Astro uses different caching strategy than Next.js ISR',
    note: 'Astro does not require explicit revalidation. Consider using build hooks or cache headers.',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const GET: APIRoute = async ({ url }) => {
  const token = url.searchParams.get('token');
  
  const isValid = token === REVALIDATE_TOKEN || token === ADMIN_TOKEN;
  
  if (!isValid) {
    return new Response(JSON.stringify({ error: 'Invalid authentication token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({
    message: 'Revalidation System - Astro Version',
    version: '1.0.0',
    status: 'info',
    note: 'Astro uses static generation and does not support ISR revalidation like Next.js',
    alternatives: {
      rebuild: 'Trigger a new build via Netlify/Vercel build hooks',
      cacheHeaders: 'Use HTTP cache headers for CDN caching',
      hybridRendering: 'Use server-side rendering for dynamic content'
    },
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
