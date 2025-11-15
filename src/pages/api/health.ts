import type { APIRoute } from 'astro';
import { getCacheMetrics } from '@/lib/trello';
import { CACHE_DURATIONS } from '@/lib/utils/cache';

export const GET: APIRoute = async ({ request, url }) => {
  const includeCache = url.searchParams.get('cache') === 'true';
  
  const status = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: {
      hasGeminiKey: !!import.meta.env.GOOGLE_GEMINI_API_KEY,
      hasResendKey: !!import.meta.env.RESEND_API_KEY,
      hasFirecrawlKey: !!import.meta.env.FIRECRAWL_API_KEY,
      hasTrelloCredentials: !!(import.meta.env.TRELLO_API_KEY && import.meta.env.TRELLO_TOKEN),
      hasTrelloBoardId: !!import.meta.env.TRELLO_BOARD_ID,
      resendFrom: import.meta.env.RESEND_FROM_EMAIL || 'not configured',
      appUrl: import.meta.env.PUBLIC_APP_URL || 'not configured',
      nodeEnv: import.meta.env.MODE
    },
    cache: includeCache ? {
      ...getCacheMetrics(),
      configuration: {
        workshopsCacheDuration: CACHE_DURATIONS.WORKSHOPS,
        homepageCacheDuration: CACHE_DURATIONS.HOMEPAGE,
        sprintCacheDuration: CACHE_DURATIONS.SPRINT
      }
    } : undefined,
    performance: {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      nodeVersion: process.version
    }
  };

  return new Response(JSON.stringify(status), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Health-Check': 'true'
    }
  });
};
