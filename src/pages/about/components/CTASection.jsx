import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-background rounded-3xl shadow-brand-lg border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center shadow-brand">
                    <Icon name="Rocket" size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Ready to Get Started?
                  </span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
                  Let's Build Your
                  <span className="text-gradient block">Growth Story Together</span>
                </h2>
                
                <p className="text-lg text-text-secondary leading-relaxed">
                  Now that you know who we are and how we work, let's talk about your business. We're excited to learn about your challenges, goals, and vision for growth.
                </p>
              </div>

              {/* Value Props */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-primary">Free Strategy Consultation</span>
                    <p className="text-sm text-text-secondary">60-minute deep dive into your marketing challenges and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-primary">Custom Growth Roadmap</span>
                    <p className="text-sm text-text-secondary">Tailored strategy recommendations based on your specific situation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-primary">No Pressure Approach</span>
                    <p className="text-sm text-text-secondary">We believe in earning partnerships through value, not sales pressure</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={handleContactClick}
                  className="bg-primary hover:bg-primary/90 animate-pulse-subtle"
                >
                  Let's Talk
                </Button>
              
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-border">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} color="var(--color-success)" />
                    <span className="text-sm text-text-secondary">Flexible Contracts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} color="var(--color-primary)" />
                    <span className="text-sm text-text-secondary">Quick Response Time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} color="var(--color-warning)" />
                    <span className="text-sm text-text-secondary">98% Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12 flex items-center justify-center">
              {/* Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-success/5 rounded-full blur-2xl"></div>
              </div>

              {/* Central Content */}
              <div className="relative text-center space-y-8">
                <div className="w-24 h-24 brand-gradient rounded-2xl flex items-center justify-center mx-auto shadow-brand-lg animate-float">
                  <Icon name="Users" size={40} color="white" strokeWidth={2} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-text-primary">
                    Brands That Turn Ambition Into Results
                  </h3>
                  <p className="text-text-secondary max-w-sm">
                    Trusted by startups to enterprises, we deliver measurable growth through strategic marketing excellence.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background/80 backdrop-blur-brand p-4 rounded-xl shadow-brand border border-border">
                    <div className="text-2xl font-bold text-primary">$1M+</div>
                    <div className="text-sm text-text-secondary">Revenue Generated</div>
                  </div>
                  <div className="bg-background/80 backdrop-blur-brand p-4 rounded-xl shadow-brand border border-border">
                    <div className="text-2xl font-bold text-primary">343%</div>
                    <div className="text-sm text-text-secondary">Avg Growth Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection