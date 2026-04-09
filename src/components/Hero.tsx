import { useState, useEffect } from 'react';
import { Search, Zap, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import AnalysisResult, { ProductData } from './AnalysisResult';

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
  const [products, setProducts] = useState<(ProductData | null)[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Cache API key to avoid redundant fetches
  const [cachedApiKey, setCachedApiKey] = useState<string | null>(null);

  const getApiKey = async () => {
    let apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      try {
        const configRes = await fetch('/api/config');
        const configData = await configRes.json();
        apiKey = configData.apiKey;
      } catch (e) {
        console.error("Failed to fetch API key from server:", e);
      }
    }
    if (!apiKey) {
      throw new Error("Clé API manquante. Veuillez configurer GEMINI_API_KEY.");
    }
    return apiKey;
  };

  // Pre-fetch API key on mount
  useEffect(() => {
    const fetchKey = async () => {
      try {
        const apiKey = await getApiKey();
        setCachedApiKey(apiKey);
      } catch (e) {
        console.error("Pre-fetching API key failed:", e);
      }
    };
    fetchKey();
  }, []);

  const handleAnalyze = async (searchQuery?: string) => {
    const finalQuery = searchQuery || query;
    if (!finalQuery.trim()) return;
    
    setIsAnalyzing(true);
    setProducts([null, null, null]); // Initialize with placeholders
    setError(null);

    const analyzeSingleProduct = async (query: string, index: number, retries = 3): Promise<ProductData> => {
      try {
        const apiKey = cachedApiKey || await getApiKey();
        if (!cachedApiKey) setCachedApiKey(apiKey);
        
        const ai = new GoogleGenAI({ apiKey });
        
        const prompts = [
          "Produit #1: Focus Marge & Rentabilité.",
          "Produit #2: Focus Viralité TikTok & Ads.",
          "Produit #3: Focus Niche & Long Terme."
        ];

        // Model rotation: prioritize Flash for reliability, then Lite
        const models = ["gemini-3-flash-preview", "gemini-3.1-flash-lite-preview", "gemini-flash-latest"];
        const modelToUse = models[Math.min(3 - retries, models.length - 1)];

        const response = await ai.models.generateContent({
          model: modelToUse,
          contents: [{ role: 'user', parts: [{ text: `Analyse stratégique pour "${query}". 
          ${prompts[index]}
          Génère 1 produit détaillé. 
          Format: JSON valide uniquement.
          Style: Concis mais complet.` }] }],
          config: {
            systemInstruction: "Tu es un expert en e-commerce et dropshipping. Génère un rapport d'opportunité produit au format JSON. Sois précis et stratégique. Utilise le français.",
            temperature: 0.4,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                description: { type: Type.STRING },
                price: { type: Type.STRING },
                margin: { type: Type.STRING },
                platforms: { type: Type.ARRAY, items: { type: Type.STRING } },
                adPlatforms: { type: Type.ARRAY, items: { type: Type.STRING } },
                trendScore: { type: Type.NUMBER },
                evolutionData: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      month: { type: Type.STRING },
                      value: { type: Type.NUMBER }
                    }
                  }
                },
                pros: { type: Type.ARRAY, items: { type: Type.STRING } },
                cons: { type: Type.ARRAY, items: { type: Type.STRING } },
                targetAudience: { type: Type.STRING },
                financials: {
                  type: Type.OBJECT,
                  properties: {
                    cogs: { type: Type.STRING },
                    shipping: { type: Type.STRING },
                    marketingCPA: { type: Type.STRING },
                    netProfit: { type: Type.STRING },
                    roi: { type: Type.STRING }
                  }
                },
                strategy: {
                  type: Type.OBJECT,
                  properties: {
                    launchPhase: { type: Type.STRING },
                    scalingPhase: { type: Type.STRING },
                    creativeHooks: { type: Type.ARRAY, items: { type: Type.STRING } },
                    adCopyIdea: { type: Type.STRING }
                  }
                },
                competitors: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      price: { type: Type.STRING },
                      strategy: { type: Type.STRING }
                    }
                  }
                },
                supplyChain: {
                  type: Type.OBJECT,
                  properties: {
                    supplierType: { type: Type.STRING },
                    shippingTime: { type: Type.STRING },
                    moq: { type: Type.STRING }
                  }
                },
                marketAnalysis: {
                  type: Type.OBJECT,
                  properties: {
                    saturationIndex: { type: Type.NUMBER },
                    seasonality: { type: Type.STRING },
                    seoKeywords: { type: Type.ARRAY, items: { type: Type.STRING } },
                    marketSize: { type: Type.STRING }
                  }
                },
                customerPersona: {
                  type: Type.OBJECT,
                  properties: {
                    ageRange: { type: Type.STRING },
                    interests: { type: Type.ARRAY, items: { type: Type.STRING } },
                    painPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
                    buyingTriggers: { type: Type.ARRAY, items: { type: Type.STRING } }
                  }
                },
                riskAssessment: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      risk: { type: Type.STRING },
                      mitigation: { type: Type.STRING }
                    }
                  }
                },
                growthHacks: {
                  type: Type.OBJECT,
                  properties: {
                    upsell: { type: Type.STRING },
                    crossSell: { type: Type.STRING },
                    referralLoop: { type: Type.STRING }
                  }
                },
                contentStrategy: {
                  type: Type.OBJECT,
                  properties: {
                    pillars: { type: Type.ARRAY, items: { type: Type.STRING } },
                    hooks: { type: Type.ARRAY, items: { type: Type.STRING } }
                  }
                },
                legalCompliance: { type: Type.ARRAY, items: { type: Type.STRING } },
                radarData: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      subject: { type: Type.STRING },
                      A: { type: Type.NUMBER },
                      fullMark: { type: Type.NUMBER }
                    }
                  }
                },
                influencerStrategy: {
                  type: Type.OBJECT,
                  properties: {
                    type: { type: Type.STRING },
                    suggestedCollabs: { type: Type.ARRAY, items: { type: Type.STRING } }
                  }
                },
                viralPotential: {
                  type: Type.OBJECT,
                  properties: {
                    score: { type: Type.NUMBER },
                    reasons: { type: Type.ARRAY, items: { type: Type.STRING } }
                  }
                },
                ugcScripts: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      hook: { type: Type.STRING },
                      body: { type: Type.STRING },
                      callToAction: { type: Type.STRING }
                    }
                  }
                },
                emailFlows: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      subject: { type: Type.STRING },
                      goal: { type: Type.STRING }
                    }
                  }
                },
                crossBorderPotential: { type: Type.ARRAY, items: { type: Type.STRING } },
                sustainabilityScore: { type: Type.NUMBER },
                estimatedMonthlyRevenue: { type: Type.STRING },
                bundleIdeas: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      products: { type: Type.ARRAY, items: { type: Type.STRING } },
                      aovBoost: { type: Type.STRING }
                    }
                  }
                },
                imagePrompt: { type: Type.STRING }
              },
              required: ["name", "description", "price", "margin", "trendScore", "evolutionData", "imagePrompt"]
            }
          }
        });

        let text = response.text || "{}";
        if (text.includes("```")) {
          text = text.replace(/```json\n?|```/g, "").trim();
        }
        const result = JSON.parse(text);
        
        // Update products incrementally
        setProducts(prev => {
          if (!prev) return prev;
          const next = [...prev];
          next[index] = result;
          return next;
        });

        return result;
      } catch (err: any) {
        const errorStr = JSON.stringify(err);
        const isSpendingCap = errorStr.includes("spending cap") || err.message?.includes("spending cap");
        
        const isRetryable = !isSpendingCap && (
                           errorStr.includes("503") || errorStr.includes("high demand") || errorStr.includes("UNAVAILABLE") || 
                           errorStr.includes("429") || errorStr.includes("Too Many Requests") ||
                           err.message?.includes("503") || err.message?.includes("high demand") || err.status === "UNAVAILABLE"
        );
        
        if (retries > 0 && isRetryable) {
          // Faster exponential backoff: (2^attempt * 300) + random(0, 300)
          const attempt = 3 - retries;
          const delay = Math.pow(2, attempt) * 300 + Math.random() * 300;
          await new Promise(resolve => setTimeout(resolve, delay));
          return analyzeSingleProduct(query, index, retries - 1);
        }
        throw err;
      }
    };

    try {
      // Parallel calls without staggering for maximum speed
      // The individual retry logic with jitter handles potential burst limits
      await Promise.all([
        analyzeSingleProduct(finalQuery, 0),
        analyzeSingleProduct(finalQuery, 1),
        analyzeSingleProduct(finalQuery, 2)
      ]);
    } catch (err: any) {
      console.error("Analysis failed:", err);
      const message = err.message || "Erreur inconnue";
      const errorStr = JSON.stringify(err);
      
      if (message.includes("spending cap") || errorStr.includes("spending cap")) {
        setError("Votre limite de budget mensuelle sur Google AI Studio a été atteinte. Veuillez augmenter votre plafond de dépenses sur https://ai.studio/spend pour continuer à utiliser l'analyse.");
      } else if (message.includes("503") || message.includes("UNAVAILABLE") || message.includes("demand")) {
        setError("Les serveurs de Google sont actuellement surchargés. Veuillez patienter quelques secondes avant de réessayer.");
      } else {
        setError(`Erreur: ${message}. Veuillez vérifier votre configuration Cloud Run.`);
      }
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
              onClick={() => handleAnalyze()}
              disabled={isAnalyzing}
              className="btn-primary flex items-center gap-2 py-3 px-8 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] justify-center"
            >
              {isAnalyzing ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Zap className="w-5 h-5 fill-current" />
              )}
              {isAnalyzing ? 'Analyse...' : 'Analyser'}
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
              onClick={() => {
                setQuery(q);
                handleAnalyze(q);
              }}
              className="text-[11px] text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 transition-all"
            >
              {q}
            </button>
          ))}
        </motion.div>

        {error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
          >
            {error}
          </motion.div>
        )}

        <AnimatePresence>
          {products && (
            <div className="text-left w-full max-w-7xl mx-auto">
              <AnalysisResult products={products} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
