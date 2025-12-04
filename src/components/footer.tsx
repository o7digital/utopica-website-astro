'use client';

import { Link } from '@/components/ui/Link';
import { Linkedin, Youtube } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export function Footer() {
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
      </div>
    </footer>
  );
}
