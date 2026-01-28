import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { AnimatedContainer } from './AnimatedText';

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <AnimatedContainer>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                TheAdvue
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Result-driven Meta & Instagram advertising, Google Business Profile optimization, and Local SEO across fashion, retail, interiors, real estate, healthcare, and education.
              </p>
            </AnimatedContainer>
          </div>

          {/* Services */}
          <div>
            <AnimatedContainer delay={0.1}>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Content Creation</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Reel Production</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Meta Ads</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Google Ads</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Local SEO</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">GBP Management</li>
              </ul>
            </AnimatedContainer>
          </div>

          {/* Industries */}
          <div>
            <AnimatedContainer delay={0.15}>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Boutique & Fashion</li>
                <li>Bridal Showrooms</li>
                <li>Textiles & Sarees</li>
                <li>Interior Design</li>
                <li>Healthcare Clinics</li>
                <li>Real Estate</li>
                <li>Education</li>
              </ul>
            </AnimatedContainer>
          </div>
        </div>

        {/* Contact info */}
        <AnimatedContainer delay={0.2}>
          <div className="flex flex-wrap gap-8 mb-12 pb-8 border-b border-slate-800">
            <a 
              href="mailto:hello@theadvue.com" 
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
             theadvueco@gmail.com
            </a>
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 90426 76253
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-5 h-5" />
              Chennai, India
            </div>
            <a 
              href="https://www.instagram.com/theadvue_?igsh=bjU5c2s3dzNud3pn" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @theadvue
            </a>
          </div>
        </AnimatedContainer>

        {/* Copyright */}
        <AnimatedContainer delay={0.25}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2026 TheAdvue. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
}
