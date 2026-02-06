import { Quote } from 'lucide-react';
import { AnimatedText, AnimatedContainer } from './AnimatedText';

const testimonials = [
  {
    quote: "The Reels TheAdvue created for our boutique went viral. We've seen a massive increase in walk-ins and online enquiries.",
    industry: "Fashion Boutique",
    location: "Chennai",
  },
  {
    quote: "Their Meta ads strategy doubled our reach and the cost per lead was incredibly low. Professional team that delivers results.",
    industry: "Bridal Showroom",
    location: "Coimbatore",
  },
  {
    quote: "Local SEO work brought us consistent Google Maps visibility. We're now the top result for 'textiles shop near me' in our area.",
    industry: "Textiles & Sarees",
    location: "chennai",
  },
  {
    quote: "Monthly reports are clear, detailed, and show exactly where our ad budget is going. Complete transparency.",
    industry: "Interior Design",
    location: "Bangalore",
  },
  {
    quote: "The BTS content they captured added authenticity to our brand. Customers love seeing the real effort behind our products.",
    industry: "Designer Boutique",
    location: "chennai",
  },
  {
    quote: "From content planning to ads deployment, their process is smooth and professional. Real business growth, not just metrics.",
    industry: "Retail Fashion",
    location: "Chennai",
  },
];

export function Testimonials() {
  return (
    <section id="Client" className="relative py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6">
            Client Testimonials
          </AnimatedText>
          <AnimatedText as="p" className="text-xl text-slate-400 max-w-3xl mx-auto" delay={0.1}>
            Real feedback from businesses we've helped grow.
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedContainer 
              key={index} 
              delay={index * 0.08}
            >
              <div className="group relative h-full p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 hover:scale-[1.02] transition-all duration-500">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote text */}
                <p className="text-slate-300 leading-relaxed mb-6 mt-4">
                  "{testimonial.quote}"
                </p>

                {/* Industry label - animates last */}
                <div className="pt-4 border-t border-slate-700/50">
                  <div className="text-cyan-400 font-semibold">{testimonial.industry}</div>
                  <div className="text-slate-500 text-sm">{testimonial.location}</div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Transparency note */}
        <AnimatedContainer delay={0.6} className="mt-12">
          <div className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <p className="text-slate-400 text-sm">
              Sample / anonymised testimonials where applicable. Actual client feedback available upon request.
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
