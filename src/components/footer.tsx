import { useEffect, useState } from 'react';
import { Link } from '@/components/ui/Link';
import { Linkedin, Youtube } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

type FooterProps = {
  pathname?: string;
};

export function Footer({ pathname }: FooterProps = {}) {
  const [isEnglish, setIsEnglish] = useState(() => pathname?.startsWith('/en') ?? false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsEnglish(window.location.pathname.startsWith('/en'));
    }
  }, []);

  const navLinks = isEnglish
    ? [
        { href: '/en', label: 'Home' },
        { href: '/en/clarity-sprint', label: 'Clarity Sprint' },
        { href: '/en/team', label: 'Team' },
      ]
    : [
        { href: '/', label: 'Inicio' },
        { href: '/sprint-claridad-comercial', label: 'Sprint de Claridad' },
        { href: '/equipo', label: 'Equipo' },
      ];

  return (
    <footer
      className="bg-[#f2f2f2] border-t border-gray-200 text-gray-900"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href={isEnglish ? '/en' : '/'} aria-label={isEnglish ? 'Go to homepage' : 'Ir a la página de inicio'}>
              <Logo className="w-[140px] h-[36px]" />
            </Link>
            <p className="text-sm text-gray-700">
              {isEnglish
                ? 'Commercial freedom for B2B founders'
                : 'Libertad comercial para fundadores B2B'}
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Utópica. {isEnglish ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {isEnglish ? 'COMPANY' : 'COMPAÑÍA'}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={isEnglish ? '/en/privacy-notice' : '/aviso-privacidad'}
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                >
                  {isEnglish ? 'Privacy Notice' : 'Aviso de Privacidad'}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                >
                  {isEnglish ? 'Terms & Conditions' : 'Condiciones Generales'}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-700 mb-4">
              {isEnglish
                ? 'Be first to receive updates on trends, offers, and more.'
                : 'Sé el primero en recibir noticias sobre tendencias, promociones y más'}
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={isEnglish ? 'Your email' : 'Tu email'}
                className="w-full px-4 py-2 text-sm bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#f2f2f2]"
                aria-label={isEnglish ? 'Your email address' : 'Tu dirección de email'}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                {isEnglish ? 'Subscribe' : 'Suscribirse'}
              </button>
            </form>
            
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6" aria-label={isEnglish ? 'Social links' : 'Enlaces de redes sociales'}>
              <a
                href="https://www.linkedin.com/company/somosutopica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#f2f2f2] rounded-sm"
                aria-label={isEnglish ? 'Visit our LinkedIn profile (opens in a new window)' : 'Visitar nuestro perfil de LinkedIn (se abre en una nueva ventana)'}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@UtópicaMx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#f2f2f2] rounded-sm"
                aria-label={isEnglish ? 'Visit our YouTube channel (opens in a new window)' : 'Visitar nuestro canal de YouTube (se abre en una nueva ventana)'}
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 space-y-2">
          <p className="text-xs text-gray-600">
            {isEnglish
              ? 'In CDMX we support commercial freedom and strategic growth: commercial consulting, commercial freedom, business growth, and commercial strategy.'
              : 'En CDMX acompañamos la libertad comercial y el crecimiento estratégico: consultoría comercial, libertad comercial, crecimiento empresarial y estrategia comercial.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
