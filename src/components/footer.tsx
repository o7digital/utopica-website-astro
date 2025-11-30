import { Link } from '@/components/ui/Link';
import { Linkedin, Youtube } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  return (
    <footer
      className="bg-[#f2f2f2] border-t border-gray-200 text-gray-900"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" aria-label="Ir a la página de inicio">
              <Logo className="w-[140px] h-[36px]" />
            </Link>
            <p className="text-sm text-gray-700">
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
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sprint-claridad-comercial"
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                >
                  Sprint de Claridad
                </Link>
              </li>
              <li>
                <Link
                  href="/equipo"
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
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
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                >
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                >
                  Condiciones Generales
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-700 mb-4">
              Sé el primero en recibir noticias sobre tendencias, promociones y más
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 text-sm bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#f2f2f2]"
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
                className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#f2f2f2] rounded-sm"
                aria-label="Visitar nuestro perfil de LinkedIn (se abre en una nueva ventana)"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@UtópicaMx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#f2f2f2] rounded-sm"
                aria-label="Visitar nuestro canal de YouTube (se abre en una nueva ventana)"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 space-y-2">
          <p className="text-xs text-gray-600">
            En CDMX acompañamos la libertad comercial y el crecimiento estratégico:{" "}
            <Link href="/consultoria-comercial-cdmx" className="underline underline-offset-2 text-gray-700 hover:text-primary transition-colors">consultoría comercial</Link>,{" "}
            <Link href="/libertad-comercial-cdmx" className="underline underline-offset-2 text-gray-700 hover:text-primary transition-colors">libertad comercial</Link>,{" "}
            <Link href="/crecimiento-empresarial-cdmx" className="underline underline-offset-2 text-gray-700 hover:text-primary transition-colors">crecimiento empresarial</Link> y{" "}
            <Link href="/estrategia-comercial-cdmx" className="underline underline-offset-2 text-gray-700 hover:text-primary transition-colors">estrategia comercial</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
