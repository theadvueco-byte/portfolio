import { Hero } from './components/Hero';
import { HowWeWork } from './components/HowWeWork';
import { ContentCreation } from './components/ContentCreation';
import { ReelsPortfolio } from './components/ReelsPortfolio';
import { MetaAdsPerformance } from './components/MetaAdsPerformance';
import { GoogleBusinessProfile } from './components/GoogleBusinessProfile';
import { MonthlyReporting } from './components/MonthlyReporting';
import { WhyTheAdvue } from './components/WhyTheAdvue';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';


export default function App() {
  return (
    <div className="bg-slate-900 text-white">
      <ScrollProgress />
      <BackToTop />
      <Hero />
      <HowWeWork />
      <ContentCreation />
      <ReelsPortfolio />
      <MetaAdsPerformance />
      <GoogleBusinessProfile />
      <MonthlyReporting />
      <WhyTheAdvue />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}