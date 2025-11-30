"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import Image from 'next/image';

export function PrivacyPolicyContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation with gradient background on scroll */}
      <nav 
        className={cn(
          "fixed w-full z-50 border-b transition-all duration-300",
          isScrolled 
            ? "bg-gradient-to-b from-gray-100 to-gray-50/80 backdrop-blur-md" 
            : "bg-white/80 backdrop-blur-md"
        )}
        role="navigation" 
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" aria-label="Ir a la página de inicio">
                <Logo className="w-[140px] h-[36px]" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm text-muted-foreground"
              >
                Inicio
              </Link>
              <Link
                href="/sprint-claridad-comercial"
                className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm text-muted-foreground"
              >
                Sprint de Claridad
              </Link>
              <Link
                href="/equipo"
                className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm text-muted-foreground"
              >
                Equipo
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
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  Inicio
                </Link>
                <Link
                  href="/sprint-claridad-comercial"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  Sprint de Claridad
                </Link>
                <Link
                  href="/equipo"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  Equipo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content with Logo Watermark */}
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-5xl h-[700px] opacity-[0.04]">
            <Image
              src="/images/logo-gris.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content over the watermark */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Aviso de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Identidad y Domicilio del Responsable
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Concentradora Contracorriente SA de CV</strong> (en adelante "Utópica", "nosotros" o "nuestro"), con domicilio en México, es responsable del tratamiento de sus datos personales.
              </p>
              <p className="text-gray-700">
                Para cualquier consulta relacionada con este Aviso de Privacidad, puede contactarnos en: <a href="mailto:gael@utopica.net" className="text-primary hover:underline">gael@utopica.net</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Datos Personales que Recabamos
              </h2>
              <p className="text-gray-700 mb-4">
                Para las finalidades señaladas en este aviso de privacidad, podemos recabar sus datos personales de distintas formas:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Cuando usted nos los proporciona directamente a través de nuestro sitio web, formularios de contacto o servicios</li>
                <li>Cuando visita nuestro sitio web o utiliza nuestros servicios en línea</li>
                <li>Cuando interactúa con nosotros por correo electrónico o redes sociales</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Los datos personales que recabamos incluyen:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Datos de identificación:</strong> nombre completo, correo electrónico</li>
                <li><strong>Datos de contacto:</strong> número telefónico, dirección</li>
                <li><strong>Datos profesionales:</strong> empresa, cargo, información de negocio</li>
                <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Finalidades del Tratamiento
              </h2>
              <p className="text-gray-700 mb-4">
                Los datos personales que recabamos serán utilizados para las siguientes finalidades:
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Finalidades Primarias (necesarias):</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Proveer los servicios y productos solicitados</li>
                <li>Responder a sus solicitudes de información</li>
                <li>Gestionar su participación en nuestros programas (Sprint de Claridad Comercial)</li>
                <li>Procesar pagos y facturación</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Finalidades Secundarias (opcionales):</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Envío de newsletters y comunicaciones de marketing</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Realizar análisis estadísticos y de comportamiento</li>
                <li>Personalizar nuestros servicios según sus preferencias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Derechos ARCO (México)
              </h2>
              <p className="text-gray-700 mb-4">
                Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Acceder</strong> a sus datos personales que poseemos</li>
                <li><strong>Rectificar</strong> sus datos en caso de ser inexactos o incompletos</li>
                <li><strong>Cancelar</strong> sus datos cuando considere que no están siendo utilizados conforme a los principios y deberes establecidos en la Ley</li>
                <li><strong>Oponerse</strong> al tratamiento de sus datos personales para fines específicos</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Para ejercer estos derechos, puede enviar su solicitud a: <a href="mailto:gael@utopica.net" className="text-primary hover:underline">gael@utopica.net</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Derechos bajo el RGPD (Unión Europea)
              </h2>
              <p className="text-gray-700 mb-4">
                Si se encuentra en la Unión Europea, además de los derechos mencionados, tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común</li>
                <li><strong>Limitación del tratamiento:</strong> solicitar la restricción del procesamiento de sus datos</li>
                <li><strong>No ser objeto de decisiones automatizadas:</strong> incluyendo la elaboración de perfiles</li>
                <li><strong>Presentar una reclamación</strong> ante la autoridad de control competente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Derechos bajo Leyes de EE.UU.
              </h2>
              <p className="text-gray-700 mb-4">
                Si es residente de ciertos estados de EE.UU. (California, Virginia, Colorado, etc.), puede tener derechos adicionales bajo leyes como CCPA/CPRA:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Conocer qué datos personales se recopilan sobre usted</li>
                <li>Solicitar la eliminación de sus datos personales</li>
                <li>Optar por no participar en la venta o compartición de sus datos personales</li>
                <li>No discriminación por ejercer sus derechos de privacidad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Transferencia de Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Sus datos personales pueden ser compartidos con:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proveedores de servicios de tecnología (hosting, análisis, CRM)</li>
                <li>Procesadores de pago</li>
                <li>Servicios de marketing y comunicación</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Estas transferencias se realizan únicamente con su consentimiento o cuando sea necesario para cumplir con el servicio solicitado. Todos los terceros están obligados a mantener la confidencialidad de sus datos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookies y Tecnologías de Rastreo
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Medidas de Seguridad
              </h2>
              <p className="text-gray-700">
                Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cambios al Aviso de Privacidad
              </h2>
              <p className="text-gray-700">
                Nos reservamos el derecho de modificar este Aviso de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Revocación del Consentimiento
              </h2>
              <p className="text-gray-700">
                Puede revocar su consentimiento para el tratamiento de sus datos personales en cualquier momento, enviando su solicitud a: <a href="mailto:gael@utopica.net" className="text-primary hover:underline">gael@utopica.net</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contacto
              </h2>
              <p className="text-gray-700">
                Para cualquier duda o aclaración sobre este Aviso de Privacidad, por favor contáctenos en:
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> <a href="mailto:gael@utopica.net" className="text-primary hover:underline">gael@utopica.net</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
