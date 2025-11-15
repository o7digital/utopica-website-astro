import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Log for debugging
    console.log('Debug extraction endpoint called:', {
      timestamp: new Date().toISOString(),
      body
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Debug endpoint - extraction functionality',
      timestamp: new Date().toISOString(),
      received: body
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Debug extraction error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Debug extraction failed'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
