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
                B2B sales consulting in Mexico City: Polanco, Reforma, Santa Fe, Roma Norte, Condesa, Insurgentes and Lomas de Chapultepec.
              </p>
              
              {/* Invisible SEO keywords - English */}
              <div style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }} aria-hidden="true">
                B2B sales consulting Mexico City, sales strategy consulting CDMX, commercial consulting Mexico City, revenue growth consulting Mexico City, sales enablement consulting Mexico, sales consulting for B2B founders, go-to-market consulting Mexico, sales consulting Polanco Mexico, sales consulting Santa Fe Mexico, commercial consulting Reforma Mexico City, commercial consulting Roma Norte, commercial consulting Condesa Mexico
              </div>
            </>
          ) : (
            <>
              {/* Spanish Footer */}
              <p className="text-xs text-muted-foreground text-center mb-2">
                Consultoría comercial y ventas B2B en CDMX: Polanco, Reforma, Santa Fe, Roma Norte, Condesa, Insurgentes y Lomas de Chapultepec.
              </p>
              
              {/* Invisible SEO keywords - Spanish */}
              <div style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }} aria-hidden="true">
                consultoría comercial CDMX, consultoría ventas B2B CDMX, claridad comercial B2B CDMX, sprint comercial CDMX, estrategia de ventas B2B CDMX, escalamiento comercial B2B CDMX, consultoría comercial Polanco, consultoría comercial Reforma, consultoría comercial Santa Fe, consultoría comercial Roma Norte, consultoría comercial Condesa, consultoría comercial Insurgentes, consultoría comercial Lomas de Chapultepec, venta consultiva B2B CDMX, mensaje de ventas B2B
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
