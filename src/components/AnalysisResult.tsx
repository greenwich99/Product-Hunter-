import { motion } from "motion/react";
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  BarChart3, 
  Target, 
  Zap, 
  Globe, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ArrowUpRight,
  Info,
  CheckCircle2,
  Sparkles,
  Rocket,
  ShoppingBag,
  AlertTriangle,
  Lightbulb,
  Search,
  Users,
  TrendingDown,
  PieChart as PieChartIcon,
  Video,
  Mail,
  Leaf,
  Package,
  Globe2,
  Flame
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { cn } from "@/src/lib/utils";

export interface ProductData {
  name: string;
  description: string;
  price: string;
  margin: string;
  platforms: string[];
  adPlatforms: string[];
  trendScore: number;
  evolutionData: { month: string; value: number }[];
  pros: string[];
  cons: string[];
  targetAudience: string;
  financials: {
    cogs: string;
    shipping: string;
    marketingCPA: string;
    netProfit: string;
    roi: string;
  };
  strategy: {
    launchPhase: string;
    scalingPhase: string;
    creativeHooks: string[];
    adCopyIdea: string;
  };
  competitors: {
    name: string;
    price: string;
    strategy: string;
  }[];
  supplyChain: {
    supplierType: string;
    shippingTime: string;
    moq: string;
  };
  marketAnalysis: {
    saturationIndex: number;
    seasonality: string;
    seoKeywords: string[];
    marketSize: string;
  };
  customerPersona: {
    ageRange: string;
    interests: string[];
    painPoints: string[];
    buyingTriggers: string[];
  };
  riskAssessment: {
    risk: string;
    mitigation: string;
  }[];
  growthHacks: {
    upsell: string;
    crossSell: string;
    referralLoop: string;
  };
  contentStrategy: {
    pillars: string[];
    hooks: string[];
  };
  legalCompliance: string[];
  radarData: { subject: string; A: number; fullMark: number }[];
  influencerStrategy: {
    type: string;
    suggestedCollabs: string[];
  };
  viralPotential: {
    score: number;
    reasons: string[];
  };
  ugcScripts: {
    hook: string;
    body: string;
    callToAction: string;
  }[];
  emailFlows: {
    name: string;
    subject: string;
    goal: string;
  }[];
  crossBorderPotential: string[];
  sustainabilityScore: number;
  estimatedMonthlyRevenue: string;
  bundleIdeas: {
    name: string;
    products: string[];
    aovBoost: string;
  }[];
  imagePrompt: string;
}

interface AnalysisResultProps {
  products: ProductData[];
}

export default function AnalysisResult({ products }: AnalysisResultProps) {
  return (
    <div className="mt-16 space-y-24">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Zap className="w-6 h-6 text-primary fill-current" />
        </div>
        <div>
          <h3 className="text-3xl font-bold tracking-tight">Rapport Stratégique Complet</h3>
          <p className="text-gray-500 text-sm">Analyse profonde des opportunités identifiées.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-24">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="space-y-12"
          >
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    Opportunité #{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-yellow-500">
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span className="text-xs font-bold uppercase tracking-widest">Trend Score: {product.trendScore}/100</span>
                  </div>
                </div>
                <h4 className="text-5xl font-bold tracking-tight text-white">{product.name}</h4>
                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">{product.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {product.adPlatforms.map(p => (
                    <div key={p} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                      <PlatformIcon name={p} size="sm" />
                      <span className="text-xs font-bold text-gray-300">{p} Ads</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-[400px] w-full glass rounded-3xl p-8 border-primary/20 bg-primary/[0.02]">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="text-xs font-bold tracking-widest text-primary uppercase">Potentiel de Croissance</h5>
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="h-[180px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={product.evolutionData}>
                      <defs>
                        <linearGradient id={`colorTrend-${index}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#a3e635" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#a3e635" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#141414', border: '1px solid #262626', borderRadius: '12px' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#a3e635" strokeWidth={3} fillOpacity={1} fill={`url(#colorTrend-${index})`} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{product.margin}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Marge Nette</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{product.financials.roi}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">ROI Estimé</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Financials */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-primary">
                  <DollarSign className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Structure de Coûts</h5>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-sm text-gray-400">Prix d'Achat (COGS)</span>
                    <span className="font-bold text-white">{product.financials.cogs}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-sm text-gray-400">Frais de Livraison</span>
                    <span className="font-bold text-white">{product.financials.shipping}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-sm text-gray-400">CPA Marketing Cible</span>
                    <span className="font-bold text-white">{product.financials.marketingCPA}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-sm font-bold text-primary">Profit Net / Unité</span>
                    <span className="text-xl font-bold text-primary">{product.financials.netProfit}</span>
                  </div>
                </div>
              </div>

              {/* Strategy */}
              <div className="card space-y-6 md:col-span-2">
                <div className="flex items-center gap-2 text-primary">
                  <Rocket className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Stratégie de Lancement</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Phase 1: Testing</div>
                      <p className="text-sm text-gray-300 leading-relaxed">{product.strategy.launchPhase}</p>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Phase 2: Scaling</div>
                      <p className="text-sm text-gray-300 leading-relaxed">{product.strategy.scalingPhase}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Creative Hooks (TikTok/Reels)</div>
                    <div className="space-y-2">
                      {product.strategy.creativeHooks.map((hook, i) => (
                        <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-primary/5 border border-primary/10 text-xs text-gray-300">
                          <span className="text-primary font-bold">#{i+1}</span>
                          {hook}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Analysis & Radar */}
              <div className="card md:col-span-1 space-y-6">
                <div className="flex items-center gap-2 text-primary">
                  <BarChart3 className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Analyse de Performance</h5>
                </div>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={product.radarData}>
                      <PolarGrid stroke="#ffffff10" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 10 }} />
                      <Radar
                        name="Produit"
                        dataKey="A"
                        stroke="#a3e635"
                        fill="#a3e635"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Saturation</div>
                    <div className={cn("text-sm font-bold", product.marketAnalysis.saturationIndex > 70 ? "text-red-400" : "text-green-400")}>
                      {product.marketAnalysis.saturationIndex}%
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Saisonnalité</div>
                    <div className="text-sm font-bold text-white">{product.marketAnalysis.seasonality}</div>
                  </div>
                </div>
              </div>

              {/* Customer Persona */}
              <div className="card md:col-span-2 space-y-6">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Avatar Client Idéal</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Tranche d'âge</div>
                      <div className="text-lg font-bold text-white">{product.customerPersona.ageRange}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Centres d'intérêt</div>
                      <div className="flex flex-wrap gap-2">
                        {product.customerPersona.interests.map(interest => (
                          <span key={interest} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Points de Douleur</div>
                    <ul className="space-y-2">
                      {product.customerPersona.painPoints.map(point => (
                        <li key={point} className="flex items-start gap-2 text-xs text-gray-400">
                          <TrendingDown className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Déclencheurs d'Achat</div>
                    <ul className="space-y-2">
                      {product.customerPersona.buyingTriggers.map(trigger => (
                        <li key={trigger} className="flex items-start gap-2 text-xs text-gray-400">
                          <Zap className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                          {trigger}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SEO & Keywords */}
              <div className="card space-y-6">
                <div className="flex items-center gap-2 text-primary">
                  <Search className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">SEO & Mots-Clés FR</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.marketAnalysis.seoKeywords.map(keyword => (
                    <span key={keyword} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400 hover:text-white hover:border-primary/30 transition-all cursor-default">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Taille du Marché Estimée</div>
                  <div className="text-lg font-bold text-white">{product.marketAnalysis.marketSize}</div>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Gestion des Risques</h5>
                </div>
                <div className="space-y-4">
                  {product.riskAssessment.map((risk, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-[10px] text-red-400 uppercase font-bold tracking-widest">Risque: {risk.risk}</div>
                      <p className="text-xs text-gray-400 leading-relaxed">Solution: {risk.mitigation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Hacks */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-primary">
                  <Lightbulb className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Growth Hacks & LTV</h5>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">Upsell Recommandé</div>
                    <div className="text-xs text-gray-300">{product.growthHacks.upsell}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Cross-Sell</div>
                    <div className="text-xs text-gray-300">{product.growthHacks.crossSell}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Boucle de Parrainage</div>
                    <div className="text-xs text-gray-300">{product.growthHacks.referralLoop}</div>
                  </div>
                </div>
              </div>

              {/* Content Strategy */}
              <div className="card space-y-6 md:col-span-2">
                <div className="flex items-center gap-2 text-primary">
                  <Instagram className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Stratégie de Contenu Organique</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-3">Piliers de Contenu</div>
                    <div className="space-y-3">
                      {product.contentStrategy.pillars.map((pillar, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {pillar}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-3">Accroches Virales</div>
                    <div className="space-y-2">
                      {product.contentStrategy.hooks.map((hook, i) => (
                        <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400 italic">
                          "{hook}"
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal & Compliance */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-yellow-500">
                  <Info className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Conformité & Légal (FR)</h5>
                </div>
                <div className="space-y-3">
                  {product.legalCompliance.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Supply & Logistics */}
              <div className="card space-y-6">
                <div className="flex items-center gap-2 text-primary">
                  <ShoppingBag className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Logistique & Sourcing</h5>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Type de Fournisseur</div>
                    <div className="text-sm font-bold text-white">{product.supplyChain.supplierType}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Délai de Livraison FR</div>
                    <div className="text-sm font-bold text-white">{product.supplyChain.shippingTime}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">MOQ (Commande Min.)</div>
                    <div className="text-sm font-bold text-white">{product.supplyChain.moq}</div>
                  </div>
                </div>
              </div>

              {/* Competitors */}
              <div className="card space-y-6 md:col-span-2">
                <div className="flex items-center gap-2 text-primary">
                  <Target className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Analyse de la Concurrence</h5>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.competitors.map((comp, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-white">{comp.name}</span>
                        <span className="text-xs text-primary font-bold">{comp.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{comp.strategy}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">Votre Angle d'Attaque</div>
                  <p className="text-sm text-gray-300 italic">"Se positionner sur {product.targetAudience} avec un angle {product.strategy.creativeHooks[0].toLowerCase()}."</p>
                </div>
              </div>

              {/* Viral Potential & Sustainability */}
              <div className="card space-y-6">
                <div className="flex items-center gap-2 text-primary">
                  <Flame className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Potentiel Viral & Éco</h5>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-[10px] text-orange-400 uppercase font-bold tracking-widest">TikTok Viral Score</div>
                      <span className="text-lg font-bold text-orange-400">{product.viralPotential.score}/100</span>
                    </div>
                    <ul className="space-y-1">
                      {product.viralPotential.reasons.map((r, i) => (
                        <li key={i} className="text-[10px] text-gray-400 flex items-center gap-1">
                          <Zap className="w-2 h-2 text-orange-400" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-[10px] text-green-400 uppercase font-bold tracking-widest">Sustainability Score</div>
                      <Leaf className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="text-lg font-bold text-green-400">{product.sustainabilityScore}/100</div>
                  </div>
                </div>
              </div>

              {/* Influencer Strategy */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Stratégie Influenceurs</h5>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Type de Profils</div>
                    <div className="text-sm font-bold text-white">{product.influencerStrategy.type}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Collabs Suggérées</div>
                    {product.influencerStrategy.suggestedCollabs.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* UGC Scripts */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-primary">
                  <Video className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Scripts UGC (TikTok/Reels)</h5>
                </div>
                <div className="space-y-4">
                  {product.ugcScripts.map((script, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                      <div className="text-[10px] text-primary uppercase font-bold tracking-widest">Script #{i+1}</div>
                      <div className="text-[10px] text-gray-300 font-bold italic">Hook: "{script.hook}"</div>
                      <p className="text-[10px] text-gray-500 leading-tight">{script.body}</p>
                      <div className="text-[10px] text-primary font-bold">CTA: {script.callToAction}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Flows */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Flows Email Marketing</h5>
                </div>
                <div className="space-y-4">
                  {product.emailFlows.map((flow, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <div className="text-[10px] text-white font-bold">{flow.name}</div>
                      <div className="text-[10px] text-gray-500 italic">Sujet: {flow.subject}</div>
                      <div className="text-[10px] text-primary font-bold uppercase tracking-tighter">Objectif: {flow.goal}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cross-Border & Revenue */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-primary">
                  <Globe2 className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Expansion & Revenus</h5>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                    <div className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">CA Mensuel Estimé</div>
                    <div className="text-2xl font-bold text-white">{product.estimatedMonthlyRevenue}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Marchés Prêts (Europe)</div>
                    <div className="flex flex-wrap gap-2">
                      {product.crossBorderPotential.map(country => (
                        <span key={country} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bundle Ideas */}
              <div className="card space-y-6 md:col-span-1">
                <div className="flex items-center gap-2 text-primary">
                  <Package className="w-5 h-5" />
                  <h5 className="font-bold uppercase tracking-widest text-xs">Idées de Bundles (AOV)</h5>
                </div>
                <div className="space-y-4">
                  {product.bundleIdeas.map((bundle, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-white font-bold">{bundle.name}</span>
                        <span className="text-[10px] text-green-400 font-bold">+{bundle.aovBoost} AOV</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {bundle.products.map(p => (
                          <span key={p} className="text-[9px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Creative Asset: AI Image Prompt */}
              <div className="card space-y-6 md:col-span-3 bg-primary/5 border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <h5 className="font-bold uppercase tracking-widest text-xs">Prompt IA pour Visuel Produit</h5>
                  </div>
                  <button 
                    onClick={() => navigator.clipboard.writeText(product.imagePrompt)}
                    className="text-[10px] font-bold text-primary hover:text-white transition-colors flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3" /> COPIER LE PROMPT
                  </button>
                </div>
                <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                  <p className="text-sm text-gray-300 leading-relaxed italic">"{product.imagePrompt}"</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="px-2 py-1 rounded bg-white/5 text-[8px] text-gray-500 font-bold uppercase">Midjourney</div>
                    <div className="px-2 py-1 rounded bg-white/5 text-[8px] text-gray-500 font-bold uppercase">DALL-E 3</div>
                    <div className="px-2 py-1 rounded bg-white/5 text-[8px] text-gray-500 font-bold uppercase">Stable Diffusion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < products.length - 1 && (
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PlatformIcon({ name, size = "md" }: { name: string, size?: "sm" | "md", key?: string }) {
  const s = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  const p = size === "sm" ? "p-1" : "p-2";
  
  const platforms: Record<string, any> = {
    'TikTok': { icon: MessageCircle, color: 'text-pink-500 bg-pink-500/10' },
    'Facebook': { icon: Facebook, color: 'text-blue-600 bg-blue-600/10' },
    'Instagram': { icon: Instagram, color: 'text-purple-500 bg-purple-500/10' },
    'Snapchat': { icon: Zap, color: 'text-yellow-400 bg-yellow-400/10' },
    'Google': { icon: Globe, color: 'text-blue-400 bg-blue-400/10' },
  };

  const platform = platforms[name] || { icon: Info, color: 'text-gray-400 bg-gray-400/10' };
  const Icon = platform.icon;

  return (
    <div className={cn("rounded-lg", platform.color, p)}>
      <Icon className={s} />
    </div>
  );
}
