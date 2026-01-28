import { Video, Target, MessageCircle, TrendingUp, BarChart3, Users } from 'lucide-react';
import { AnimatedText, AnimatedContainer } from './AnimatedText';
import { Navbar } from "./Navbar";

const reasons = [
  {
    icon: Video,
    title: 'Reel-First Strategy',
    description: 'Massive reach through professionally crafted Instagram Reels that stop the scroll',
  },
  {
    icon: Target,
    title: 'Clear Offer & Pricing',
    description: 'Transparent pricing strategies that help customers make faster buying decisions',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp & Call Flow',
    description: 'Direct communication channels that convert interest into high-quality enquiries',
  },
  {
    icon: TrendingUp,
    title: 'Budget Optimization',
    description: 'Every rupee spent is optimized for maximum return on investment',
  },
  {
    icon: BarChart3,
    title: 'Industry-Specific Targeting',
    description: 'Deep understanding of fashion, bridal, textiles, and retail audiences',
  },
  {
    icon: Users,
    title: 'Quality Over Vanity',
    description: 'Focus on leads and sales, not just likes and followers',
  },
];

export function WhyTheAdvue() {
  return (
    
    <section id="WhyTheAdvue" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why TheAdvue
          </AnimatedText>
          <AnimatedText as="p" className="text-xl text-slate-400 max-w-3xl mx-auto" delay={0.1}>
            Strategic edge that drives real business growth.
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <AnimatedContainer 
                key={index} 
                delay={index * 0.08}
                direction="left"
              >
                <div className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {reason.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedContainer>
            );
          })}
        </div>

        {/* Performance comparison table */}
        <AnimatedContainer delay={0.6} className="mt-20">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Why Our Work Stands Out
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-4 px-6 text-slate-300 font-semibold">Factor</th>
                    <th className="text-right py-4 px-6 text-cyan-400 font-semibold">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {[
                    { factor: 'Reel-First Strategy', impact: 'Massive reach' },
                    { factor: 'Clear Offer & Pricing', impact: 'Faster decisions' },
                    { factor: 'WhatsApp / Call Flow', impact: 'High conversions' },
                    { factor: 'Budget Optimization', impact: 'Maximum ROI' },
                    { factor: 'Industry-Specific Targeting', impact: 'Quality leads' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-slate-700/20 transition-colors">
                      <td className="py-4 px-6 text-slate-300">{row.factor}</td>
                      <td className="py-4 px-6 text-right text-cyan-400 font-semibold">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
