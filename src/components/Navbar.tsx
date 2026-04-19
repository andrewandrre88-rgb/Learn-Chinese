import { Github, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-gum-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            gumroad
            <div className="hidden sm:flex items-center gap-1 bg-zinc-100 border border-gum-black rounded-full px-2 py-0.5 text-[10px] font-bold">
              <Github size={12} />
              8.9K ★
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-6 font-bold text-sm">
            <a href="#" className="hover:underline">Discover</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Features</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Careers</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 font-bold text-sm hover:underline">
            Login
          </button>
          <button className="brutal-btn-pink py-2 px-4 text-sm">
            Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}
