import { useState, useEffect } from "react";

interface CountdownProps {
  variant?: "card" | "minimal";
  title?: string;
  subtitle?: string;
}

export default function Countdown({ variant = "card", title, subtitle }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 24);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className={`${variant === 'card' ? 'bg-white w-16 h-16 sm:w-20 sm:h-20 text-3xl sm:text-4xl' : 'bg-transparent w-auto h-auto text-xl'} brutal-border brutal-shadow flex items-center justify-center font-black rounded-xl px-2`}>
        {value.toString().padStart(2, '0')}
      </div>
      {variant === 'card' && <span className="mt-2 text-xs font-black uppercase tracking-widest text-zinc-600">{label}</span>}
    </div>
  );

  if (variant === "minimal") {
    return (
      <div className="flex items-center gap-3 font-black uppercase tracking-tighter">
        <span className="text-sm hidden sm:inline">{title || "OFFER ENDS IN:"}</span>
        <div className="flex gap-2 items-center">
          <div className="bg-black text-white px-2 py-1 rounded border border-white text-lg">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-black text-white px-2 py-1 rounded border border-white text-lg">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-black text-white px-2 py-1 rounded border border-white text-lg">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gum-pink brutal-border p-6 sm:p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block">
      <div className="text-center mb-6">
        <h3 className="text-xl font-black uppercase tracking-tighter">{title || "Limited Time Offer"}</h3>
        <p className="font-bold text-sm">{subtitle || "50% OFF ends in:"}</p>
      </div>
      <div className="flex gap-4 sm:gap-6 justify-center items-start">
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="text-4xl font-black pt-4">:</div>
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <div className="text-4xl font-black pt-4">:</div>
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}
