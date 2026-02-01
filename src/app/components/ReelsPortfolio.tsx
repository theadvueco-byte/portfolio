import { AnimatedText, AnimatedContainer } from "./AnimatedText";

const reelTypes = [
  {
    title: "Type 1: Product-Based Reel Shoot",
    subtitle:
      "Designed to showcase real products with engaging visuals and feature-focused storytelling.",
    points: [
      "Real product shoot",
      "Simple & engaging reel style",
      "Optimized for Instagram & Facebook",
      "Focus on features & visual appeal",
    ],
    videos: [
       "videos/type1.1.mp4",
        
     
       "videos/type1.2.mp4",
       "videos/type1.3.mp4",
       "videos/type1.4.mp4",
       "videos/type1.5.mp4",
         "/videos/type1.7.mp4",
          "/videos/type1.8.mp4",
           "/videos/type1.9.mp4",
           "/videos/type1.10.mp4",
           "/videos/type1.11.mp4",
            "/videos/type1.12.mp4",
             "/videos/type1.13.mp4",
             
            
      
    ],
  },
   {
    title: "Type 2: Professional Camera Shoot (High-End Production)",
    subtitle:
      "Premium quality reels built for branding & ads using professional equipment and setups.",
    points: [
      "Professional camera & lighting setup",
      "High-quality equipment",
      "Model / brand-style shoots",
      "Real business-based production",
      "Premium reels for ads & branding",
    ],
    videos: [
      "/videos/type2.1.mp4",
      "/videos/type2.2.mp4",
      "/videos/type2.3.mp4",
      // "/videos/type2.4.mp4",
      "/videos/type2.5.mp4",
       "/videos/type2.6.mp4",
        "/videos/type2.7.mp4",
         "/videos/type2.8.mp4",
         "/videos/type2.9.mp4",
         "/videos/type2.10.mp4",
         "/videos/type2.11.mp4",
         "/videos/type2.12.mp4",
         "/videos/type2.13.mp4",
            "/videos/type2.14.mp4",
             "/videos/type2.15.mp4",
    ],

  },
  {
    title: "Type 3: Content-Based Reel Editing (Lead Generation)",
    subtitle:
      "High-retention reels crafted for education, promotion & awareness using concepts and storytelling.",
    points: [
      "Concept-based reels",
      "Stock clips, transitions & motion graphics",
      "Educational / promotional / awareness content",
      "Voice-over or text-based storytelling",
      "Optimized for lead generation",
    ],
    videos: [
      "/videos/type3.1.mp4",
      "/videos/type3.2.mp4",
      "/videos/type3.3.mp4",
      "/videos/type3.4.mp4",
      "/videos/type3.5.mp4",
       "/videos/type3.6.mp4",
        "/videos/type3.7.mp4",
         "/videos/type3.8.mp4",
      
    ],
  },
 
];

export function ReelsPortfolio() {
  return (
    <section id="Reels" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Heading */}
        <div className="text-center mb-24">
          <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6">
            Reel Production Portfolio
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-xl text-slate-400 max-w-4xl mx-auto"
            delay={0.1}
          >
            Three powerful reel production styles designed for product showcasing,
            lead generation, and premium brand positioning.
          </AnimatedText>
        </div>

        {/* Reel Types */}
        {reelTypes.map((type, typeIndex) => (
          <div key={typeIndex} className="mb-28">

            {/* Section Header */}
            <AnimatedText as="h3" className="text-3xl md:text-4xl font-bold text-white mb-4">
              {type.title}
            </AnimatedText>

            <p className="text-slate-400 max-w-4xl mb-6">
              {type.subtitle}
            </p>

            {/* Bullet Points */}
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-slate-300 mb-10">
              {type.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Videos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {type.videos.map((video, index) => (
                <AnimatedContainer key={index} delay={index * 0.06}>
                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black border border-slate-700/50">

                    {/* Index Badge */}
                    <div className="absolute top-2 left-2 z-10 bg-black/60 px-2 py-1 text-xs text-white rounded">
                      #{index + 1}
                    </div>

                    <video
                      src={video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                      controls={false}
                    />

                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
