import { Home, Heart, Laptop, Dumbbell, ArrowUpRight, TrendingUp, Zap, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const TRENDS = [
  {
    category: 'Maison & Jardin',
    growth: '+24%',
    status: 'HOT',
    statusColor: 'text-orange-400 bg-orange-400/10',
    icon: Home,
    iconColor: 'text-green-400 bg-green-400/10',
  },
  {
    category: 'Beauté & Soins',
    growth: '+18%',
    status: 'STABLE',
    statusColor: 'text-blue-400 bg-blue-400/10',
    icon: Heart,
    iconColor: 'text-blue-400 bg-blue-400/10',
  },
  {
    category: 'Tech & Gadgets',
    growth: '+32%',
    status: 'VIRAL',
    statusColor: 'text-yellow-400 bg-yellow-400/10',
    icon: Laptop,
    iconColor: 'text-yellow-400 bg-yellow-400/10',
  },
  {
    category: 'Sport & Fitness',
    growth: '+15%',
    status: 'EN HAUSSE',
    statusColor: 'text-pink-400 bg-pink-400/10',
    icon: Dumbbell,
    iconColor: 'text-pink-400 bg-pink-400/10',
  },
];

export default function Trends() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              MIS À JOUR IL Y A 5 MIN
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Tendances du Marché Français</h2>
            <p className="text-gray-500 mt-2">Analyse en temps réel des segments à forte croissance sur le territoire national.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRENDS.map((trend) => (
            <div key={trend.category} className="card group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex items-start justify-between mb-8">
                <div className={`p-3 rounded-xl ${trend.iconColor}`}>
                  <trend.icon className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${trend.statusColor}`}>
                  {trend.status}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-4xl font-bold tracking-tight">{trend.growth}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">CROISSANCE MENSUELLE</div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <h3 className="text-lg font-bold">{trend.category}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
