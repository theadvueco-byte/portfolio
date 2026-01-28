import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CounterAnimation({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = ''
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;
            
            const updateCount = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / (endTime - startTime), 1);
              
              // Easing function
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              
              setCount(Math.floor(easeOutCubic * value));
              
              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                setCount(value);
              }
            };
            
            updateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <motion.div 
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.div>
  );
}
