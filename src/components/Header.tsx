import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-gum-black py-4 px-6 sticky top-[52px] z-[90]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-black uppercase italic tracking-tighter">
          Zhongwen
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-black uppercase text-sm tracking-widest">
          <Link to="/" className="hover:text-gum-pink transition-colors">Home</Link>
          <Link to="/pricing" className="hover:text-gum-pink transition-colors">Pricing</Link>
          <Link to="/terms" className="hover:text-gum-pink transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-gum-pink transition-colors">Privacy</Link>
          <Link to="/refund" className="hover:text-gum-pink transition-colors">Refund</Link>
        </nav>
        <Link 
          to="/pricing" 
          className="bg-gum-black text-white px-6 py-2 font-black uppercase text-xs tracking-widest brutal-border hover:bg-gum-pink hover:text-black transition-all"
        >
          Enroll Now
        </Link>
      </div>
    </header>
  );
}
