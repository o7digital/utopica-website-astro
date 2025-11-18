import { useEffect, useCallback } from 'react';

export function Analytics() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  
  // Google Analytics ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
  
  // Función memoizada para enviar pageviews a Google Analytics
  const pageview = useCallback((url: string) => {
    if (typeof window.gtag !== 'undefined' && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [GA_MEASUREMENT_ID]);
  
  // Efecto para enviar pageviews cuando cambia la ruta
  useEffect(() => {
    // Cuando cambia la ruta, enviar pageview
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);
  }, [pathname, searchParams, pageview]);
  
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

    // Load gtag script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
      cookie_flags: 'SameSite=None;Secure',
      anonymize_ip: true
    });
  }, [GA_MEASUREMENT_ID]);

  return null;
}

/**
 * Función para trackear errores en Analytics
 */
export function trackError(error: Error, context?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
    if (GA_MEASUREMENT_ID) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_context: context || 'unknown',
          error_stack: error.stack?.substring(0, 100) || 'no-stack',
        },
      });
    }
  }
}

/**
 * Función para trackear recuperaciones exitosas
 */
export function trackErrorRecovery(errorType: string, context?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
    if (GA_MEASUREMENT_ID) {
      window.gtag('event', 'error_recovery', {
        event_category: 'Error Handling',
        event_label: errorType,
        custom_map: {
          recovery_context: context || 'unknown',
        },
      });
    }
  }
}


