import { ShieldCheck, Users, Trophy, Instagram, Facebook, MessageCircle, Globe, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Fiabilité des Données',
    desc: 'Nos algorithmes croisent les données de plus de 15 sources officielles pour garantir une précision décisionnelle.',
  },
  {
    icon: Users,
    title: 'Communauté d\'Experts',
    desc: 'Rejoignez plus de 12 000 e-commerçants qui propulsent leur activité grâce à notre intelligence.',
  },
  {
    icon: Trophy,
    title: 'Leader Francophone',
    desc: 'Élu meilleur outil d\'intelligence produit par les experts du marché européen en 2025.',
  },
];

export default function Features() {
  return (
    <section className="py-32 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="text-center group">
            <div className="inline-flex p-4 rounded-2xl bg-white/5 mb-8 group-hover:bg-primary/10 transition-colors">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
