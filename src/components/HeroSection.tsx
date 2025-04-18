
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-20 px-4">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-brand-cream opacity-50 -z-10"></div>
      
      <div className={`max-w-3xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/378d31cc-a7c7-4980-b0bf-748cc706f831.png" 
            alt="Enetyl Logo" 
            className="h-32 sm:h-40 w-auto animate-fade-in" 
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-brown mb-6 font-heading tracking-tight">
          {title}
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#download" className="download-button bg-brand-brown">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.0676 9.89036H13.5076V3.33036H10.5076V9.89036H6.94762L12.0076 14.9504L17.0676 9.89036ZM6.94762 16.9204V18.8904H17.0676V16.9204H6.94762Z" />
            </svg>
            iOS
          </a>
          
          <a href="#download" className="download-button bg-brand-green">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M5.2728 0.121C5.2728 0.121 5.5908 0.4 5.9088 0.679C7.4548 1.997 9.0008 4.315 9.0008 7.515C9.0008 7.555 9.0008 7.596 8.9968 7.636C8.9968 7.636 8.9968 7.636 8.9968 7.636C8.9968 7.636 8.9968 7.636 8.9968 7.636C10.5428 7.876 12.7688 6.598 13.5728 5.677C14.3768 4.759 14.6588 4.39 14.6588 4.39C14.6588 4.39 12.3248 3.192 9.9188 3.192C9.4808 3.192 9.0588 3.232 8.6488 3.312C8.6008 3.312 8.5568 3.312 8.5088 3.32C7.9388 3.44 7.4028 3.64 6.9068 3.916C6.5808 4.068 6.2668 4.254 5.9668 4.47C5.9668 4.47 5.9908 4.398 6.0228 4.27C6.2508 3.362 6.8888 1.817 7.9668 0.599C7.3128 0.439 5.9668 0.159 5.2728 0.119V0.121ZM14.6588 4.391V4.391C14.6588 4.391 14.6588 15.991 14.6588 16.831C14.6588 17.751 14.2188 18.071 13.6948 18.071C13.0908 18.071 12.6108 17.599 12.6108 17.119C12.6108 16.639 13.0908 16.167 13.6948 16.167V16.167C13.7948 16.167 13.8828 16.187 13.9668 16.227V7.637H13.9628C13.7348 7.997 12.1288 9.275 9.9828 9.515C9.9828 9.515 9.9828 9.515 9.9828 9.515C9.9828 9.515 9.9828 9.515 9.9828 9.515C9.9788 9.515 9.9788 9.515 9.9748 9.515C9.9668 9.515 9.9588 9.515 9.9508 9.515C9.9348 9.515 9.9188 9.515 9.9028 9.515H9.8988C9.8988 9.515 9.8988 9.515 9.8988 9.515C9.8988 9.515 9.8988 9.515 9.8988 9.515C9.7028 9.535 9.5028 9.555 9.3028 9.555C9.2748 9.555 9.2468 9.555 9.2188 9.555C9.1988 9.555 9.1828 9.555 9.1628 9.555C6.2508 9.555 4.0988 7.235 4.0988 4.39C4.0988 1.546 6.2508 0.242 8.9148 0.122C11.5788 0.002 14.6588 4.39 14.6588 4.39Z" />
            </svg>
            Android
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-brand-brown transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
