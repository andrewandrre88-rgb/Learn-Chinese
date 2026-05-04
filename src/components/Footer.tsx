import { Github, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gum-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="text-3xl font-black tracking-tighter mb-6 block uppercase italic">
            Zhongwen
          </Link>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gum-black transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gum-black transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gum-black transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-zinc-500">Product</h4>
          <ul className="space-y-4 font-bold">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            <li><a href="#" className="hover:underline">Discover</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-zinc-500">Support</h4>
          <ul className="space-y-4 font-bold">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><Link to="/refund" className="hover:underline">Refund Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-zinc-500">Legal</h4>
          <ul className="space-y-4 font-bold">
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-800 text-center text-zinc-500 font-bold text-sm">
        © {new Date().getFullYear()} Fluent Chinese Masterclass. All rights reserved.
      </div>
    </footer>
  );
}
