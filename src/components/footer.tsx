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
              
              {/* Visible SEO keywords - English */}
              <p className="text-sm text-gray-600 text-center leading-relaxed mt-4">
                outsourced business development CDMX, outsourced business development Mexico City, commercial consulting CDMX, commercial consulting Mexico City, sales coach CDMX, sales coaching Mexico City, sales growth CDMX, sales growth in Mexico City, sales training CDMX, commercial training Mexico City, B2B sales consulting CDMX, B2B sales Mexico City, sales team optimization CDMX, commercial strategy CDMX, sales strategy Mexico City, sales department outsourcing CDMX, commercial outsourcing Mexico City, B2B revenue generation CDMX, sales scaling CDMX, commercial performance improvement CDMX, sales consultants CDMX, commercial advisory Mexico City, sales team training CDMX, commercial support CDMX, commercial transformation CDMX
              </p>
            </>
          ) : (
            <>
              {/* Spanish Footer */}
              <p className="text-xs text-muted-foreground text-center mb-2">
                Desarrollo comercial externalizado, coaching de ventas e incremento de ventas en Ciudad de México: Polanco, Reforma, Santa Fe, Roma Norte y Condesa.
              </p>
              
              {/* Visible SEO keywords - Spanish */}
              <p className="text-sm text-gray-600 text-center leading-relaxed mt-4">
                desarrollo comercial externalizado CDMX, desarrollo comercial externalizado Ciudad de México, consultoría comercial CDMX, consultoría comercial Ciudad de México, coach de ventas CDMX, coaching de ventas Ciudad de México, incremento de ventas CDMX, incremento de ventas en Ciudad de México, capacitación en ventas CDMX, capacitación comercial Ciudad de México, consultoría de ventas B2B CDMX, ventas B2B Ciudad de México, optimización de equipos de ventas CDMX, estrategia comercial CDMX, estrategia de ventas Ciudad de México, externalización del área comercial CDMX, outsourcing comercial Ciudad de México, generación de ingresos B2B CDMX, escalamiento de ventas CDMX, mejora del rendimiento comercial CDMX, consultores de ventas CDMX, asesoría comercial Ciudad de México, formación de equipos de ventas CDMX, acompañamiento comercial CDMX, transformación comercial CDMX
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
