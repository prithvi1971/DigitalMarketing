import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState('consultation');

  const contactMethods = [
    {
      id: 'consultation',
      title: 'Strategy Consultation',
      description: 'Book a comprehensive strategy session with our senior team',
      icon: 'Calendar',
      duration: '60 minutes',
      availability: 'Next available: Tomorrow 2:00 PM EST',
      features: [
        'Marketing audit & assessment',
        'Growth opportunity identification',
        'Strategic roadmap discussion',
        'Team & budget recommendations'
      ]
    },
    {
      id: 'proposal',
      title: 'Custom Proposal',
      description: 'Get a detailed proposal tailored to your specific needs',
      icon: 'FileText',
      duration: '48-hour delivery',
      availability: 'Comprehensive project scoping',
      features: [
        'Detailed service breakdown',
        'Timeline & milestone planning',
        'Investment & ROI projections',
        'Team assignment & expertise'
      ]
    },
    {
      id: 'partnership',
      title: 'Strategic Partnership',
      description: 'Explore collaboration opportunities and referral programs',
      icon: 'Handshake',
      duration: 'Ongoing relationship',
      availability: 'Partnership evaluation process',
      features: [
        'Mutual referral opportunities',
        'White-label service options',
        'Joint venture possibilities',
        'Resource sharing agreements'
      ]
    },
    {
      id: 'immediate',
      title: 'Immediate Support',
      description: 'Quick questions and urgent marketing challenges',
      icon: 'MessageSquare',
      duration: '15-30 minutes',
      availability: 'Available now via chat',
      features: [
        'Quick marketing questions',
        'Urgent campaign issues',
        'Resource recommendations',
        'Initial guidance & direction'
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Preferred
            <span className="text-gradient"> Engagement Method</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We offer multiple ways to connect based on your timeline, project scope, and communication preferences. Select the option that best fits your current needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`relative p-6 rounded-xl border-2 cursor-pointer transition-brand group ${
                activeMethod === method.id
                  ? 'border-primary bg-primary/5 shadow-brand-lg'
                  : 'border-border bg-card hover:border-primary/30 hover:shadow-brand'
              }`}
              onClick={() => setActiveMethod(method.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-brand ${
                  activeMethod === method.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-text-secondary group-hover:bg-primary/10 group-hover:text-primary'
                }`}>
                  <Icon name={method.icon} size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{method.title}</h3>
                  <p className="text-sm text-text-secondary">{method.duration}</p>
                </div>
              </div>
              
              <p className="text-sm text-text-secondary mb-3">{method.description}</p>
              
              <div className="flex items-center space-x-2 text-xs text-success mb-4">
                <Icon name="Clock" size={14} />
                <span>{method.availability}</span>
              </div>

              {activeMethod === method.id && (
                <div className="space-y-2">
                  {method.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-accent hover:bg-accent/90"
          >
            Continue with {contactMethods.find(m => m.id === activeMethod)?.title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;