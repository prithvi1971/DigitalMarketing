import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import ServicePreview from './components/ServicePreview';
import AboutSnippet from './components/AboutSnippet';
import WhyChooseUs from './components/WhyChooseUs';
import SocialProof from './components/SocialProof';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>MarketForce Pro - Strategic Marketing Excellence</title>
        <meta name="description" content="Transform your business with data-driven marketing strategies. We architect growth through strategic planning and flawless execution." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          {/* <div className="bg-gray-50">
            <ServicePreview />
          </div> */}
          <div className="bg-gray-200">
            <AboutSnippet />
          </div>
          <div className="bg-gray-50">
            <WhyChooseUs />
          </div>
          <div className="bg-gray-200">
            <SocialProof />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;