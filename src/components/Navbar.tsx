import { Search, LayoutGrid, Zap, ShoppingBag, User, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Bentayeb</span>
            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded uppercase font-medium text-gray-400">FR Market</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Exploration</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Analytique</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Écosystème</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Offres</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Connexion</button>
            <button className="btn-primary flex items-center gap-2 text-sm">
              Commencer
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
