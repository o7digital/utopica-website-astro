import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Páginas que deben devolver 404
const BLOCKED_PAGES = [
  '/demo',
  '/diagnostico',
  '/fabrica-leads',
  '/servicios',
  '/test-audit',
  '/script',
  '/scripts',
];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Verificar si la página está bloqueada
  if (BLOCKED_PAGES.includes(pathname)) {
    // Redirigir a la página 404
    return NextResponse.rewrite(new URL('/404', request.url));
  }
  
  // Create response
  const response = NextResponse.next();
  
  // Add ISR and caching headers based on route patterns
  if (pathname === '/') {
    // Homepage - cache for 6 hours
    response.headers.set(
      'Cache-Control',
      'public, max-age=21600, s-maxage=3600, stale-while-revalidate=86400'
    );
    response.headers.set('X-ISR-Page', 'homepage');
  } else if (pathname === '/sprint-claridad-comercial') {
    // Sprint page - cache for 2 hours
    response.headers.set(
      'Cache-Control',
      'public, max-age=7200, s-maxage=1800, stale-while-revalidate=14400'
    );
    response.headers.set('X-ISR-Page', 'sprint');
  } else if (pathname === '/equipo') {
    // Team page - cache for 24 hours
    response.headers.set(
      'Cache-Control',
      'public, max-age=86400, s-maxage=21600, stale-while-revalidate=172800'
    );
    response.headers.set('X-ISR-Page', 'team');
  } else if (pathname.startsWith('/_blog')) {
    // Blog pages - cache for 4 hours
    response.headers.set(
      'Cache-Control',
      'public, max-age=14400, s-maxage=3600, stale-while-revalidate=28800'
    );
    response.headers.set('X-ISR-Page', 'blog');
  }
  
  // Add ISR identification header for static pages
  if (pathname === '/' || pathname === '/sprint-claridad-comercial' || pathname === '/equipo' || pathname.startsWith('/_blog')) {
    response.headers.set('X-ISR-Enabled', 'true');
  }
  
  // Add performance monitoring headers
  response.headers.set('X-Cache-Status', 'MISS');
  response.headers.set('X-Timestamp', Date.now().toString());
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|og-image.jpg).*)',
  ],
};