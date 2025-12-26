'use client';

import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" aria-label="Ir a la página de inicio">
              <Logo className="w-[140px] h-[36px]" />
            </Link>
            <p className="text-sm text-gray-600">
              Libertad comercial para fundadores B2B
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Utópica. Todos los derechos reservados.
            </p>
          </div>

          {/* Compañía */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">COMPAÑÍA</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/sprint-claridad-comercial" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Sprint de Claridad
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipo" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Equipo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/aviso-privacidad" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-notice" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Privacy Notice
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Condiciones Generales
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-600 mb-4">
              Sé el primero en recibir noticias sobre tendencias, promociones y más
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-label="Tu dirección de email"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                Suscribirse
              </button>
            </form>
            
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6" aria-label="Enlaces de redes sociales">
              <a 
                href="https://www.linkedin.com/company/somosutopica/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                aria-label="Visitar nuestro perfil de LinkedIn (se abre en una nueva ventana)"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@UtópicaMx" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                aria-label="Visitar nuestro canal de YouTube (se abre en una nueva ventana)"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="text-xs text-gray-500 leading-relaxed space-y-3">
            <p>
              En Utópica ayudamos a fundadores B2B a lograr claridad comercial y libertad comercial a través de nuestro sprint comercial. Trabajamos con equipos de ventas para desarrollar un mensaje de ventas claro, estrategia comercial efectiva y posicionamiento B2B diferenciado. Nuestra consultoría de ventas se especializa en delegación de ventas, escalamiento B2B y automatización comercial.
            </p>
            <p>
              We help B2B founders achieve commercial clarity and commercial freedom through our commercial sprint. We work with sales teams to develop a clear sales message, effective commercial strategy, and differentiated B2B positioning. Our sales consulting specializes in sales delegation, B2B scaling, and sales automation.
            </p>
            <p>
              Creamos propuestas de valor y argumentos de venta robustos, desarrollamos playbooks comerciales y sistemas de venta. Ofrecemos capacitación en ventas con metodologías probadas y discursos comerciales que funcionan. We create strong value propositions and sales arguments, develop commercial playbooks and sales systems. We offer sales training with proven sales methodologies and effective sales pitches.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
