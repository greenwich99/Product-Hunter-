import { useState } from 'react';
import { Search, Zap, Loader2, Sparkles, TrendingUp, ShoppingCart, Target, BarChart3, Users, Globe, Instagram, Facebook, MessageCircle, ShoppingBag, Laptop, Heart, Dumbbell, Home } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";

const PLATFORMS = [
  { name: 'LeBonCoin', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { name: 'Amazon FR', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { name: 'AliExpress', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  { name: 'Vinted', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
  { name: 'Facebook Ads', color: 'bg-blue-600/20 text-blue-400 border-blue-600/30' },
  { name: 'TikTok Ads', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  { name: 'Snapchat', color: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30' },
  { name: 'Instagram', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { name: 'Cdiscount', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { name: 'Fnac/Darty', color: 'bg-red-600/20 text-red-400 border-red-600/30' },
  { name: '+ 15 sources', color: 'bg-white/10 text-gray-400 border-white/10' },
];

const SUGGESTED_QUERIES = [
  "Produits tendance femmes 18-35 ans",
  "Gadgets tech viral TikTok France",
  "Produits dropshipping marge élevée",
  "Niche beauté & skincare sous-exploitée",
  "Analyse pub Facebook concurrents fitness",
  "Produit LeBonCoin à revendre sur Amazon"
];

export default function Hero() {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!query.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Tu es un expert en e-commerce et analyse de marché pour le marché français. 
        L'utilisateur demande : "${query}". 
        Analyse cette requête et propose 3 produits gagnants potentiels avec :
        - Nom du produit
        - Pourquoi c'est un gagnant (tendance TikTok, Amazon, etc.)
        - Marge estimée
        - Plateforme recommandée pour la vente.
        Réponds en français avec un ton professionnel et enthousiaste. Utilise des emojis.`,
      });

      setResult(response.text || "Désolé, je n'ai pas pu analyser cette requête.");
    } catch (error) {
      console.error("Analysis failed:", error);
      setResult("Une erreur est survenue lors de l'analyse. Veuillez réessayer.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-primary font-bold mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          IA • Marché Français • Temps Réel
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          L'IA qui déniche vos <br />
          <span className="text-primary italic">Produits Gagnants</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          L'intelligence artificielle au service de votre croissance. Scannez, analysez et dominez le marché français en identifiant les opportunités à haute rentabilité en temps réel.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {PLATFORMS.map((platform) => (
            <span key={platform.name} className={`px-3 py-1 rounded-full border text-[10px] font-medium ${platform.color}`}>
              {platform.name}
            </span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative max-w-3xl mx-auto mb-8"
        >
          <div className="glass rounded-2xl p-2 flex items-center gap-2 pr-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: trouve les produits tendance pour femmes 25-35 ans sur TikTok et Amazon FR..."
                className="w-full bg-transparent border-none outline-none text-white placeholder:text-gray-500 py-3"
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              />
            </div>
            <button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="btn-primary flex items-center gap-2 py-3 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Zap className="w-5 h-5 fill-current" />
              )}
              Scanner
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {SUGGESTED_QUERIES.map((q) => (
            <button 
              key={q} 
              onClick={() => setQuery(q)}
              className="text-[11px] text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 transition-all"
            >
              {q}
            </button>
          ))}
        </motion.div>

        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12 text-left glass rounded-2xl p-8 max-w-3xl mx-auto border-primary/20"
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold">Analyse de l'IA terminée</h3>
              </div>
              <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-wrap">
                {result}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
