import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function PageWrapper({ title, children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-gum-bg flex flex-col">
      <Header />
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mb-8 font-black uppercase tracking-widest text-sm hover:text-gum-pink transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="brutal-card bg-white"
          >
            <h1 className="text-4xl sm:text-6xl font-black mb-12 tracking-tighter uppercase leading-none border-b-4 border-gum-black pb-8">
              {title}
            </h1>
            <div className="prose prose-zinc max-w-none font-medium text-lg leading-relaxed space-y-6">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
