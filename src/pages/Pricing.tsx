import PageWrapper from "../components/PageWrapper";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <PageWrapper title="Pricing Plans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="brutal-card bg-white border-4 border-gum-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
          <div className="bg-gum-yellow -mx-6 -mt-6 p-6 border-b-4 border-gum-black rounded-t-xl mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tight">Basic Access</h2>
            <p className="font-bold text-zinc-700">Perfect for casual learners</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-black">$29</span>
            <span className="text-zinc-500 font-bold ml-2">One-time payment</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Core 90-Day Roadmap",
              "Tone Training Module",
              "Basic Vocabulary Lists",
              "Lifetime Website Access"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-bold">
                <div className="bg-gum-teal p-1 rounded brutal-border text-white">
                  <Check size={16} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="brutal-btn-black w-full py-4 text-xl">Select Plan</button>
        </div>

        <div className="brutal-card bg-white border-4 border-gum-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative flex flex-col">
          <div className="absolute -top-6 -right-6 bg-gum-pink brutal-border px-4 py-1 font-black rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 animate-pulse">
            MOST POPULAR
          </div>
          <div className="bg-gum-pink -mx-6 -mt-6 p-6 border-b-4 border-gum-black rounded-t-xl mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tight">Masterclass</h2>
            <p className="font-bold text-zinc-700">The full fluency experience</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-black">$49</span>
            <span className="text-zinc-500 font-bold ml-2 line-through">$99</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Everything in Basic",
              "1-on-1 Native Feedback",
              "HSK 1-4 Complete Prep",
              "Private Community Access",
              "Speaking Exercises Pro",
              "Character Writing Guide"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-bold">
                <div className="bg-gum-teal p-1 rounded brutal-border text-white">
                  <Check size={16} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="brutal-btn-black bg-gum-black text-white hover:bg-gum-pink hover:text-black w-full py-4 text-xl transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
      
      <div className="bg-zinc-100 p-8 brutal-border rounded-xl">
        <h3 className="text-2xl font-black mb-4 uppercase">All Plans Include:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="font-bold flex items-center gap-2 uppercase text-sm">✓ Lifetime Access</p>
          <p className="font-bold flex items-center gap-2 uppercase text-sm">✓ Future Updates</p>
          <p className="font-bold flex items-center gap-2 uppercase text-sm">✓ Mobile Optimized</p>
          <p className="font-bold flex items-center gap-2 uppercase text-sm">✓ Certificate of Completion</p>
        </div>
      </div>
    </PageWrapper>
  );
}
