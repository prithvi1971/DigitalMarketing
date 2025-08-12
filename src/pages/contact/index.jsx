import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import TrustSignals from './components/TrustSignals';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact MarketForce Pro - Strategic Marketing Partnership</title>
        <meta name="description" content="Start your growth journey with MarketForce Pro. Get a strategic consultation, custom proposal, or explore partnership opportunities. 24-hour response guarantee." />
        <meta name="keywords" content="marketing consultation, digital marketing agency contact, strategic partnership, marketing proposal, growth strategy" />
        <meta property="og:title" content="Contact MarketForce Pro - Strategic Marketing Partnership" />
        <meta property="og:description" content="Ready to transform your marketing? Connect with our strategic experts for personalized growth solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ContactHero />
          <ContactForm />
          <TrustSignals />
        </main>
        <Footer />
      </div>
    </>
    
  );
};

export default Contact;