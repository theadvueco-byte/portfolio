import {
  Lightbulb,
  Camera,
  Film,
  Scissors,
  Users,
  BarChart3,
  Target,
  MapPin,
  TrendingUp,
} from 'lucide-react';

import { AnimatedText, AnimatedContainer } from './AnimatedText';

const steps = [
  {
    icon: Lightbulb,
    title: 'Content Strategy & Planning',
    description:
      'Complete brand & business understanding, monthly content planning (reels + posts), goal-based content themes, and platform-wise strategy for Instagram & Facebook.',
  },
  {
    icon: Camera,
    title: 'Professional Content Creation',
    description:
      'Script writing and concept creation for reels, product-focused and brand-focused content ideas aligned with sales and ad objectives.',
  },
  {
    icon: Film,
    title: 'Video Shoot – 3 Production Types',
    description:
      'Product-based reel shoots, content-based reels using concepts & stock visuals, and high-end professional camera shoots with premium lighting setup.',
  },
  {
    icon: Scissors,
    title: 'High-Quality Video Editing',
    description:
      'Advanced reel editing with smooth transitions, trending formats & music, and brand-consistent colors and fonts for maximum retention.',
  },
  {
    icon: Users,
    title: 'Social Media Management',
    description:
      '10–15 reels per month, regular posts & carousel designs, festival creatives, caption writing, hashtag strategy, and page handling.',
  },
  {
    icon: BarChart3,
    title: 'Competitor & Market Analysis',
    description:
      'Competitor content research, market trend analysis, gap identification, and continuous strategy refinement for better performance.',
  },
  {
    icon: Target,
    title: 'Paid Ads Management',
    description:
      'Goal-based ad strategy (leads, sales, awareness), audience research, campaign setup, creative & copy testing, and budget optimization.',
  },
  {
    icon: TrendingUp,
    title: 'Lead Tracking & Performance Reporting',
    description:
      'Accurate lead tracking, campaign performance analysis, lead quality review, and clear easy-to-understand reports.',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile & Local SEO',
    description:
      'Google Business Profile setup, optimization, regular updates, local SEO improvement, reviews management, and location-based growth.',
  },
];

export function HowWeWork() {
  return (
    <section id="HowWeWork" className="relative py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <AnimatedText
            as="h2"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Digital Marketing Services
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-xl text-slate-400 max-w-4xl mx-auto"
            delay={0.1}
          >
            End-to-end digital marketing & content production services designed
            to increase visibility, engagement, leads, and real business growth.
          </AnimatedText>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <AnimatedContainer key={index} delay={index * 0.08}>
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500">

                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 border border-cyan-500/20">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedContainer>
            );
          })}
        </div>

        {/* Monthly Report Highlight */}
        <div className="mt-24 text-center">
          <AnimatedContainer delay={0.3}>
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-6 rounded-2xl text-xl font-semibold shadow-xl">
              Monthly Analytics & Growth Report
            </div>
            <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
              Detailed social media performance, ads ROI analysis, reach,
              engagement, leads data, and a clear improvement plan for the next
              month.
            </p>
          </AnimatedContainer>
        </div>

      </div>
    </section>
  );
}
