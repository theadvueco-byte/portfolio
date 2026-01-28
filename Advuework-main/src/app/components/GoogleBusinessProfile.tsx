import { MapPin, Phone, TrendingUp, Users } from 'lucide-react';
import { AnimatedText, AnimatedContainer } from './AnimatedText';
import { CounterAnimation } from './CounterAnimation';
import { PerformanceTable } from './PerformanceTable';
import { VideoPlaceholder } from './VideoPlaceholder';

export function GoogleBusinessProfile() {
  return (
    <section id="SEO" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6">
            Google Business Profile & Local SEO
          </AnimatedText>
          <AnimatedText as="p" className="text-xl text-slate-400 max-w-3xl mx-auto" delay={0.1}>
            Dominate local search and Google Maps to drive real customer walk-ins, calls, and enquiries — completely organic.
          </AnimatedText><br></br>
            <VideoPlaceholder 
             videoSrc='/img/4.mp4'
              aspectRatio="21/9"
               delay={0.4}
            />
        </div>

        {/* Textiles Shop Case Study */}
        <TextilesShopCase />
         <RealEstateCase />
        {/* Boutique 1 Case Study */}
        <Boutique1Case />

        {/* Bridal Boutique Case Study */}
        <BridalBoutiqueCase />
 <InteriorDesignCase/>
        {/* Boutique 2 Case Study */}
        <Boutique2Case />
        <ClinicCase />
        {/* Saree Silks Shop Case Study */}
        <SareeSilksCase />
       
        {/* Sample Case Studies */}
        <EducationCase />

        {/* Final Power Statement */}
        <LocalSEOStatement />
      </div>
    </section>
  );
}

function TextilesShopCase() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center border border-amber-500/20">
              <MapPin className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Textiles Shop</h3>
              <p className="text-slate-400">Google Business Profile + Local SEO | Aug 2025 – Jan 2026</p>

              
            </div>
          </div>

          {/* Hero metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: 21495, label: 'Profile Views', icon: Users },
              { value: 2356, label: 'Direction Requests', icon: MapPin },
              { value: 966, label: 'Customer Calls', icon: Phone },
              { value: 4443, label: 'Search Appearances', icon: TrendingUp },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                  <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
                    <CounterAnimation 
                      value={stat.value}
                      className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                    />
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </AnimatedContainer>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Platform Breakdown</h4>
              <PerformanceTable 
                delay={0.3}
                data={[
                  { metric: 'Google Search – Mobile', result: '15,412 (72%)' },
                  { metric: 'Google Maps – Mobile', result: '4,984 (23%)' },
                  { metric: 'Google Search – Desktop', result: '905 (4%)' },
                  { metric: 'Google Maps – Desktop', result: '194 (1%)' },
                ]}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Search Behavior</h4>
              <PerformanceTable 
                delay={0.35}
                data={[
                  { metric: 'Brand/Location Searches', result: 'High' },
                  { metric: '"Textile shop near me"', result: 'Strong' },
                  { metric: 'Area-based searches', result: 'Consistent' },
                  { metric: 'Buyer-intent keywords', result: 'Active' },
                ]}
              />
            </div>
          </div>

         

          <AnimatedContainer delay={0.5}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                21,000+ people discovered this textiles shop organically through Google Search & Maps.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function Boutique1Case() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-600/20 flex items-center justify-center border border-pink-500/20">
              <MapPin className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Fashion Boutique</h3>
              <p className="text-slate-400">Google Business Profile + Local SEO | Aug 2025 – Jan 2026</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { value: 4619, label: 'Profile Views' },
              { value: 362, label: 'Direction Requests' },
              { value: 587, label: 'Search Appearances' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Discovery Platforms</h4>
              <PerformanceTable 
                delay={0.3}
                data={[
                  { metric: 'Google Search – Mobile', result: '2,778 (60%)' },
                  { metric: 'Google Maps – Mobile', result: '1,380 (30%)' },
                  { metric: 'Desktop Combined', result: '461 (10%)' },
                ]}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Top Search Terms</h4>
              <PerformanceTable 
                delay={0.35}
                data={[
                  { metric: '"Boutique near me"', result: '174' },
                  { metric: '"Clothing store"', result: '147' },
                  { metric: 'Area-based boutique', result: '129' },
                  { metric: 'Local boutique searches', result: '103' },
                ]}
              />
            </div>
          </div>

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                4,600+ people discovered this boutique organically through Google Search & Maps.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function BridalBoutiqueCase() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-600/20 flex items-center justify-center border border-rose-500/20">
              <MapPin className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Bridal Boutique</h3>
              <p className="text-slate-400">Google Business Profile + Local SEO | Aug 2025 – Jan 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: 19303, label: 'Profile Views' },
              { value: 2010, label: 'Direction Requests' },
              { value: 4112, label: 'Search Appearances' },
              { value: 1000, label: 'Bridal Keywords', suffix: '+' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Platform Breakdown</h4>
              <PerformanceTable 
                delay={0.3}
                data={[
                  { metric: 'Google Search – Mobile', result: '14,067 (73%)' },
                  { metric: 'Google Maps – Mobile', result: '3,793 (20%)' },
                  { metric: 'Desktop Combined', result: '1,443 (7%)' },
                ]}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Bridal Search Terms</h4>
              <PerformanceTable 
                delay={0.35}
                data={[
                  { metric: 'Bridal shop (brand + location)', result: '1,000+' },
                  { metric: '"Frock"', result: '657' },
                  { metric: '"Bride"', result: '389' },
                  { metric: 'Area-based bridal', result: '288' },
                ]}
              />
            </div>
          </div>

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                19,000+ people discovered this bridal boutique organically through Google Search & Maps.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function Boutique2Case() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 flex items-center justify-center border border-purple-500/20">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Fashion Boutique</h3>
              <p className="text-slate-400">Google Business Profile + Local SEO | Aug 2025 – Jan 2026</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { value: 9113, label: 'Profile Views' },
              { value: 426, label: 'Direction Requests' },
              { value: 773, label: 'Search Appearances' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <PerformanceTable 
            delay={0.3}
            data={[
              { metric: 'Google Search – Mobile', result: '7,826 (86%)' },
              { metric: '"Lehenga shops in city"', result: '155' },
              { metric: '"Clothing store"', result: '142' },
              { metric: '"Boutique near me"', result: '65' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                9,000+ people discovered this boutique organically through Google Search & Maps.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function SareeSilksCase() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center border border-orange-500/20">
              <MapPin className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Saree & Silks Showroom</h3>
              <p className="text-slate-400">Google Business Profile + Local SEO | Aug 2025 – Jan 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: 18157, label: 'Profile Views' },
              { value: 822, label: 'Direction Requests' },
              { value: 2445, label: 'Search Appearances' },
              { value: 303, label: '"Saree shop near me"' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Platform Breakdown</h4>
              <PerformanceTable 
                delay={0.3}
                data={[
                  { metric: 'Google Search – Mobile', result: '12,033 (66%)' },
                  { metric: 'Google Maps – Mobile', result: '4,811 (26%)' },
                  { metric: 'Desktop Combined', result: '1,313 (8%)' },
                ]}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Top Search Terms</h4>
              <PerformanceTable 
                delay={0.35}
                data={[
                  { metric: '"Saree shop near me"', result: '303' },
                  { metric: 'Silk saree shop', result: '260' },
                  { metric: 'Chennai silks related', result: '247' },
                  { metric: '"Clothing store"', result: '226' },
                ]}
              />
            </div>
          </div>

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                18,000+ people discovered this saree & silks showroom organically through Google Search & Maps.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function InteriorDesignCase() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center border border-orange-500/20">
              <MapPin className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Interior Design</h3>
              <p className="text-slate-400">Google Business Profile + Local SEO</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: 12500, label: 'Profile Views', suffix: '+' },
        { value: 680, label: 'Direction Requests', suffix: '+' },
        { value: 480, label: 'Phone Calls', suffix: '+' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Platform Breakdown</h4>
              <PerformanceTable 
                delay={0.3}
                data={[
                  { metric: 'Google Search – Mobile', result: '12,033 (66%)' },
                  { metric: 'Google Maps – Mobile', result: '4,811 (26%)' },
                  { metric: 'Desktop Combined', result: '1,313 (8%)' },
                ]}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Top Search Terms</h4>
              <PerformanceTable 
                delay={0.35}
                data={[
                  { metric: 'Interior designer near me', result: '316' },
                  { metric: 'Home interior design', result: '220' },
                  { metric: 'Modular kitchen design', result: '267' },
                  { metric: 'Bedroom interior design', result: '246' },
                ]}
              />
            </div>
          </div>

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
               18,000+ people discovered this Interior Design brand organically through Google Search & Maps — without ads, purely through design presence and local visibility.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function ClinicCase() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center border border-orange-500/20">
              <MapPin className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Multi-Specialty Clinic</h3>
              <p className="text-slate-400">Healthcare Business</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
             { value: 10800, label: 'Profile Views' },
        { value: 620, label: 'Patient Calls' },
        { value: 520, label: 'Direction Requests' },
        { value: 340, label: 'Appointment Intents' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Platform Breakdown</h4>
              <PerformanceTable 
                delay={0.3}
                data={[
                  { metric: 'Google Search – Mobile', result: '7,120 (66%)' },
        { metric: 'Google Maps – Mobile', result: '2,680 (25%)' },
        { metric: 'Desktop Combined', result: '1,000 (9%)' },
                ]}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Top Search Terms</h4>
              <PerformanceTable 
                delay={0.35}
                data={[
                 { metric: 'Clinic near me', result: '410' },
        { metric: 'Doctor clinic', result: '360' },
        { metric: 'Medical center', result: '295' },
        { metric: 'Healthcare services', result: '210' },
                ]}
              />
            </div>
          </div>

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                10,000+ patients discovered this clinic organically via Google Search & Maps.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function RealEstateCase() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center border border-orange-500/20">
              <MapPin className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Real Estate Consultant</h3>
              <p className="text-slate-400">Property Consultant</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
             { value: 22500, label: 'Profile Views' },
        { value: 920, label: 'Buyer Calls' },
        { value: 1050, label: 'Site Visit Intents' },
        { value: 680, label: 'Saved Listings' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Platform Breakdown</h4>
              <PerformanceTable 
                delay={0.3}
                data={[
                  { metric: 'Google Search – Mobile', result: '14,200 (63%)' },
        { metric: 'Google Maps – Mobile', result: '6,150 (27%)' },
        { metric: 'Desktop Combined', result: '2,150 (10%)' },
                ]}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Top Search Terms</h4>
              <PerformanceTable 
                delay={0.35}
                data={[
               { metric: 'Property dealers near me', result: '520' },
        { metric: 'Real estate consultant', result: '470' },
        { metric: 'Flats for sale', result: '410' },
        { metric: 'Plots near me', result: '350' },
                ]}
              />
            </div>
          </div>

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
               22,000+ high-intent buyers discovered this real estate business organically.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function EducationCase() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center border border-orange-500/20">
              <MapPin className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Education Center</h3>
              <p className="text-slate-400">Coaching & Training Institute</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
            { value: 15200, label: 'Profile Views' },
        { value: 780, label: 'Calls' },
        { value: 640, label: 'Visit Intents' },
        { value: 420, label: 'Admission Enquiries' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Platform Breakdown</h4>
              <PerformanceTable 
                delay={0.3}
                data={[
                 { metric: 'Google Search – Mobile', result: '9,650 (64%)' },
        { metric: 'Google Maps – Mobile', result: '3,950 (26%)' },
        { metric: 'Desktop Combined', result: '1,600 (10%)' },
                ]}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Top Search Terms</h4>
              <PerformanceTable 
                delay={0.35}
                data={[
                { metric: 'Coaching center near me', result: '480' },
        { metric: 'Training institute', result: '420' },
        { metric: 'Exam coaching center', result: '360' },
        { metric: 'Tuition center', result: '310' },
                ]}
              />
            </div>
          </div>

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
             15,000+ students and parents discovered this education center organically through Google Search & Maps.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function LocalSEOStatement() {
  return (
    <AnimatedContainer>
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Real Visibility. Real Walk-Ins.
        </h3>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto">
          Using Google Business Profile and Local SEO, we help businesses dominate local search, drive store visits, generate customer calls, and build lasting trust — completely organically.
        </p>
      </div>
    </AnimatedContainer>
  );
}
