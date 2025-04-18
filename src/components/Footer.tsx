
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  contactEmail: string;
  contactLabel: string;
  privacyText: string;
  termsText: string;
}

const Footer = ({ contactEmail, contactLabel, privacyText, termsText }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-brown text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/378d31cc-a7c7-4980-b0bf-748cc706f831.png" 
                alt="Enetyl Logo" 
                className="h-12 w-auto mr-3 bg-white p-1 rounded-full" 
              />
              <span className="font-heading font-semibold text-xl">Enetyl</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-cream transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-cream transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-cream transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-white/20 pt-8">
            <div className="mb-4 md:mb-0">
              <p className="mb-2">
                <span className="block md:inline">{contactLabel}</span>
                <a 
                  href={`mailto:${contactEmail}`} 
                  className="flex items-center justify-center md:justify-start hover:text-brand-cream transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  {contactEmail}
                </a>
              </p>
              <p className="text-brand-cream/70">
                &copy; {currentYear} Enetyl. {privacyText}
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-brand-cream transition-colors">
                {privacyText}
              </a>
              <a href="#" className="hover:text-brand-cream transition-colors">
                {termsText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
