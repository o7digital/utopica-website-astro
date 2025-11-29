import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Calendar, Users } from 'lucide-react';
import { TrackedCTAButton } from '@/components/ui/tracked-cta-button';
import { ScrollIndicator } from '@/components/ui/scroll-indicator';

export function SprintHero() {

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background pt-20"
      aria-labelledby="sprint-hero-title"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">Próximo grupo en Enero 2026</span>
          </motion.div>
          
          <motion.h1 
            id="sprint-hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Haces un Servicio Extraordinario</span>
            <span className="block mt-2 text-primary">
              Pero Nadie lo Sabe
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Es hora de que el mercado entienda por qué tus clientes actuales te recomiendan tanto
          </motion.p>

          <motion.div 
            className="max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-primary/20">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">En 4 semanas construyes un mensaje</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                      <span className="font-semibold">Claro</span>
                      <span className="text-sm text-muted-foreground">como el agua</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                      <span className="font-semibold">Relevante</span>
                      <span className="text-sm text-muted-foreground">para tu cliente ideal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                      <span className="font-semibold">Único</span>
                      <span className="text-sm text-muted-foreground">imposible de copiar</span>
                    </li>
                  </ul>
                </div>
                <div className="border-l border-primary/20 pl-6">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Que logra</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-sm">Generar curiosidad genuina</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-sm">Atraer clientes ideales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-sm">Acelerar tu ciclo de ventas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center gap-2 text-lg mb-6"
          >
            <Users className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Solo 5 lugares por grupo</span>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <TrackedCTAButton
              href={process.env.NEXT_PUBLIC_RECLAIM_URL || "https://app.reclaim.ai/m/gael/sesion-estrategica-claridad-comercial"}
              target="_blank"
              trackingLocation="sprint_hero"
              size="lg"
              className="text-base px-8 py-6 h-auto bg-primary hover:bg-primary/90"
            >
              Agendar Sesión de Claridad
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedCTAButton>
          </motion.div>
          
          <motion.p
            className="mt-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Inversión: $32,500 MXN + IVA • Garantía: Trabajo hasta lograr tu Claridad
          </motion.p>
        </motion.div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
}