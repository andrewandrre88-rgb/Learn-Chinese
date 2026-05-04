import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import FeatureGrid from "../components/FeatureGrid";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Countdown from "../components/Countdown";
import { motion } from "motion/react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Sticky Top Countdown */}
      <div className="sticky top-0 z-[100] bg-gum-black text-white py-3 px-4 border-b-2 border-white flex justify-between items-center bg-opacity-95 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest hidden xs:inline">
            Flash Sale: Save 50% Today
          </span>
        </div>
        <Countdown variant="minimal" />
        <Link to="/pricing" className="bg-white text-gum-black px-4 py-1 text-xs font-black rounded brutal-border hover:bg-gum-pink transition-colors">
          JOIN NOW
        </Link>
      </div>

      <main className="flex-grow">
        <Hero />
        <Marquee />
        <FeatureGrid />
        
        {/* Extra Illustration Section */}
        <section className="py-24 px-4 bg-gum-yellow border-b-2 border-gum-black overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="brutal-card bg-white p-12 relative rotate-[-2deg]">
                <div className="absolute -top-6 -left-6 bg-gum-pink brutal-border px-6 py-2 font-black rotate-[-5deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                  你好! START SPEAKING TODAY
                </div>
                <img 
                  src="https://china-underground.com/wp-content/uploads/2023/03/China-culture-and-traditions.jpg" 
                  alt="China Culture and Traditions" 
                  className="w-full brutal-border rounded-xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 bg-gum-teal brutal-border px-4 py-1 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                  ONLY 14 SPOTS LEFT
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                The world is waiting for you.
              </h2>
              <p className="text-2xl font-black mb-10 text-zinc-900 leading-tight">
                Mandarin is the key to a 1.4 billion person market. <span className="underline decoration-gum-pink decoration-8">Don't be left behind</span> while others gain the competitive edge. 
              </p>
              <Link to="/pricing" className="brutal-btn-black text-2xl px-14 py-6 w-full lg:w-auto hover:bg-white hover:text-black inline-block text-center">
                I Want Fluent Chinese
              </Link>
            </div>
          </div>
        </section>

        <Testimonials />
        
        {/* Final CTA */}
        <section className="py-40 px-4 text-center bg-gum-pink border-b-2 border-gum-black">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-7xl md:text-9xl font-black text-gum-black mb-12 tracking-tighter uppercase leading-[0.8]">
              Ready to Speak<br /><span className="bg-white px-4">Instantly?</span>
            </h2>
            
            <div className="mb-16">
              <Countdown title="LAST CHANCE — ENROLLMENT CLOSES IN:" />
            </div>

            <p className="text-xl font-black max-w-2xl mb-12 uppercase tracking-widest leading-relaxed">
              Join 5,000+ happy students. If you aren't speaking Chinese in 90 days, we'll give you every penny back. Zero risk. All reward.
            </p>

            <Link to="/pricing" className="brutal-btn-black bg-gum-black text-white text-3xl px-20 py-8 hover:bg-white hover:text-gum-black transition-all hover:scale-105 active:scale-95 inline-block text-center">
              GET AUTOMATIC 50% OFF — $49
            </Link>
            
            <div className="mt-8 flex items-center gap-4">
              <img src="https://picsum.photos/seed/trust-badge/200/50" alt="Secure Payment" className="h-8 grayscale brightness-0 invert" referrerPolicy="no-referrer" />
              <span className="font-black text-sm uppercase tracking-widest text-zinc-800">Verified Secure Checkout</span>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
