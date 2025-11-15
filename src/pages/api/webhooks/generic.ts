import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Log webhook for debugging
    console.log('Generic webhook received:', {
      timestamp: new Date().toISOString(),
      body
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Webhook received',
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Generic webhook error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Webhook processing failed'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
