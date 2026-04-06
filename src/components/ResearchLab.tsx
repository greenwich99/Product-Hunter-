import { TrendingUp, Search, Bell, Target, BarChart3, Globe, ShoppingBag, Users, Calculator, MessageSquare, FileText, Rocket, PenTool, Palette, DollarSign, Share2, Eye, Zap, Instagram, Facebook, MessageCircle, ShoppingCart, Laptop, Heart, Dumbbell, Home } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'DÉTECTION DE TENDANCES',
    tools: [
      {
        icon: TrendingUp,
        title: 'Produits viraux TikTok France',
        desc: 'Détecte les produits qui explosent sur TikTok FR',
        tags: ['VIRAL SCORE', 'VUES', 'ENGAGEMENT']
      },
      {
        icon: ShoppingBag,
        title: 'Tendances Amazon Best-Sellers',
        desc: 'Analyse les meilleures ventes Amazon.fr en temps réel',
        tags: ['RANK', 'REVIEWS', 'BSR']
      },
      {
        icon: Search,
        title: 'Niches sous-exploitées',
        desc: 'Trouve les niches avec forte demande et peu de concurrence',
        tags: ['NICHE SCORE', 'COMPETITION', 'MARGE']
      },
      {
        icon: Bell,
        title: 'Alertes produits émergents',
        desc: 'Notification dès qu\'un produit commence à monter',
        tags: ['ALERTES', 'TEMPS RÉEL']
      },
    ]
  },
  {
    title: 'ANALYSE PUBLICITAIRE',
    tools: [
      {
        icon: Facebook,
        title: 'Spy Facebook Ads Library',
        desc: 'Analyse les publicités de tes concurrents sur Facebook',
        tags: ['CRÉATIFS', 'CIBLAGE', 'BUDGET']
      },
      {
        icon: MessageCircle,
        title: 'TikTok Creative Center',
        desc: 'Identifie les formats publicitaires qui performent sur TikTok',
        tags: ['HOOKS', 'FORMATS', 'CTR']
      },
      {
        icon: Zap,
        title: 'Snapchat Ads Analysis',
        desc: 'Découvre les campagnes Snap qui cartonnent en France',
        tags: ['STORIES', 'SWIPE-UP', 'ROAS']
      },
      {
        icon: Instagram,
        title: 'Instagram Ads Spy',
        desc: 'Analyse les meilleures publicités Instagram de ta niche',
        tags: ['VISUELS', 'COPY', 'ENGAGEMENT']
      },
    ]
  },
  {
    title: 'SCAN MARKETPLACES',
    tools: [
      {
        icon: Globe,
        title: 'LeBonCoin Arbitrage Finder',
        desc: 'Produits pas chers sur LeBonCoin à revendre sur Amazon',
        tags: ['MARGE', 'DISPONIBILITÉ', 'VOLUME']
      },
      {
        icon: ShoppingCart,
        title: 'AliExpress Winning Products',
        desc: 'Calcule la marge réelle d\'un produit (achat + ads + frais)',
        tags: ['DÉLAI', 'PRIX', 'ÉVALUATIONS']
      },
      {
        icon: ShoppingBag,
        title: 'Vinted Tendances Mode',
        desc: 'Articles mode Vinted avec la plus forte rotation',
        tags: ['MARQUES', 'TAILLES', 'PRIX']
      },
      {
        icon: ShoppingCart,
        title: 'Cdiscount vs Amazon Gaps',
        desc: 'Produits disponibles sur Cdiscount mais absents d\'Amazon',
        tags: ['GAP', 'OPPORTUNITÉ', 'PRIX']
      },
    ]
  },
  {
    title: 'ANALYSE CONCURRENTIELLE',
    tools: [
      {
        icon: Users,
        title: 'Analyse Dropshippers FR',
        desc: 'Identifie ce que vendent les dropshippers français en ce moment',
        tags: ['STORES', 'PRODUITS', 'ADS']
      },
      {
        icon: Calculator,
        title: 'Estimation marge & coût',
        desc: 'Calcule la marge réelle d\'un produit (achat + ads + frais)',
        tags: ['MARGE NETTE', 'ROAS', 'SEUIL']
      },
      {
        icon: MessageSquare,
        title: 'Analyse avis & sentiment',
        desc: 'Analyse les avis Amazon pour détecter les points de douleur',
        tags: ['AVIS', 'SENTIMENT', 'OPPORTUNITÉ']
      },
      {
        icon: FileText,
        title: 'Rapport concurrents complet',
        desc: 'Vue 360° sur tes concurrents directs dans une niche',
        tags: ['TRAFIC', 'ADS', 'PRODUITS']
      },
    ]
  },
  {
    title: 'STRATÉGIE & LANCEMENT',
    tools: [
      {
        icon: Rocket,
        title: 'Plan de lancement produit',
        desc: 'Stratégie complète pour lancer un produit gagnant en France',
        tags: ['TIMELINE', 'BUDGET', 'CANAUX']
      },
      {
        icon: FileText,
        title: 'Générateur fiche Amazon FR',
        desc: 'Titre, bullets, description optimisés SEO Amazon.fr',
        tags: ['TITRE', 'MOTS-CLÉS', 'A+']
      },
      {
        icon: PenTool,
        title: 'Brief créatif publicité',
        desc: 'Script vidéo TikTok/Reels pour ton produit gagnant',
        tags: ['HOOK', 'SCRIPT', 'CTA']
      },
      {
        icon: Target,
        title: 'Stratégie prix & positionnement',
        desc: 'Prix optimal pour maximiser conversions et marge',
        tags: ['PRIX', 'POSITIONNEMENT', 'TEST A/B']
      },
    ]
  }
];

export default function ResearchLab() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Laboratoire de Recherche IA</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Activez nos algorithmes spécialisés ou formulez votre propre requête pour une analyse stratégique.</p>
        </div>

        <div className="space-y-20">
          {CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-primary mb-8 uppercase">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool) => (
                  <div key={tool.title} className="card group cursor-pointer hover:bg-white/[0.02]">
                    <div className="p-2.5 rounded-lg bg-white/5 w-fit mb-6 group-hover:bg-primary/10 transition-colors">
                      <tool.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-sm font-bold mb-2 group-hover:text-white transition-colors">{tool.title}</h4>
                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">{tool.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
