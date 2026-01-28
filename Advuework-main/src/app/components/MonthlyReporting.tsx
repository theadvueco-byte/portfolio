import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { AnimatedText, AnimatedContainer } from './AnimatedText';

const reportImages = [
  '/img/1.jpeg',
  '/img/2.jpeg',
  '/img/3.jpeg',
  '/img/4.jpeg',
  '/img/5.jpeg',
  '/img/6.jpeg',
  '/img/7.jpeg',
  '/img/8.jpeg',
 
];
const totalSlides = reportImages.length;

export function MonthlyReporting() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="month" className="relative py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6">
            Monthly Client Reporting System
          </AnimatedText>
          <AnimatedText as="p" className="text-xl text-slate-400 max-w-3xl mx-auto" delay={0.1}>
            Transparent, data-driven monthly reports that show exactly what's working and where your investment is going.
          </AnimatedText>
        </div>

        <AnimatedContainer delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Slider container */}
            <div className="relative aspect-[16/10] bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden group">
              {/* Slide placeholders */}
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-800 to-slate-900">
                   <img
  src={reportImages[index]}
  alt={`Monthly Report ${index + 1}`}
  className="w-full h-full object-cover"
/>

                  </div>
                </div>
              ))}

              {/* Navigation arrows - appear on hover */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-800 hover:border-cyan-500/50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-800 hover:border-cyan-500/50"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-8 h-2 bg-cyan-500'
                      : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedContainer>

        {/* Key features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Detailed Metrics',
              description: 'Complete breakdown of ad performance, reach, engagement, and conversions',
            },
            {
              title: 'Visual Analytics',
              description: 'Easy-to-understand charts and graphs showing trends and patterns',
            },
            {
              title: 'Optimization Insights',
              description: 'Actionable recommendations for improving performance month over month',
            },
          ].map((feature, index) => (
            <AnimatedContainer key={index} delay={0.4 + (index * 0.1)}>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
