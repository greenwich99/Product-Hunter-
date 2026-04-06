import { Zap, Instagram, Facebook, MessageCircle, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Bentayeb</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            L'intelligence artificielle au service des e-commerçants français. Scannez, analysez et lancez vos produits gagnants en quelques secondes.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Facebook className="w-5 h-5 text-gray-400" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Instagram className="w-5 h-5 text-gray-400" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <MessageCircle className="w-5 h-5 text-gray-400" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Globe className="w-5 h-5 text-gray-400" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 uppercase tracking-wider">Produit</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary transition-colors">Exploration IA</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Analytique</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Écosystème</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Offres</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 uppercase tracking-wider">Légal</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary transition-colors">Mentions Légales</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">CGU / CGV</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 uppercase tracking-wider">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-4">Recevez les dernières tendances du marché FR.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 outline-none focus:border-primary/50 transition-colors"
            />
            <button className="btn-primary px-4 py-2 text-sm">OK</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">
          © 2026 BENTAYEB AI • INTELLIGENCE PRODUIT MARCHÉ FR • TOUS DROITS RÉSERVÉS
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
          <span>LEBONCOIN</span>
          <span>AMAZON FR</span>
          <span>ALIEXPRESS</span>
          <span>VINTED</span>
          <span>FACEBOOK ADS</span>
          <span>TIKTOK ADS</span>
          <span>SNAPCHAT</span>
          <span>CDISCOUNT</span>
          <span>FNAC</span>
          <span>TEMU</span>
          <span>ALIBABA</span>
          <span>SHOPIFY</span>
        </div>
      </div>
    </footer>
  );
}
