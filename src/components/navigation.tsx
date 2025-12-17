"use client";

import { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { trackConversion } from "@/lib/analytics";

const mainRoutes = [
  { href: "/", label: "Inicio" },
  { href: "/sprint-claridad-comercial", label: "Sprint de Claridad" },
  { href: "/equipo", label: "Equipo" },
];

interface NavigationProps {
  pathname?: string;
}

export function Navigation({ pathname = "/" }: NavigationProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const isEnglish = pathname?.startsWith('/en');
  
  // Get the alternate language URL
  const getAlternateUrl = () => {
    if (isEnglish) {
      // Remove /en prefix
      return pathname?.replace(/^\/en/, '') || '/';
    } else {
      // Add /en prefix
      return '/en' + (pathname === '/' ? '' : pathname);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b" role="navigation" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" aria-label="Ir a la página de inicio">
              <Logo className="w-[140px] h-[36px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
                  pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <Link
              href={getAlternateUrl()}
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md border border-gray-200 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={isEnglish ? "Cambiar a español" : "Switch to English"}
            >
              <Globe className="h-4 w-4" />
              {isEnglish ? 'ES' : 'EN'}
            </Link>
            
            <Link
              href={process.env.NEXT_PUBLIC_RECLAIM_URL || "https://app.reclaim.ai/m/gael/sesion-estrategica-claridad-comercial"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => trackConversion.agendarSesion('navigation_desktop')}
            >
              Agendar Sesión de Claridad
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
            id="mobile-menu"
            role="menu"
            aria-label="Menú de navegación móvil"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
              {mainRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    pathname === route.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {route.label}
                </Link>
              ))}
              
              {/* Language Switcher Mobile */}
              <Link
                href={getAlternateUrl()}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 border border-gray-200 mx-3"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                <Globe className="h-4 w-4" />
                {isEnglish ? 'Cambiar a Español' : 'Switch to English'}
              </Link>
              
              <Link
                href={process.env.NEXT_PUBLIC_RECLAIM_URL || "https://app.reclaim.ai/m/gael/sesion-estrategica-claridad-comercial"}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 mt-2 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => {
                  setIsOpen(false);
                  trackConversion.agendarSesion('navigation_mobile');
                }}
                role="menuitem"
              >
                Agendar Sesión de Claridad
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
