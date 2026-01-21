
import React from 'react';
import { Cpu, Zap, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Cpu size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">DevAI <span className="text-blue-400">Flow</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
            <a href="#playground" className="hover:text-white transition-colors">Playground</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all flex items-center gap-2">
              <Zap size={16} />
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 px-4 pt-2 pb-6 space-y-4">
          <a href="#features" className="block text-gray-300 hover:text-white text-lg">Features</a>
          <a href="#workflow" className="block text-gray-300 hover:text-white text-lg">Workflow</a>
          <a href="#playground" className="block text-gray-300 hover:text-white text-lg">Playground</a>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2">
            <Zap size={18} />
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
