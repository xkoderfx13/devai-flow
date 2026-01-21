
import React from 'react';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Cpu size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">DevAI Flow</span>
          </div>
          
          <div className="flex gap-8 text-gray-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-2 glass rounded-full hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 glass rounded-full hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="p-2 glass rounded-full hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} DevAI Flow. Built with cutting-edge AI for the modern developer.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
