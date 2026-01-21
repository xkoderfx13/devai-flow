
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import AIPlayground from './components/AIPlayground';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        
        {/* Simple Text Divider Section */}
        <section className="py-20 text-center bg-gradient-to-b from-transparent to-blue-900/10">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">"The best way to predict the future is to generate it."</h2>
            <p className="text-gray-500 italic">— AI Visionary</p>
          </div>
        </section>

        <AIPlayground />

        {/* Call to Action Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass p-12 md:p-20 rounded-[40px] border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500" />
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Ready to augment your workflow?</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                Join 10,000+ developers who are building the next generation of software with AI tools.
              </p>
              <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-200 transition-all shadow-xl shadow-white/10">
                Join the Community
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
