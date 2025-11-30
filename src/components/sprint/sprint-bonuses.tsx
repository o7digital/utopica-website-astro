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
      number: "BONUS #1",
      title: "Masterclass: Conversaciones que Convierten",
      subtitle: "Transforma tu Claridad en Oportunidades Reales",
      features: [
        "2 horas de contenido avanzado en video",
        "Las 7 objeciones universales y cómo desarmarlas",
        "Scripts probados para cada etapa de venta"
      ],
      highlight: "Acceso inmediato al inscribirte",
      expandedContent: {
        title: "Los 3 Secretos de la Prospección Magistral:",
        sections: [
          {
            icon: Target,
            title: "Secreto #1: Ya Tienes una Lista Valiosa",
            points: [
              "Cómo activar tu red existente sin sentirte incómodo",
              "La \"pregunta mágica\" que reconecta genuinamente",
              "Por qué no necesitas contactos \"en frío\" por meses"
            ]
          },
          {
            icon: MessageSquare,
            title: "Secreto #2: Toda Conversación es una Oportunidad",
            points: [
              "El modelo VVP (Validación-Valor-Pregunta) para conexiones auténticas",
              "Cómo escuchar señales de interés reales",
              "Por qué \"no forzar la venta\" multiplica tus resultados"
            ]
          },
          {
            icon: Calendar,
            title: "Secreto #3: Siempre Estar Conversando",
            points: [
              "El sistema para mantener 20+ conversaciones activas",
              "Cómo calificar prospectos sin perder tiempo",
              "La mentalidad del 3% vs 97% del mercado"
            ]
          }
        ]
      }
    },
    {
      icon: FileText,
      number: "BONUS #2",
      title: "Acceso de Por Vida a Plataforma Kit de Claridad Comercial",
      subtitle: "Convierte tus Ideas en Documentos Perfectos, Sin Fricción",
      features: [
        "Plataforma de IA conversacional para crear documentos comerciales",
        "Plantillas actualizadas mensualmente para cada industria",
        "Memoria inteligente que aprende de tu negocio"
      ],
      highlight: "Sin pagos adicionales, para siempre",
      expandedContent: {
        title: "Con nuestra plataforma, podrás:",
        hasImage: true,
        imagePath: "/images/kit-claridad-screenshot.png",
        imageAlt: "Kit de Claridad Comercial - Plataforma de IA Conversacional",
        sections: [
          {
            icon: MessageCircle,
            title: "Crear documentos simplemente conversando",
            description: "Olvídate de los campos de texto intimidantes. Responde a preguntas guiadas y naturales, y observa cómo tu documento se construye en tiempo real."
          },
          {
            icon: Brain,
            title: "Aprovechar una memoria que aprende de ti",
            description: "La plataforma recuerda el contexto de tu negocio, tus clientes y proyectos anteriores para que no tengas que repetir la misma información una y otra vez."
          },
          {
            icon: Clock,
            title: "Trabajar a tu propio ritmo y sin presiones",
            description: "Pausa una conversación en cualquier momento y retómala justo donde la dejaste. La plataforma se adapta a tu disponibilidad."
          }
        ]
      }
    },
    {
      icon: Clock,
      number: "BONUS #3",
      title: "Sesión 5: La Cosecha de Victorias y Resultados",
      subtitle: "La celebración de tu transformación",
      features: [
        "Compartirás tus victorias y resultados tangibles",
        "Análisis de casos reales: qué funcionó y por qué",
        "Networking con tu grupo de transformación"
      ],
      highlight: "Un mes después del Sprint",
      expandedContent: {
        title: "¿Qué pasará en esta sesión?",
        sections: [
          {
            icon: MessageSquare,
            title: "Micro Abierto",
            description: "Compartirás tus victorias, aprendizajes y los resultados que has generado desde que implementaste tu nueva claridad."
          },
          {
            icon: Brain,
            title: "Inteligencia Colectiva",
            description: "Escucharás las experiencias reales de tus compañeros, obteniendo ideas que no habías considerado para tu propio negocio."
          },
          {
            icon: Target,
            title: "Análisis de Casos Reales",
            description: "Veremos qué funcionó, qué no, y por qué. Pura práctica, cero teoría. Resolveremos en grupo tu próximo desafío."
          }
        ]
      }
    }
  ],
  en: [
    {
      icon: Video,
      number: "BONUS #1",
      title: "Masterclass: Conversations that Convert",
      subtitle: "Turn your clarity into real opportunities",
      features: [
        "2 hours of advanced video content",
        "The 7 universal objections and how to disarm them",
        "Proven scripts for every sales stage"
      ],
      highlight: "Immediate access when you enroll",
      expandedContent: {
        title: "The 3 Secrets of Masterful Prospecting:",
        sections: [
          {
            icon: Target,
            title: "Secret #1: You Already Have a Valuable List",
            points: [
              "How to activate your existing network without feeling awkward",
              "The “magic question” that reconnects genuinely",
              "Why you don’t need months of cold outreach"
            ]
          },
          {
            icon: MessageSquare,
            title: "Secret #2: Every Conversation Is an Opportunity",
            points: [
              "The VVP model (Validation-Value-Question) for authentic connections",
              "How to listen for real signals of interest",
              "Why “not forcing the sale” multiplies your results"
            ]
          },
          {
            icon: Calendar,
            title: "Secret #3: Always Be in Conversation",
            points: [
              "The system to maintain 20+ active conversations",
              "How to qualify prospects without wasting time",
              "The 3% vs 97% market mindset"
            ]
          }
        ]
      }
    },
    {
      icon: FileText,
      number: "BONUS #2",
      title: "Lifetime Access to the Commercial Clarity Kit Platform",
      subtitle: "Turn your ideas into perfect documents, without friction",
      features: [
        "Conversational AI platform to create commercial documents",
        "Templates updated monthly for every industry",
        "Smart memory that learns from your business"
      ],
      highlight: "No extra payments, forever",
      expandedContent: {
        title: "With our platform, you can:",
        hasImage: true,
        imagePath: "/images/kit-claridad-screenshot.png",
        imageAlt: "Commercial Clarity Kit - Conversational AI Platform",
        sections: [
          {
            icon: MessageCircle,
            title: "Create documents simply by conversing",
            description: "Forget intimidating text fields. Answer guided, natural questions and watch your document build in real time."
          },
          {
            icon: Brain,
            title: "Use memory that learns from you",
            description: "The platform remembers your business context, clients, and past projects so you don’t repeat yourself."
          },
          {
            icon: Clock,
            title: "Work at your own pace",
            description: "Pause any conversation and resume exactly where you left off. The platform adapts to your availability."
          }
        ]
      }
    },
    {
      icon: Clock,
      number: "BONUS #3",
      title: "Session 5: Harvesting Wins and Results",
      subtitle: "The celebration of your transformation",
      features: [
        "You’ll share your wins and tangible results",
        "Real case analysis: what worked and why",
        "Networking with your transformation group"
      ],
      highlight: "One month after the Sprint",
      expandedContent: {
        title: "What will happen in this session?",
        sections: [
          {
            icon: MessageSquare,
            title: "Open Mic",
            description: "Share wins, learnings, and results since implementing your new clarity."
          },
          {
            icon: Brain,
            title: "Collective Intelligence",
            description: "Hear real experiences from peers and gather ideas you hadn’t considered for your own business."
          },
          {
            icon: Target,
            title: "Real Case Analysis",
            description: "See what worked, what didn’t, and why. Pure practice, zero theory. We’ll solve your next challenge together."
          }
        ]
      }
    }
  ]
};

const copy = {
  es: {
    badge: 'VALOR ADICIONAL',
    line1: 'Los 3 Aceleradores de Resultados',
    line2: 'Que Multiplican Tu Inversión',
    description:
      'Herramientas adicionales que aceleran y multiplican tus resultados. Incluidos sin costo extra para participantes del Sprint.',
    closingTitle: 'Estos Bonos Son Tu Ventaja Competitiva',
    closingText:
      'Diseñados para complementar perfectamente tu Sprint y garantizar que mantengas el momentum después de las 4 semanas.',
    closingHighlight: 'Incluidos sin costo adicional, pero solo por tiempo limitado.',
  },
  en: {
    badge: 'ADDITIONAL VALUE',
    line1: 'The 3 Result Accelerators',
    line2: 'That Multiply Your Investment',
    description:
      'Additional tools that accelerate and multiply your results. Included at no extra cost for Sprint participants.',
    closingTitle: 'These Bonuses Are Your Competitive Edge',
    closingText:
      'Designed to perfectly complement your Sprint and ensure you keep momentum after the 4 weeks.',
    closingHighlight: 'Included at no extra cost, but only for a limited time.',
  },
} as const;

export function SprintBonuses({ lang = 'es' }: { lang?: Lang }) {
  const t = copy[lang];
  const list = bonuses[lang];
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
            {t.description}
          </p>
        </motion.div>

        <div className="space-y-16">
          {list.map((bonus, index) => {
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
                {/* Header */}
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

                {/* Main Content */}
                <div className="p-8">
                  {/* Expanded Content */}
                  {bonus.expandedContent && (
                    <div className="pt-0">
                      {index === 2 && (
                        <div className="bg-primary/5 rounded-lg p-4 mb-6">
                          <p className="text-sm font-semibold text-primary">
                            {lang === 'es'
                              ? 'Esta no es una sesión más. Es LA celebración de tu transformación. El momento donde la teoría se convierte en resultados tangibles.'
                              : 'This is not just another session. It is THE celebration of your transformation—the moment theory becomes tangible results.'}
                          </p>
                        </div>
                      )}
                      <h4 className="text-xl font-semibold mb-6">{bonus.expandedContent.title}</h4>
                      
                      {/* Image for Kit de Claridad */}
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

                      {/* Sections */}
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
                          <h5 className="font-semibold mb-3 text-green-800">
                            {lang === 'es' ? 'Ven preparado para compartir:' : 'Come prepared to share:'}
                          </h5>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">1.</span>
                              <span>
                                <strong>{lang === 'es' ? 'Tu Mayor Victoria:' : 'Your Biggest Win:'}</strong>{' '}
                                {lang === 'es'
                                  ? 'Un resultado concreto (cliente nuevo, venta cerrada) gracias a tu nueva claridad'
                                  : 'A concrete result (new client, closed sale) thanks to your new clarity'}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">2.</span>
                              <span>
                                <strong>{lang === 'es' ? 'El "Antes y Después":' : 'The "Before and After":'}</strong>{' '}
                                {lang === 'es'
                                  ? 'Una anécdota real de cómo comunicabas antes vs. ahora'
                                  : 'A real anecdote of how you communicated before vs. now'}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">3.</span>
                              <span>
                                <strong>{lang === 'es' ? 'Métricas de Impacto:' : 'Impact Metrics:'}</strong>{' '}
                                {lang === 'es'
                                  ? 'Datos concretos de mejora en conversión, respuestas, etc.'
                                  : 'Concrete data on conversion, replies, etc.'}
                              </span>
                            </li>
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
