import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const certifications = [
    {
      name: 'Google Partner',
      icon: 'Award',
      description: 'Premier Google Ads & Analytics certified',
      level: 'Premier'
    },
    {
      name: 'Facebook Marketing Partner',
      icon: 'Shield',
      description: 'Advanced Facebook & Instagram advertising',
      level: 'Advanced'
    },
    {
      name: 'HubSpot Solutions Partner',
      icon: 'Star',
      description: 'Platinum-level inbound marketing expertise',
      level: 'Platinum'
    },
    {
      name: 'Salesforce Certified',
      icon: 'CheckCircle',
      description: 'Marketing Cloud & CRM integration',
      level: 'Certified'
    }
  ];

  const securityFeatures = [
    {
      icon: 'Lock',
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant with bank-level encryption'
    },
    {
      icon: 'Shield',
      title: 'Privacy First',
      description: 'GDPR & CCPA compliant data handling practices'
    },
    {
      icon: 'Eye',
      title: 'Transparent Reporting',
      description: 'Real-time access to all campaign data and metrics'
    },
    {
      icon: 'Users',
      title: 'Dedicated Support',
      description: '24/7 strategic support with assigned account team'
    }
  ];

  const guarantees = [
    {
      icon: 'Clock',
      title: '24-Hour Response',
      description: 'Guaranteed response to all inquiries within one business day',
      commitment: 'Service Level Agreement'
    },
    {
      icon: 'TrendingUp',
      title: 'Performance Guarantee',
      description: 'Measurable results within 90 days or strategy adjustment',
      commitment: 'Results Promise'
    },
    {
      icon: 'FileText',
      title: 'Transparent Contracts',
      description: 'No hidden fees, clear terms, flexible engagement options',
      commitment: 'Fair Pricing'
    },
    {
      icon: 'Handshake',
      title: 'Partnership Approach',
      description: 'Long-term relationship focus with mutual success metrics',
      commitment: 'True Partnership'
    }
  ];

  const clientStats = [
    { number: '50+', label: 'Successful Projects', icon: 'Target' },
    { number: '98%', label: 'Client Retention Rate', icon: 'Heart' },
    { number: '250%', label: 'Average ROI Increase', icon: 'TrendingUp' },
    { number: '24/7', label: 'Strategic Support', icon: 'Clock' }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Trusted by Industry Leaders</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Success is Our
            <span className="text-gradient"> Commitment</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We understand that choosing a marketing partner is a significant decision. Here's why hundreds of companies trust MarketForce Pro with their growth.
          </p>
        </div>

        {/* Client Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {clientStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={28} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Industry Certifications & Partnerships
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-brand hover:shadow-brand-lg transition-brand">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-sm text-text-secondary mb-3">{cert.description}</p>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {cert.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Security & Privacy Standards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-brand">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="bg-card rounded-2xl p-8 shadow-brand-lg">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Service Guarantees
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={guarantee.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-foreground">{guarantee.title}</h4>
                    <span className="bg-accent/10 text-success px-2 py-1 rounded text-xs font-medium">
                      {guarantee.commitment}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-lg">
              <Icon name="CheckCircle" size={20} />
              <span className="font-medium">All guarantees backed by our Service Level Agreement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;