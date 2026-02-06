import { AnimatedContainer } from './AnimatedText';

interface VideoPlaceholderProps {
  videoSrc: string;
  aspectRatio?: string;
  delay?: number;
}

export function VideoPlaceholder({
  videoSrc,
  aspectRatio = '9/16',
  delay = 0,
}: VideoPlaceholderProps) {
  return (
    <AnimatedContainer delay={delay}>
      <div
        className="relative bg-black rounded-lg overflow-hidden border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-500"
        style={{ aspectRatio }}
      >
        {/* REAL VIDEO */}
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Optional subtle glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      </div>
    </AnimatedContainer>
  );
}
