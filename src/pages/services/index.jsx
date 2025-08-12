import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ServiceHero from './components/ServiceHero';
import ServiceMatrix from './components/ServiceMatrix';
import ROICalculator from './components/ROICalculator';
import IndustryFocus from './components/IndustryFocus';
import MethodologyShowcase from './components/MethodologyShowcase';
import ServiceComparison from './components/ServiceComparison';
import ServiceCTA from './components/ServiceCTA';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - MarketForce Pro | Strategic Marketing Solutions</title>
        <meta name="description" content="Comprehensive marketing services including strategy, performance marketing, analytics, and growth optimization. Discover our data-driven approach." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <ServiceHero />
          <div className="bg-gray-50">
            <ServiceMatrix />
          </div>
          <div className="bg-gray-200">
            <ROICalculator />
          </div>
          <div className="bg-gray-50">
            <IndustryFocus />
          </div>
          <div className="bg-gray-200">
            <MethodologyShowcase />
          </div>
          {/* <div className="bg-gray-50">
            <ServiceComparison />
          </div> */}
          <ServiceCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;