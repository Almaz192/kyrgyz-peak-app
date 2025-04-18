
import { useEffect, useRef, useState } from 'react';

interface DownloadSectionProps {
  title: string;
  subtitle: string;
  downloadCount: number;
  countLabel: string;
  downloadTitle: string;
}

const DownloadSection = ({ 
  title, 
  subtitle, 
  downloadCount, 
  countLabel,
  downloadTitle 
}: DownloadSectionProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(downloadCount * progress);
        
        setCount(currentCount);
        
        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(downloadCount);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [isVisible, downloadCount]);

  return (
    <section 
      id="download" 
      ref={sectionRef} 
      className="app-section bg-white py-20"
    >
      <div className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-brown font-heading">
          {title}
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="mb-12">
          <div className="text-5xl sm:text-6xl font-bold text-brand-green mb-2 font-heading animate-count-up">
            {new Intl.NumberFormat().format(count)}+
          </div>
          <div className="text-muted-foreground">
            {countLabel}
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-brand-brown font-heading">
          {downloadTitle}
        </h3>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="download-button bg-brand-brown">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.0676 9.89036H13.5076V3.33036H10.5076V9.89036H6.94762L12.0076 14.9504L17.0676 9.89036ZM6.94762 16.9204V18.8904H17.0676V16.9204H6.94762Z" />
            </svg>
            App Store
          </a>
          
          <a href="#" className="download-button bg-brand-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.9 5c.1 0 .1 0 0 0 .3.3.9 1.3.9 2.9l-.8.8c.1.7 0 1.2-.1 1.6-.2-.2-.4-.3-.7-.3s-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7l.5.5c-.2.4-.3.8-.6 1.1-.3.2-.6.5-1 .7l-.8-.8c-.1-.1-.3-.2-.5-.2s-.4.1-.5.2c-.1.1-.2.3-.2.5s.1.4.2.5l.8.8c-.2.4-.4.7-.7 1-.3.3-.7.4-1.1.6l-.5-.5c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7l.3.3c-.4.1-.9.2-1.6.1L8 16c-1.6 0-2.7-.6-2.9-.8 0 0 0-.1 0-.1C4.9 14.9 3 13.8 2 11.7c-.2-.4-.3-.9-.3-1.4C1.6 9.5 1.6 7 4.8 5.1c3.1-1.9 5.9.3 5.9.3.-.1.1 1.3-.7 2.8-.7 1.3 0 2.4.6 3 1.3-.3-.1-1.3-.3-2 .2-.9.7-.9 1.2-.9.1.2.1.6.8.7 1.7.1.8-.1 1.7-.6 2.5-.1.2-.3.5-.4.7-.2.3-.4.5-.7.5-.2 0-.3-.1-.4-.1-.2-.1-.3-.2-.4-.4-.1-.1-.1-.3-.1-.5 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.1-.1.2-.1.3-.2.1 0 .2-.1.5-.1-.2-.4-.2-1.2-.1-1.8.1-.8.7-1.9 1.4-2.5 0 0-.5 0-1.1.3-.6.3-1.2.9-1.5 1.7-.3.7-.3 1.7.5 2.9.1.2.3.5.5.8.2.4.5.9.7 1.4.5.7.9 1.6 1.5 1.6.3 0 .7-.4.9-.9.2-.3.3-.7.4-1.2 0-.3.1-.9.7-1 .4-.1.9.1 1.1.3.1.1.2.2.2.4.1.1.1.3.1.7v.4c0 .6.1 1.5.9 1.7.6.1 1.8-.3 2.9-1.3 1-1 2-2.3 2.5-3.2.4-.7.5-1.2.5-1.3 0-.1.1 0 .2.2.1.2.2.7-.1 1.5-.4 1-1.6 2.5-2.8 3.6-1.4 1.3-2.9 1.9-3.8 1.7-1.3-.3-1.5-1.5-1.5-2.1v-.3c0-.4 0-.4-.1-.4-.1-.1-.3-.2-.5-.1-.3.1-.4.3-.5.5-.1.5-.2.9-.4 1.3-.4.8-1 1.4-1.7 1.4-.9 0-1.5-.7-2-1.5-.4-.5-.6-1-.9-1.4-.2-.3-.3-.6-.5-.8-.6-1-1-2.4.1-3.9.8-1.1 1.8-1.8 2.6-2.1.9-.3 1.5-.3 1.7-.3.3 0 .6.1.8.2.1.1.2.1.2.1 1.3-1.1 3.1-1.4 4.1-1.2.7.1 1.4.6 1.4 1.3v.3c0-.1.1-.2.2-.4.1-.2.3-.3.6-.4.2-.1.5-.1.8 0 .5.1.9.6 1 1.2 0 0 0 .1.1.1.1-.3.3-.6.5-.8.3-.3.7-.5 1.1-.7.9-.4 1.9-.5 2.8-.3.1 0 .5.1 1.2.3z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
