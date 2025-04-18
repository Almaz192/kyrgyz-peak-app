
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import { translations, LanguageKey } from '@/utils/translations';

const Index = () => {
  const [language, setLanguage] = useState<LanguageKey>('en');
  
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as LanguageKey);
  };
  
  const content = translations[language];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLanguageChange={handleLanguageChange} activeLang={language} />
      
      <main className="flex-grow">
        <HeroSection 
          title={content.heroTitle} 
          subtitle={content.heroSubtitle} 
        />
        
        <AboutSection 
          title={content.aboutTitle} 
          description={content.aboutDescription}
          features={content.features}
        />
        
        <DownloadSection 
          title={content.downloadTitle}
          subtitle={content.downloadSubtitle}
          downloadCount={content.downloadCount}
          countLabel={content.countLabel}
          downloadTitle={content.downloadButtonTitle}
        />
      </main>
      
      <Footer 
        contactEmail="auca.enetyl@gmail.com"
        contactLabel={content.contactLabel}
        privacyText={content.privacyText}
        termsText={content.termsText}
      />
    </div>
  );
};

export default Index;
