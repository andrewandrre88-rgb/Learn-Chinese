import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden border-b-2 border-gum-black">
      {/* Floating background elements */}
      <motion.div 
        initial={{ rotate: -10, x: -50 }}
        animate={{ rotate: 10, x: -30 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-10 top-20 hidden lg:block"
      >
        <div className="w-24 h-24 bg-gum-pink brutal-border rounded-full flex items-center justify-center text-4xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          中
        </div>
      </motion.div>

      <motion.div 
        initial={{ rotate: 15, x: 50 }}
        animate={{ rotate: -5, x: 30 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute right-10 bottom-20 hidden lg:block"
      >
        <div className="w-32 h-32 bg-gum-pink brutal-border rounded-full flex items-center justify-center text-5xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          文
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-gum-yellow brutal-border px-4 py-1 font-black mb-6 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          ZHONGWEN: 50% OFF FLASH SALE — FIRST 100 STUDENTS ONLY
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
          Stop Dreaming. Start Speaking Chinese.
        </h1>
        <p className="text-xl md:text-3xl font-black mb-12 max-w-2xl mx-auto leading-tight text-gum-black">
          The only system that guarantees conversational fluency in 90 days. <span className="bg-gum-pink px-2">No textbooks. No fluff.</span> Just results.
        </p>

        <div className="mb-16">
          <Countdown title="DON'T WAIT — PRICE INCREASES IN:" subtitle="Secure your 50% discount before it's gone forever." />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/pricing" className="brutal-btn-black text-2xl px-16 py-6 w-full sm:w-auto hover:bg-gum-pink hover:text-black transition-colors inline-block text-center">
            Claim My Discount Now — $49
          </Link>
          
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2 font-black text-zinc-800">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full brutal-border bg-gum-teal flex items-center justify-center text-xs font-black">
                    L{i}
                  </div>
                ))}
              </div>
              <span>Joined by 5,248+ students</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-black text-gum-pink uppercase tracking-widest">
              🔥 12 people joined in the last hour
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-sm font-black text-zinc-500 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <span className="flex items-center gap-1 uppercase">✓ UNLIMITED Lifetime access</span>
          <span className="flex items-center gap-1 uppercase text-gum-black">✓ HSK 1-4 standard GUARANTEED</span>
          <span className="flex items-center gap-1 uppercase">✓ 1-on-1 Native feedback</span>
          <span className="flex items-center gap-1 uppercase text-red-600">✓ 100% MONEY-BACK GUARANTEE</span>
        </p>
      </div>
    </section>
  );
}
