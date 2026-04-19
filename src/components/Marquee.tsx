const POSSIBILITIES = [
  "Tone Mastery", "HSK Preparation", "Daily Conversations", "Business Chinese", 
  "Pinyin Guide", "Characters (Hanzi)", "Audio Lessons", "Vocabulary Lists",
  "Grammar Hacks", "Slang & Idioms", "Travel Phrases", "Cultural Etiquette"
];

export default function Marquee() {
  return (
    <section className="py-20 border-b-2 border-gum-black bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-black mb-4">Learn practically</h2>
        <p className="text-xl font-bold text-zinc-600">Everything you need to master the world's most spoken language</p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-4 py-4">
          {[...POSSIBILITIES, ...POSSIBILITIES].map((item, i) => (
            <div 
              key={i} 
              className="brutal-border brutal-shadow bg-white px-6 py-3 rounded-full font-bold text-lg flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-gum-teal rounded-lg brutal-border" />
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden mt-4">
        <div className="animate-marquee whitespace-nowrap flex gap-4 py-4 [animation-direction:reverse]">
          {[...POSSIBILITIES, ...POSSIBILITIES].map((item, i) => (
            <div 
              key={i} 
              className="brutal-border brutal-shadow bg-white px-6 py-3 rounded-full font-bold text-lg flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-gum-pink rounded-lg brutal-border" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
