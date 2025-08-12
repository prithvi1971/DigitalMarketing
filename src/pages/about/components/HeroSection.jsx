import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center shadow-brand">
                  <Icon name="Users" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Meet Our Team
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                The Minds Behind
                <span className="text-gradient block">Marketing Excellence</span>
              </h1>
              
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                We're not just another marketing agency. We're strategic partners who believe in the power of authentic relationships, data-driven decisions, and transformative results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-text-secondary font-medium">Years Combined</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-success">50+</div>
                <div className="text-sm text-text-secondary font-medium">Clients Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-text-secondary font-medium">Retention Rate</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg">
                <Icon name="Award" size={16} color="var(--color-accent)" />
                <span className="text-sm font-medium text-text-secondary">Google Partner</span>
              </div>
              <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span className="text-sm font-medium text-text-secondary">HubSpot Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg">
                <Icon name="Star" size={16} color="var(--color-warning)" />
                <span className="text-sm font-medium text-text-secondary">5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src="https://blogs.sw.siemens.com/wp-content/uploads/sites/41/2023/08/Scalability.jpg"
                alt="MarketForce Pro team collaborating in modern office"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-brand-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} color="var(--color-success)" />
                </div>
                <div>
                  <div className="text-lg font-bold text-text-primary">$1M+</div>
                  <div className="text-sm text-text-secondary">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;