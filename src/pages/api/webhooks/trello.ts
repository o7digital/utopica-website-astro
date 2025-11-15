import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Log Trello webhook for debugging
    console.log('Trello webhook received:', {
      timestamp: new Date().toISOString(),
      action: body.action?.type,
      body
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Trello webhook received',
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Trello webhook error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Webhook processing failed'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async () => {
  // HEAD request from Trello to verify webhook
  return new Response(null, { status: 200 });
};
