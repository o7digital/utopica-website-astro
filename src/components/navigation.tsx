import { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

const mainRoutesEs = [
  { href: "/", label: "Inicio" },
  { href: "/sprint-claridad-comercial", label: "Sprint de Claridad" },
  { href: "/equipo", label: "Equipo" },
];

const mainRoutesEn = [
  { href: "/en", label: "Home" },
  { href: "/en/clarity-sprint", label: "Clarity Sprint" },
  { href: "/en/team", label: "Team" },
];

const esToEnPaths: Record<string, string> = {
  "/": "/en",
  "/sprint-claridad-comercial": "/en/clarity-sprint",
  "/equipo": "/en/team",
  "/consultoria-comercial-cdmx": "/en/commercial-consulting-mexico-city",
  "/libertad-comercial-cdmx": "/en/commercial-freedom-mexico-city",
  "/crecimiento-empresarial-cdmx": "/en/business-growth-mexico-city",
  "/estrategia-comercial-cdmx": "/en/commercial-strategy-mexico-city",
  "/aviso-privacidad": "/en/privacy-notice",
};

const enToEsPaths: Record<string, string> = Object.fromEntries(
  Object.entries(esToEnPaths).map(([esPath, enPath]) => [enPath, esPath])
);

const normalizePath = (path: string) => {
  if (!path) return "/";
  if (path !== "/" && path.endsWith("/")) return path.slice(0, -1);
  return path;
};

interface NavigationProps {
  pathname?: string;
}

export function Navigation({ pathname = "/" }: NavigationProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const normalizedPath = normalizePath(pathname);
  const isEnglish = normalizedPath.startsWith("/en");
  const routes = isEnglish ? mainRoutesEn : mainRoutesEs;
  const toggleHref = isEnglish
    ? enToEsPaths[normalizedPath] || normalizePath(normalizedPath.replace(/^\/en/, "") || "/")
    : esToEnPaths[normalizedPath] || `/en${normalizedPath === "/" ? "" : normalizedPath}`;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b" role="navigation" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={isEnglish ? "/en" : "/"} aria-label={isEnglish ? "Go to homepage" : "Ir a la página de inicio"}>
              <Logo className="w-[140px] h-[36px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {routes.map((route) => (
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
            <Link
              href={toggleHref}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
            >
              {isEnglish ? "ES" : "EN"}
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_RECLAIM_URL || "https://app.reclaim.ai/m/gael/sesion-estrategica-claridad-comercial"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {isEnglish ? "Book a Clarity Session" : "Agendar Sesión de Claridad"}
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
              {routes.map((route) => (
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
              <Link
                href={toggleHref}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {isEnglish ? "ES" : "EN"}
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_RECLAIM_URL || "https://app.reclaim.ai/m/gael/sesion-estrategica-claridad-comercial"}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 mt-2 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => {
                  setIsOpen(false);
                }}
                role="menuitem"
              >
                {isEnglish ? "Book a Clarity Session" : "Agendar Sesión de Claridad"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
