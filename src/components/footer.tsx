'use client';

import { Link } from '@/components/ui/Link';
import { Linkedin, Youtube } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

interface FooterProps {
  lang?: 'es' | 'en';
}

export function Footer({ lang = 'es' }: FooterProps = {}) {
  const isEnglish = lang === 'en';
  return (
    <footer className="bg-background border-t" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Horizontal layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" aria-label="Ir a la página de inicio">
            <Logo className="w-[140px] h-[36px]" />
          </Link>
          
          {/* Social links */}
          <div className="flex items-center gap-4" aria-label="Enlaces de redes sociales">
            <a 
              href="https://www.linkedin.com/company/somosutopica/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
              aria-label="Visitar nuestro perfil de LinkedIn (se abre en una nueva ventana)"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://www.youtube.com/@UtópicaMx" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
              aria-label="Visitar nuestro canal de YouTube (se abre en una nueva ventana)"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Utópica. Todos los derechos reservados.</p>
        </div>

        {/* SEO Keywords Section - Language Specific */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          {isEnglish ? (
            <>
              {/* English Footer */}
              <p className="text-xs text-muted-foreground text-center mb-2">
                Outsourced business development, sales coaching and sales growth consulting in Mexico City: Polanco, Reforma, Santa Fe, Roma Norte and Condesa.
              </p>
              
              {/* Invisible SEO keywords - English */}
              <div style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }} aria-hidden="true">
                outsourced business development Mexico City, outsourced commercial development Mexico City, sales coach Mexico City, B2B sales coaching Mexico City, sales growth consulting Mexico City, increase sales in Mexico City, sales performance improvement Mexico City, sales training for B2B teams Mexico City, outsourced sales consulting Mexico City, outsourced business development Polanco Mexico, sales coach Polanco Mexico, sales growth Polanco Mexico, outsourced business development Reforma Mexico City, sales coach Reforma Mexico City, sales growth Reforma Mexico City, outsourced business development Santa Fe Mexico, sales coach Santa Fe Mexico, sales growth Santa Fe Mexico, outsourced business development Roma Norte, sales coach Roma Norte Mexico, sales growth Roma Norte, outsourced business development Condesa Mexico, sales coach Condesa Mexico, sales growth Condesa Mexico
              </div>
            </>
          ) : (
            <>
              {/* Spanish Footer */}
              <p className="text-xs text-muted-foreground text-center mb-2">
                Desarrollo comercial externalizado, coaching de ventas e incremento de ventas en Ciudad de México: Polanco, Reforma, Santa Fe, Roma Norte y Condesa.
              </p>
              
              {/* Invisible SEO keywords - Spanish */}
              <div style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }} aria-hidden="true">
                desarrollo comercial externalizado CDMX, desarrollo comercial externalizado en Ciudad de México, coach de ventas CDMX, coaching de ventas en Ciudad de México, incremento de ventas en Ciudad de México, incremento de ventas B2B CDMX, capacitación para generar mejores ventas CDMX, capacitación en ventas B2B CDMX, consultoría de ventas externalizada CDMX, optimización del área comercial CDMX, desarrollo comercial externalizado Polanco, coach de ventas Polanco, incremento de ventas Polanco CDMX, desarrollo comercial externalizado Reforma, coach de ventas Reforma CDMX, incremento de ventas Reforma, desarrollo comercial externalizado Santa Fe, coach de ventas Santa Fe CDMX, incremento de ventas Santa Fe, desarrollo comercial externalizado Roma Norte, coach de ventas Roma Norte, incremento de ventas Roma Norte, desarrollo comercial externalizado Condesa, coach de ventas Condesa, incremento de ventas Condesa
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
