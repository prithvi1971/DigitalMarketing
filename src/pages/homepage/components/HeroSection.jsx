import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const YT_ID = 'mkhvraSWqS0';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScheduleCall = () => navigate('/contact');
  const handleExploreServices = () => navigate('/services');

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* YouTube background */}
      {/* YouTube background */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  {/* The iframe is centered and sized to always cover the viewport */}
  <iframe
  title="Hero background video"
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none [@media(prefers-reduced-motion:reduce)]:hidden"
  style={{
    width: 'max(100vw, 177.78vh)',
    height: 'max(56.25vw, 100vh)',
  }}
  src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&loop=1&playlist=${YT_ID}`}
  frameBorder="0"
  allow="autoplay; encrypted-media"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>

  {/* Contrast overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Reduce motion fallback */}
  <div className="absolute inset-0 hidden [@media(prefers-reduced-motion:reduce)]:block bg-gradient-to-r from-gray-900 via-gray-900 to-blue-900" />
</div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary">
            We Don't Just Run Campaigns,
            <span className="block">We Architect Growth</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with data-driven marketing strategies that deliver measurable results.
            From strategic planning to flawless execution, we're your growth partner.
          </p>

          {/* (optional) CTA buttons */}
          {/* <div className="flex justify-center gap-3 mb-10">
            <Button onClick={handleScheduleCall}>Schedule a Call</Button>
            <Button variant="secondary" onClick={handleExploreServices}>Explore Services</Button>
          </div> */}

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} />
              <span className="text-sm">Certified Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} />
              <span className="text-sm">Industry Leaders</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span className="text-sm">50+ Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
