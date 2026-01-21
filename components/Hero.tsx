
import React from 'react';
import { ArrowRight, Sparkles, Code, Layout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm text-blue-400 mb-8">
          <Sparkles size={16} />
          <span>The Future of Software Development is Here</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Build Websites & Apps <br />
          <span className="gradient-text">10x Faster with AI</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Master the art of AI-assisted development. From automated code generation to instant UI prototyping, stop writing boilerplate and start building features.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20">
            Start Learning Now
            <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 rounded-2xl font-semibold transition-all">
            View AI Toolset
          </button>
        </div>

        {/* Floating Icons Visualization */}
        <div className="mt-20 relative flex justify-center">
          <div className="glass p-4 rounded-2xl glow border border-white/10 max-w-4xl w-full flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <Code size={32} />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">AI Code Gen</p>
                <p className="text-gray-500 text-sm">LLM-powered IDEs</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                <Layout size={32} />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Instant UI</p>
                <p className="text-gray-500 text-sm">Component streaming</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
                <Sparkles size={32} />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Auto Testing</p>
                <p className="text-gray-500 text-sm">Smarter debugging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
