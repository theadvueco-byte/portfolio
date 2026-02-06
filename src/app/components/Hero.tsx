import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { Navbar } from "./Navbar";

export function Hero() {
  return (
      <>
    <Navbar />
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.06),transparent_50%)]" />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center z-10">
        {/* Main headline - line by line */}
        <div className="space-y-2 mb-8">
          <AnimatedText as="h1" className="text-6xl md:text-8xl font-bold text-white" delay={0}>
            Full-Stack Digital
          </AnimatedText>
          <AnimatedText as="h1" className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" delay={0.12}>
            Growth Agency
          </AnimatedText>
        </div>

        {/* Subheadline */}
        <AnimatedText as="p" className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4" delay={0.24}>
          Video-first content creation, performance advertising, and local SEO that drives real business growth.
        </AnimatedText>

        <AnimatedText as="p" className="text-lg text-slate-400 max-w-2xl mx-auto mb-12" delay={0.36}>
          Serving boutiques, bridal brands, textiles, interiors, clinics, real estate, and education.
        </AnimatedText>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.48, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300">
            <span className="flex items-center gap-2">
              <a href="#HowWeWork" className="hover:text-cyan-400 transition">View Our Work</a>
           
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Process
            </span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>

  );
}
