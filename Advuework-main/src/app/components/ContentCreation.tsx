import { AnimatedText, AnimatedContainer } from './AnimatedText';
import { VideoPlaceholder } from './VideoPlaceholder';

const portfolioImages = [
  '/img/13.jpeg',
  '/img/9.jpeg',
  '/img/10.jpeg',
  '/img/11.jpeg',
  '/img/12.jpeg',
];


export function ContentCreation() {
  return (
    <section id="ContrntCreation"className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6">
          Website Portfolio
          </AnimatedText>
          <AnimatedText as="p" className="text-xl text-slate-400 max-w-3xl mx-auto" delay={0.1}>
          High-impact designs with clean code.
Focused on user experience and results.
          </AnimatedText>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
         

          {/* BTS thumbnails */}
          {[
            'Behind-the-scenes: Setup and lighting',
            'Behind-the-scenes: Product styling',
            'Behind-the-scenes: Team at work',
            'Behind-the-scenes: Final review process',
          ].map((label, index) => (
            <AnimatedContainer key={index} delay={0.3 + (index * 0.08)}>
          
  <img
    src={portfolioImages[index]}
    alt={`Website Portfolio ${index + 1}`}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
  />



            </AnimatedContainer>
          ))}
        </div>

        {/* Key points */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { stat: 'Professional', label: 'Equipment & Team' },
            { stat: 'Strategic', label: 'Content Planning' },
            { stat: 'Authentic', label: 'BTS Documentation' },
          ].map((item, index) => (
            <AnimatedContainer key={index} delay={0.5 + (index * 0.1)}>
              <div className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-slate-400">{item.label}</div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
