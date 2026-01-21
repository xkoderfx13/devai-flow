
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Bot, FastForward, Shield, Zap } from 'lucide-react';

const data = [
  { name: 'Traditional', hours: 40, color: '#4b5563' },
  { name: 'AI-Enhanced', hours: 6, color: '#3b82f6' },
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quantifiable Productivity Boost</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Why spend weeks on a landing page when AI can help you ship it in hours? Our data shows an average reduction of 85% in boilerplate coding time when using tools like Cursor and v0.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Bot />, title: "Automated Logic", desc: "Complex functions generated in seconds." },
                { icon: <FastForward />, title: "Rapid Iteration", desc: "Design-to-code workflow with generative UI." },
                { icon: <Shield />, title: "Error-Free Syntax", desc: "Real-time AI debugging and type safety checks." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 glass rounded-xl flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
             <h3 className="text-xl font-bold mb-6 text-center">Development Time (Weeks → Days)</h3>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
                    <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '12px', color: '#fff' }}
                      cursor={{ fill: 'transparent' }}
                    />
                    <Bar dataKey="hours" radius={[8, 8, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>
             <p className="text-center text-gray-500 text-sm mt-4 italic">
               Estimated time to market for a full-stack SaaS MVP.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
