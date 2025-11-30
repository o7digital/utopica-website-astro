import { motion } from 'framer-motion';
import { Gift, Video, FileText, Clock, Target, MessageSquare, Calendar, MessageCircle, Brain, type LucideIcon } from 'lucide-react';

type Lang = 'es' | 'en';

interface BonusSection {
  icon: LucideIcon;
  title: string;
  points?: string[];
  description?: string;
}

interface Bonus {
  icon: LucideIcon;
  number: string;
  title: string;
  subtitle: string;
  value?: string;
  features: string[];
  highlight: string;
  expandedContent?: {
    title: string;
    hasImage?: boolean;
    imagePath?: string;
    imageAlt?: string;
    sections: BonusSection[];
  };
}

const bonuses: Record<Lang, Bonus[]> = {
  es: [
    {
      icon: Video,
      number: 'BONUS #1',
      title: 'Masterclass: Conversaciones que Convierten',
      subtitle: 'Transforma tu Claridad en Oportunidades Reales',
      features: [
        '2 horas de contenido avanzado en video',
        'Las 7 objeciones universales y cómo desarmarlas',
        'Scripts probados para cada etapa de venta',
      ],
      highlight: 'Acceso inmediato al inscribirte',
      expandedContent: {
        title: 'Los 3 Secretos de la Prospección Magistral:',
        sections: [
          {
            icon: Target,
            title: 'Secreto #1: Ya Tienes una Lista Valiosa',
            points: [
              'Cómo activar tu red existente sin sentirte incómodo',
              'La "pregunta mágica" que reconecta genuinamente',
              'Por qué no necesitas contactos "en frío" por meses',
            ],
          },
          {
            icon: MessageSquare,
            title: 'Secreto #2: Toda Conversación es una Oportunidad',
            points: [
              'El modelo VVP (Validación-Valor-Pregunta) para conexiones auténticas',
              'Cómo escuchar señales de interés reales',
              'Por qué "no forzar la venta" multiplica tus resultados',
            ],
          },
          {
            icon: Calendar,
            title: 'Secreto #3: Siempre Estar Conversando',
            points: [
              'El sistema para mantener 20+ conversaciones activas',
              'Cómo calificar prospectos sin perder tiempo',
              'La mentalidad del 3% vs 97% del mercado',
            ],
          },
        ],
      },
    },
    {
      icon: FileText,
      number: 'BONUS #2',
      title: 'Acceso de Por Vida a Plataforma Kit de Claridad Comercial',
      subtitle: 'Convierte tus Ideas en Documentos Perfectos, Sin Fricción',
      features: [
        'Plataforma de IA conversacional para crear documentos comerciales',
        'Plantillas actualizadas mensualmente para cada industria',
        'Memoria inteligente que aprende de tu negocio',
      ],
      highlight: 'Sin pagos adicionales, para siempre',
      expandedContent: {
        title: 'Con nuestra plataforma, podrás:',
        hasImage: true,
        imagePath: '/images/kit-claridad-screenshot.png',
        imageAlt: 'Kit de Claridad Comercial - Plataforma de IA Conversacional',
        sections: [
          {
            icon: MessageCircle,
            title: 'Crear documentos simplemente conversando',
            description:
              'Olvídate de los campos de texto intimidantes. Responde a preguntas guiadas y naturales, y observa cómo tu documento se construye en tiempo real.',
          },
          {
            icon: Brain,
            title: 'Aprovechar una memoria que aprende de ti',
            description:
              'La plataforma recuerda el contexto de tu negocio, tus clientes y proyectos anteriores para que no tengas que repetir la misma información una y otra vez.',
          },
          {
            icon: Clock,
            title: 'Trabajar a tu propio ritmo y sin presiones',
            description:
              'Pausa una conversación en cualquier momento y retómala justo donde la dejaste. La plataforma se adapta a tu disponibilidad.',
          },
        ],
      },
    },
    {
      icon: Clock,
      number: 'BONUS #3',
      title: 'Sesión 5: La Cosecha de Victorias y Resultados',
      subtitle: 'La celebración de tu transformación',
      features: [
        'Compartirás tus victorias y resultados tangibles',
        'Análisis de casos reales: qué funcionó y por qué',
        'Networking con tu grupo de transformación',
      ],
      highlight: 'Un mes después del Sprint',
      expandedContent: {
        title: '¿Qué pasará en esta sesión?',
        sections: [
          {
            icon: MessageSquare,
            title: 'Micro Abierto',
            description:
              'Compartirás tus victorias, aprendizajes y los resultados que has generado desde que implementaste tu nueva claridad.',
          },
          {
            icon: Brain,
            title: 'Inteligencia Colectiva',
            description:
              'Escucharás las experiencias reales de tus compañeros, obteniendo ideas que no habías considerado para tu propio negocio.',
          },
          {
            icon: Target,
            title: 'Análisis de Casos Reales',
            description:
              'Veremos qué funcionó, qué no, y por qué. Pura práctica, cero teoría. Resolveremos en grupo tu próximo desafío.',
          },
        ],
      },
    },
  ],
  en: [
    {
      icon: Video,
      number: 'BONUS #1',
      title: 'Masterclass: Conversations that Convert',
      subtitle: 'Turn your clarity into real opportunities',
      features: [
        '2 hours of advanced video content',
        'The 7 universal objections and how to dismantle them',
        'Proven scripts for every sales stage',
      ],
      highlight: 'Immediate access when you enroll',
      expandedContent: {
        title: 'The 3 Secrets of Masterful Prospecting:',
        sections: [
          {
            icon: Target,
            title: 'Secret #1: You already have a valuable list',
            points: [
              'How to activate your existing network without feeling awkward',
              'The "magic question" that genuinely reconnects',
              'Why you don't need months of cold contacts',
            ],
          },
          {
            icon: MessageSquare,
            title: 'Secret #2: Every conversation is an opportunity',
            points: [
              'The VVP model (Validate–Value–Prompt) for authentic connections',
              'How to listen for real buying signals',
              'Why not forcing the sale multiplies results',
            ],
          },
          {
            icon: Calendar,
            title: 'Secret #3: Always be in conversation',
            points: [
              'The system to keep 20+ active conversations',
              'How to qualify prospects without wasting time',
              'The 3% vs 97% market mindset',
            ],
          },
        ],
      },
    },
    {
      icon: FileText,
      number: 'BONUS #2',
      title: 'Lifetime Access to the Commercial Clarity Kit Platform',
      subtitle: 'Turn ideas into perfect documents without friction',
      features: [
        'Conversational AI platform to create commercial documents',
        'Templates updated monthly for each industry',
        'Smart memory that learns your business',
      ],
      highlight: 'No extra payments, forever',
      expandedContent: {
        title: 'With our platform, you'll be able to:',
        hasImage: true,
        imagePath: '/images/kit-claridad-screenshot.png',
        imageAlt: 'Commercial Clarity Kit - Conversational AI platform',
        sections: [
          {
            icon: MessageCircle,
            title: 'Create documents just by talking',
            description:
              'Forget intimidating text fields. Answer guided, natural questions and watch your document build in real time.',
          },
          {
            icon: Brain,
            title: 'Leverage a memory that learns from you',
            description:
              'The platform remembers your business context, clients, and past projects so you never repeat the same info.',
          },
          {
            icon: Clock,
            title: 'Work at your own pace',
            description:
              'Pause a conversation anytime and resume exactly where you left off. The platform adapts to your schedule.',
          },
        ],
      },
    },
    {
      icon: Clock,
      number: 'BONUS #3',
      title: 'Session 5: Harvesting Wins and Results',
      subtitle: 'The celebration of your transformation',
      features: [
        'You'll share tangible wins and results',
        'Real case analysis: what worked and why',
        'Networking with your transformation group',
      ],
      highlight: 'One month after the Sprint',
      expandedContent: {
        title: 'What happens in this session?',
        sections: [
          {
            icon: MessageSquare,
            title: 'Open Mic',
            description:
              'Share your wins, learnings, and the results you've generated since implementing your new clarity.',
          },
          {
            icon: Brain,
            title: 'Collective Intelligence',
            description:
              'Hear real experiences from peers to get ideas you hadn't considered for your business.',
          },
          {
            icon: Target,
            title: 'Real Case Analysis',
            description:
              'We'll see what worked, what didn't, and why. Pure practice, zero theory. We'll solve your next challenge together.',
          },
        ],
      },
    },
  ],
};

const copy = {
  es: {
    badge: 'VALOR ADICIONAL',
    line1: 'Los 3 Aceleradores de Resultados',
    line2: 'Que Multiplican Tu Inversión',
    intro:
      'Herramientas adicionales que aceleran y multiplican tus resultados. Incluidos sin costo extra para participantes del Sprint.',
    closingTitle: 'Estos Bonos Son Tu Ventaja Competitiva',
    closingText:
      'Diseñados para complementar perfectamente tu Sprint y garantizar que mantengas el momentum después de las 4 semanas.',
    closingHighlight: 'Incluidos sin costo adicional, pero solo por tiempo limitado.',
    bonus3Intro:
      'Esta no es una sesión más. Es LA celebración de tu transformación. El momento donde la teoría se convierte en resultados tangibles.',
    bonus3PrepTitle: 'Ven preparado para compartir:',
    bonus3Prep: [
      { label: '1.', text: 'Tu Mayor Victoria: Un resultado concreto (cliente nuevo, venta cerrada) gracias a tu nueva claridad' },
      { label: '2.', text: 'El "Antes y Después": Una anécdota real de cómo comunicabas antes vs. ahora' },
      { label: '3.', text: 'Métricas de Impacto: Datos concretos de mejora en conversión, respuestas, etc.' },
    ],
  },
  en: {
    badge: 'ADDED VALUE',
    line1: 'The 3 Results Accelerators',
    line2: 'That Multiply Your Investment',
    intro:
      'Extra tools that speed up and multiply your results. Included at no extra cost for Sprint participants.',
    closingTitle: 'These Bonuses Are Your Competitive Edge',
    closingText:
      'Designed to perfectly complement your Sprint and ensure you keep momentum after the 4 weeks.',
    closingHighlight: 'Included at no additional cost, for a limited time only.',
    bonus3Intro:
      'This isn't just another session. It's THE celebration of your transformation—the moment when theory turns into tangible results.',
    bonus3PrepTitle: 'Come ready to share:',
    bonus3Prep: [
      { label: '1.', text: 'Your Biggest Win: A concrete result (new client, deal closed) thanks to your new clarity' },
      { label: '2.', text: 'The "Before and After": A real story of how you communicated before vs. now' },
      { label: '3.', text: 'Impact Metrics: Concrete improvements in conversion, replies, etc.' },
    ],
  },
} as const;

export function SprintBonuses({ lang = 'es' }: { lang?: Lang }) {
  const t = copy[lang];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <Gift className="h-5 w-5" />
            <span className="font-semibold">{t.badge}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="block">{t.line1}</span>
            <span className="block text-primary">{t.line2}</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.intro}
          </p>
        </motion.div>

        <div className="space-y-16">
          {bonuses[lang].map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-2xl border shadow-lg overflow-hidden"
              >
                <div className="p-8 bg-gradient-to-r from-primary/5 to-primary/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-green-600">{bonus.number}</span>
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{bonus.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{bonus.subtitle}</p>
                  
                  <div className="flex items-center justify-between">
                    {bonus.value && <p className="font-bold text-xl text-primary">{bonus.value}</p>}
                    <p className="text-sm text-green-600 font-semibold">{bonus.highlight}</p>
                  </div>
                </div>

                <div className="p-8">
                  {bonus.expandedContent && (
                    <div className="pt-0">
                      {index === 2 && (
                        <div className="bg-primary/5 rounded-lg p-4 mb-6">
                          <p className="text-sm font-semibold text-primary">
                            {t.bonus3Intro}
                          </p>
                        </div>
                      )}
                      <h4 className="text-xl font-semibold mb-6">{bonus.expandedContent.title}</h4>
                      
                      {bonus.expandedContent.hasImage && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="relative rounded-xl overflow-hidden shadow-xl border mb-8"
                        >
                          <img
                            src={bonus.expandedContent.imagePath!}
                            alt={bonus.expandedContent.imageAlt!}
                            width={1200}
                            height={675}
                            className="w-full h-auto"
                          />
                        </motion.div>
                      )}

                      <div className="grid md:grid-cols-3 gap-6">
                        {bonus.expandedContent.sections.map((section, sectionIndex) => {
                          const SectionIcon = section.icon;
                          return (
                            <div key={sectionIndex} className="bg-muted/50 rounded-lg p-4">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                                  <SectionIcon className="h-5 w-5 text-primary" />
                                </div>
                                <h5 className="font-semibold text-sm">{section.title}</h5>
                              </div>
                              
                              {section.description ? (
                                <p className="text-sm text-muted-foreground">{section.description}</p>
                              ) : section.points && (
                                <ul className="space-y-2">
                                  {section.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                      <span className="text-primary mt-1">•</span>
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      
                      {index === 2 && (
                        <div className="mt-8 bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                          <h5 className="font-semibold mb-3 text-green-800">{t.bonus3PrepTitle}</h5>
                          <ul className="space-y-2 text-sm">
                            {t.bonus3Prep.map((item, prepIdx) => (
                              <li key={prepIdx} className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">{item.label}</span>
                                <span>{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold mb-4">{t.closingTitle}</h3>
            <p className="text-lg text-muted-foreground">
              {t.closingText}
            </p>
            <p className="text-lg font-semibold text-green-700 mt-4">
              {t.closingHighlight}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
