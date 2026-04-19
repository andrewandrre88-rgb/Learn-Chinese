import { motion } from "motion/react";

interface Feature {
  title: string;
  description: string;
  color: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  stats?: { [key: string]: string };
}

const FEATURES: Feature[] = [
  {
    title: "Tone Training",
    description: "Don't sound like a robot. Our interactive tone trainer helps you master the 4 tones (and the neutral one) through visual acoustic feedback.",
    color: "bg-white",
    image: "https://picsum.photos/seed/china1/400/300",
    badge: "EXPERT",
    badgeColor: "bg-gum-yellow"
  },
  {
    title: "Dynamic Vocabulary",
    description: "Forget the dictionary. Learn the most common 1,000 words that make up 80% of daily conversation. SRS-powered for maximum retention.",
    color: "bg-white",
    stats: { words: "2.5k", learned: "92%" },
    image: "https://picsum.photos/seed/china2/400/300"
  },
  {
    title: "Speaking Exercises",
    description: "Real-world scenarios. Practice ordering food, taking a taxi, or negotiating a business deal with our native-recorded audio dialogues.",
    color: "bg-white",
    image: "https://picsum.photos/seed/china3/400/300"
  },
  {
    title: "Character Guide",
    description: "Understand the logic behind the strokes. We break down the most common 500 characters so you can read menus and signs with ease.",
    color: "bg-white",
    image: "https://picsum.photos/seed/china4/400/300"
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="brutal-card group cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-4xl font-black mb-4">{feature.title}</h3>
              <p className="text-lg font-medium text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            <div className="relative mt-auto pt-8 border-t-2 border-gum-black -mx-6 px-6 bg-zinc-50">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-64 object-cover brutal-border rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                referrerPolicy="no-referrer"
              />
              
              {feature.badge && (
                <div className={`absolute -top-4 right-10 ${feature.badgeColor} brutal-border px-4 py-1 font-black rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  {feature.badge}
                </div>
              )}
              
              {feature.stats && (
                <div className="absolute top-12 left-12 bg-white brutal-border p-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex gap-8">
                    {Object.entries(feature.stats).map(([key, value], idx) => (
                      <div key={key}>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{key}</div>
                        <div className={`text-2xl font-black ${idx === 1 ? 'text-gum-pink' : ''}`}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
