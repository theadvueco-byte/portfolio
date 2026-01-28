import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="backdrop-blur-md bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-white">
            The<span className="text-cyan-400">Advue</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden ml-20 md:flex items-center gap-8 text-slate-300 font-medium">
             <a href="#HowWeWork" className="hover:text-cyan-400 transition">HowWeWork</a>
           <a href="#ContrntCreation" className="hover:text-cyan-400 transition">Website Portfolio </a>
            <a href="#Reels" className="hover:text-cyan-400 transition">Reels Portfolio</a>
            <a href="#Meta" className="hover:text-cyan-400 transition">Meta Ads</a>
            <a href="#SEO" className="hover:text-cyan-400 transition"> Google Business Profile</a>
            <a href="#month" className="hover:text-cyan-400 transition">Reports </a>
             <a href="#WhyTheAdvue" className="hover:text-cyan-400 transition">WhyTheAdvue</a>
             <a href="#Client" className="hover:text-cyan-400 transition">Testimonials </a>
          </div>

        
         

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-slate-200"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-72 bg-slate-900 border-l border-slate-800 p-6"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-bold text-white">
                  The<span className="text-cyan-400">Advue</span>
                </div>
                <button onClick={() => setOpen(false)}>
                  <X className="w-6 h-6 text-slate-300" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-6 text-lg text-slate-200">
                
                <a href="#HowWeWork" onClick={() => setOpen(false)}>HowWeWork</a>
                <a href="#Reels" onClick={() => setOpen(false)}>Reels Portfolio</a>
                <a href="#Meta" onClick={() => setOpen(false)}>Meta Ads</a>
                 <a href="#SEO" onClick={() => setOpen(false)}>Google Business Profile</a>
                <a href="#month" onClick={() => setOpen(false)}>Reporting</a>
                <a href="#WhyTheAdvue" onClick={() => setOpen(false)}>WhyTheAdvue</a>
                <a href="#Client" onClick={() => setOpen(false)}> Testimonials</a>
                <a href="#ContrntCreation" onClick={() => setOpen(false)}>Website Portfolio</a>
              </div>

             

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
