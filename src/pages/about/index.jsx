import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FoundingStory from './components/FoundingStory';
import TeamSection from './components/TeamSection';
import CultureSection from './components/CultureSection';
import AwardsSection from './components/AwardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from '../../components/ui/Footer';
const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us - MarketForce Pro | Strategic Marketing Excellence</title>
        <meta 
          name="description" 
          content="Meet the strategic minds behind MarketForce Pro. Learn about our founding story, team expertise, company culture, and industry recognition that drives marketing excellence for growing businesses." 
        />
        <meta name="keywords" content="marketing agency team, digital marketing experts, strategic marketing partners, marketing agency culture, certified marketing professionals" />
        <meta property="og:title" content="About MarketForce Pro - Strategic Marketing Excellence" />
        <meta property="og:description" content="Discover the people and culture behind MarketForce Pro's marketing success stories. Meet our certified experts and learn why 200+ businesses trust us as their growth partner." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <Header />
      
      <main className="relative">
        <HeroSection />
        <FoundingStory />
        <TeamSection />
        <CultureSection />
        <AwardsSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>
      <Footer/>
    </div>
  );
};

export default About;