
import { useState, useEffect } from 'react';

interface NavbarProps {
  onLanguageChange: (lang: string) => void;
  activeLang: string;
}

const Navbar = ({ onLanguageChange, activeLang }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/378d31cc-a7c7-4980-b0bf-748cc706f831.png" 
            alt="Enetyl Logo" 
            className="h-10 w-auto" 
          />
          <span className="font-heading font-semibold text-xl text-brand-brown">Enetyl</span>
        </div>

        <div className="language-switcher">
          <div className={`absolute inset-0 ${activeLang === 'en' ? 'translate-x-0' : activeLang === 'ru' ? 'translate-x-full' : 'translate-x-[200%]'} green-gradient duration-300 ease-in-out h-full w-1/3 rounded-full`}></div>
          <button 
            className={`language-option ${activeLang === 'en' ? 'text-white' : ''}`} 
            onClick={() => onLanguageChange('en')}
            data-active={activeLang === 'en'}
          >
            EN
          </button>
          <button 
            className={`language-option ${activeLang === 'ru' ? 'text-white' : ''}`} 
            onClick={() => onLanguageChange('ru')}
            data-active={activeLang === 'ru'}
          >
            РУ
          </button>
          <button 
            className={`language-option ${activeLang === 'kg' ? 'text-white' : ''}`} 
            onClick={() => onLanguageChange('kg')}
            data-active={activeLang === 'kg'}
          >
            КГ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
