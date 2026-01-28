import { TrendingUp, ShoppingBag, Heart, Phone } from 'lucide-react';
import { AnimatedText, AnimatedContainer } from './AnimatedText';
import { CounterAnimation } from './CounterAnimation';
import { PerformanceTable } from './PerformanceTable';
import { VideoPlaceholder } from './VideoPlaceholder';

export function MetaAdsPerformance() {
  return (
    <section id="Meta" className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meta & Instagram Ads Performance
          </AnimatedText>
          <AnimatedText as="p" className="text-xl text-slate-400 max-w-3xl mx-auto" delay={0.1}>
            Real scale. Real results. From boutiques to bridal brands, textiles to interiors — we build reach, engagement, enquiries, and sales using performance-driven Meta advertising.
          </AnimatedText>
          <br></br>
          <VideoPlaceholder
  videoSrc="/img/2.mp4"
  aspectRatio="21/9"
/>
        </div>

        {/* Case Study 1: Women's Fashion Boutique */}
        <CaseStudy1 />

        {/* Case Study 2: Boutique Sales Campaign */}
        <CaseStudy2 />
 <CaseStudy8 />
        {/* Case Study 3: Bridal Boutique */}
        <CaseStudy3 />

        {/* Case Study 4: Sarees & Textiles Shop */}
        <CaseStudy4 />
 <CaseStudy9 />
        {/* Case Study 5: Women's Boutique - High Intent */}
        <CaseStudy5 />
<CaseStudy10/>
        {/* Case Study 6: Textiles Shop - Call Focused */}
        <CaseStudy6 />

        {/* Case Study 7: Interior Design */}
        <CaseStudy7 />

        
       
        

       

        {/* Final Power Statement */}
        <FinalStatement />
      </div>
    </section>
  );
}

function CaseStudy1() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-pink-500/20">
              <ShoppingBag className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Women's Fashion Boutique – Mega Results</h3>
              <p className="text-slate-400">Instagram Reels, Engagement & Message Ads | Jul – Nov 2025</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
              { metric: 'Total Ad Spend', result: '₹59,000+' },
              { metric: 'Total Views', result: '4.5 Million+' },
              { metric: 'Total Reach', result: '2 Million+' },
              { metric: 'Link Clicks', result: '40,000+' },
              { metric: 'Message Conversations', result: '2,500+' },
              { metric: 'Engagement Quality', result: 'Very High' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                4.5M+ views and 40K+ clicks generated for a women's boutique using high-performing Instagram ads.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy8() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-pink-500/20">
              <ShoppingBag className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Educational Institute </h3>
              <p className="text-slate-400">Admissions & Counselling</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
              { metric: 'Reach', result: '1,50,000+' },
        { metric: 'Student Leads', result: '200+' },
        { metric: 'Cost per Lead', result: '₹150' },
        { metric: 'Admission Conversion', result: 'Strong' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                4.5M+ views and 40K+ clicks generated for a women's boutique using high-performing Instagram ads.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy2() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center border border-green-500/20">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Boutique Sales Campaign (Under ₹5,000 Products)</h3>
              <p className="text-slate-400">Product Price Range: ₹2,000 – ₹5,000 | Aug – Sep 2025</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
              { metric: 'Total Views', result: '1,32,000+' },
              { metric: 'Total Reach', result: '94,000+' },
              { metric: 'Customer Enquiries', result: '350+' },
              { metric: 'Products Sold', result: '200+ Units' },
              { metric: 'Conversion Rate', result: '55–60%' },
              { metric: 'ROI', result: 'High & Profitable' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                200+ fashion products sold under ₹5,000 through Instagram ads with strong enquiry-to-sale conversion.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy3() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-600/20 flex items-center justify-center border border-rose-500/20">
              <Heart className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Bridal Boutique – Massive Scale Campaign</h3>
              <p className="text-slate-400">Instagram Engagement & Traffic Ads | Last 60 Days</p>
            </div>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: 5500000, label: 'Total Views', suffix: '+' },
              { value: 2300000, label: 'Total Reach', suffix: '+' },
              { value: 1200000, label: 'Post Engagements', suffix: '+' },
              { value: 66700, label: 'Website/WhatsApp Clicks', suffix: '+' },
            ].map((stat, index) => (
              <AnimatedContainer key={index} delay={0.1 + (index * 0.08)}>
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CounterAnimation 
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  />
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <PerformanceTable 
            delay={0.4}
            data={[
              { metric: 'Total Ad Spend', result: '₹54,430' },
              { metric: 'Visibility Growth', result: '+2,600%' },
            ]}
          />

          <AnimatedContainer delay={0.6}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                5.5M+ views and 66K+ high-intent clicks generated for a premium bridal boutique.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy9() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-pink-500/20">
              <ShoppingBag className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Real Estate</h3>
              <p className="text-slate-400">Property Enquiries</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
               { metric: 'Ad Reach', result: '2,00,000+' },
        { metric: 'Property Leads', result: '90+' },
        { metric: 'Site Visit Requests', result: '40+' },
        { metric: 'CPL', result: '₹320' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                4.5M+ views and 40K+ clicks generated for a women's boutique using high-performing Instagram ads.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy4() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center border border-amber-500/20">
              <ShoppingBag className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Sarees & Textiles Shop – Local Brand Dominance</h3>
              <p className="text-slate-400">Instagram Reel Boost & Engagement Ads | Last 60 Days</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
              { metric: 'Ad Spend', result: '₹3,060' },
              { metric: 'Total Views', result: '118,200+' },
              { metric: 'Total Reach', result: '90,200+' },
              { metric: 'Post Engagements', result: '26,500+' },
              { metric: 'Instagram Profile Visits', result: '1,929' },
              { metric: 'Visibility Growth', result: '+560%' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                ₹3,000 ad spend delivered 1.18 lakh views and strong buyer attention for a textiles shop.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy7() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 flex items-center justify-center border border-purple-500/20">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Women's Boutique – High-Intent Campaign</h3>
              <p className="text-slate-400">Engagement & Traffic Ads | Last 60 Days</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
              { metric: 'Ad Spend', result: '₹4,160' },
              { metric: 'Total Views', result: '130,600+' },
              { metric: 'Post Engagements', result: '44,373+' },
              { metric: 'Link Clicks', result: '2,609+' },
              { metric: 'Engagement Growth', result: '+100%' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                Low budget, high engagement, strong buying intent for a fashion boutique.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy6() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/20">
              <Phone className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Textiles Shop – Call-Focused Ads</h3>
              <p className="text-slate-400">Engagement + Call Ads | Last 60 Days</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
              { metric: 'Ad Spend', result: '₹2,400' },
              { metric: 'Total Views', result: '97,500+' },
              { metric: 'Total Reach', result: '69,700+' },
              { metric: 'Post Engagements', result: '24,000+' },
              { metric: 'Customer Calls', result: '1,295 Calls' },
              { metric: 'Call Growth', result: '+430%' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                1,295 direct customer calls generated with just ₹2,400 ad spend.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy10() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-pink-500/20">
              <ShoppingBag className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Health Clinic </h3>
              <p className="text-slate-400">Appointment Enquiries</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
              { metric: 'Monthly Reach', result: '85,000+' },
        { metric: 'Appointment Leads', result: '120+' },
        { metric: 'Cost per Lead', result: '₹180' },
        { metric: 'Conversion Rate', result: 'High' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                4.5M+ views and 40K+ clicks generated for a women's boutique using high-performing Instagram ads.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}

function CaseStudy5() {
  return (
    <div className="mb-24">
      <AnimatedContainer>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center border border-indigo-500/20">
              <ShoppingBag className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Interior Design – Lead Generation Campaign</h3>
              <p className="text-slate-400">Meta Lead Ads | October 2025</p>
            </div>
          </div>

          <PerformanceTable 
            delay={0.2}
            data={[
              { metric: 'Total Ad Spend', result: '₹10,000' },
              { metric: 'Qualified Leads', result: '60+' },
              { metric: 'Cost per Lead', result: '₹150' },
              { metric: 'Lead Quality', result: 'High Intent' },
            ]}
          />

          <AnimatedContainer delay={0.4}>
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <p className="text-lg text-cyan-300 font-semibold">
                High-quality interior design leads generated at just ₹150 per lead.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>
    </div>
  );
}



function FinalStatement() {
  return (
    <AnimatedContainer>
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
          From Local Business to Large-Scale Business
        </h3>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto">
          We have delivered millions of views, lakhs of engagements, thousands of enquiries, and real business growth using performance-driven Meta advertising.
        </p>
      </div>
    </AnimatedContainer>
  );
}
