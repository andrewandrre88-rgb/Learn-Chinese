import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    quote: "I tried apps for months but never felt like I could actually talk. This course focused on the right things—tones and conversation patterns. I just spent a week in Shanghai and felt incredibly confident!",
    author: "Alex M.",
    role: "Expat Traveler"
  },
  {
    quote: "The character logic section was a game changer. Instead of just memorizing strokes, I finally understand how the language is built. Highly recommended for busy professionals.",
    author: "Elena R.",
    role: "Software Engineer"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white border-y-2 border-gum-black">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter">零到一</h2>
        <p className="text-2xl font-bold text-zinc-600 max-w-2xl mx-auto">
          "Zero to One" — Join thousands of students who started their journey with us last month.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="brutal-card flex flex-col justify-between"
          >
            <div className="text-4xl font-black mb-8 text-zinc-300">“</div>
            <p className="text-xl font-medium mb-12 leading-relaxed">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 border-t-2 border-gum-black pt-6">
              <div className="w-12 h-12 bg-gum-pink brutal-border rounded-full" />
              <div>
                <div className="font-black text-lg">{t.author}</div>
                <div className="font-bold text-zinc-500 text-sm">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
