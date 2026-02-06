import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { AnimatedText, AnimatedContainer } from './AnimatedText';

export function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <AnimatedText as="h2" className="text-5xl md:text-7xl font-bold text-white mb-6">
          Ready to Scale Your Business?
        </AnimatedText>

        <AnimatedText as="p" className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12" delay={0.1}>
          Let's turn your brand into a content-driven growth machine with performance ads and local SEO that actually deliver results.
        </AnimatedText>

        {/* CTA Buttons */}
        <AnimatedContainer delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-slate-800/80 backdrop-blur-sm text-white rounded-xl font-bold text-lg border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              View Case Studies
            </motion.button>
          </div>
        </AnimatedContainer>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '5M+', label: 'Total Views Generated' },
            { value: '950+', label: 'Products Sold' },
            { value: '5K+', label: 'Walk-In Intents' },
            { value: '50+', label: 'Active Clients' },
          ].map((stat, index) => (
            <AnimatedContainer key={index} delay={0.3 + (index * 0.08)}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Final reassurance */}
        <AnimatedText 
          as="p" 
          className="mt-16 text-slate-400 text-lg" 
          delay={0.5}
        >
          No contracts. No hidden fees. Just transparent, performance-driven digital growth.
        </AnimatedText>
      </div>
    </section>
  );
}
