
import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, Terminal } from 'lucide-react';
import { generateProjectWorkflow } from '../services/geminiService';
import { LoadingState, AIRootPlan } from '../types';

const AIPlayground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<AIRootPlan | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus(LoadingState.LOADING);
    try {
      const data = await generateProjectWorkflow(prompt);
      setResult(data);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="playground" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Generate Your AI Workflow</h2>
          <p className="text-gray-400">Describe what you want to build, and we'll architect the AI tools needed.</p>
        </div>

        <div className="glass p-1 rounded-3xl shadow-2xl border border-white/10 mb-12">
          <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-2">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A subscription-based video streaming platform..."
              className="flex-grow bg-transparent px-6 py-4 rounded-2xl outline-none text-lg text-white placeholder-gray-500"
            />
            <button 
              disabled={status === LoadingState.LOADING}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 transition-all text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
            >
              {status === LoadingState.LOADING ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              Generate Plan
            </button>
          </form>
        </div>

        {status === LoadingState.SUCCESS && result && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="glass p-8 rounded-3xl border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{result.projectName}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {result.suggestedStack.map((tech, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 italic">" {result.productivityTip} "</p>
            </div>

            <div className="grid gap-6">
              {result.workflow.map((step, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex gap-6 hover:border-white/20 transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                      <span className="text-xs uppercase tracking-widest bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-semibold">
                        {step.toolCategory}
                      </span>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center pt-8">
              <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mx-auto font-medium">
                <Terminal size={18} />
                Export as .md Configuration
              </button>
            </div>
          </div>
        )}

        {status === LoadingState.ERROR && (
          <div className="text-center p-12 glass rounded-3xl border border-red-500/20">
            <p className="text-red-400 font-medium">Failed to generate plan. Please check your API key and try again.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIPlayground;
