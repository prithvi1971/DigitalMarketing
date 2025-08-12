import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "CEO",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      content: `Working with MarketForce Pro has been transformational for our business. They didn't just execute campaigns—they became strategic partners who understood our vision and helped us achieve 300% growth in 18 months.\n\nWhat sets them apart is their genuine investment in our success. Every strategy session feels like a collaboration between partners, not a vendor relationship.`,
      metrics: {
        growth: "300%",
        period: "18 months",
        roi: "450%"
      },
      partnership: "2+ years",
      industry: "SaaS Technology"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Marketing Director",
      company: "GreenEnergy Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content: `The level of strategic thinking and execution from MarketForce Pro is unmatched. They took our complex B2B sales cycle and created a marketing funnel that consistently delivers qualified leads.\n\nTheir transparency and data-driven approach gives us complete confidence in every marketing dollar we invest.`,
      metrics: {
        leads: "250%",
        quality: "85%",
        cost: "-40%"
      },
      partnership: "3+ years",
      industry: "Clean Energy"
    },
    {
      id: 3,
      name: "Sarah Thompson",
      role: "Founder",
      company: "HealthTech Innovations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content: `As a startup founder, I needed a marketing partner who could grow with us. MarketForce Pro adapted their strategies as we scaled from seed to Series A, always staying ahead of our needs.\n\nTheir team feels like an extension of our company. They celebrate our wins and problem-solve our challenges with the same passion we do.`,
      metrics: {
        funding: "Series A",
        growth: "500%",
        market: "3 new markets"
      },
      partnership: "1.5+ years",
      industry: "HealthTech"
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "VP of Growth",
      company: "FinanceForward",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content: `The cultural fit with MarketForce Pro was immediate. They understood our fast-paced environment and need for agile marketing strategies. Their ability to pivot quickly while maintaining strategic focus is remarkable.\n\nEvery team member we work with brings expertise and genuine enthusiasm for our success.`,
      metrics: {
        conversion: "180%",
        retention: "95%",
        expansion: "4 new products"
      },
      partnership: "2.5+ years",
      industry: "FinTech"
    }
  ];

  const partnershipHighlights = [
    {
      icon: "Handshake",
      title: "True Partnership",
      description: "We invest in your success as if it were our own business"
    },
    {
      icon: "Eye",
      title: "Complete Transparency",
      description: "Full visibility into strategies, performance, and spending"
    },
    {
      icon: "Users",
      title: "Dedicated Team",
      description: "Consistent team members who know your business inside out"
    },
    {
      icon: "TrendingUp",
      title: "Growth Focused",
      description: "Every decision measured against your growth objectives"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentClient = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-trust-builder/10 rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={20} color="var(--color-trust-builder)" />
            </div>
            <span className="text-sm font-semibold text-trust-builder uppercase tracking-wider">
              Client Partnerships
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            What Our Partners
            <span className="text-gradient block">Say About Us</span>
          </h2>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            Don't just take our word for it. Hear from the business leaders who've experienced the MarketForce Pro difference firsthand.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-3xl p-8 lg:p-12 shadow-brand-lg border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Client Info */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={currentClient.image}
                      alt={`${currentClient.name} - ${currentClient.role} at ${currentClient.company}`}
                      className="w-20 h-20 rounded-full object-cover shadow-brand"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-brand">
                      <Icon name="CheckCircle" size={16} color="white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {currentClient.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {currentClient.role}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {currentClient.company} • {currentClient.industry}
                    </p>
                  </div>
                </div>

                {/* Partnership Duration */}
                <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg w-fit">
                  <Icon name="Calendar" size={16} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-text-secondary">
                    Partnership: {currentClient.partnership}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(currentClient.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center p-4 bg-background rounded-lg shadow-brand border border-border">
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="space-y-6">
                <Icon name="Quote" size={40} color="var(--color-primary)" className="opacity-50" />
                <blockquote className="text-lg text-text-primary leading-relaxed whitespace-pre-line">
                  {currentClient.content}
                </blockquote>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-brand ${
                  index === currentTestimonial
                    ? 'bg-primary shadow-brand'
                    : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Partnership Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Why Clients Choose Long-Term Partnerships
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our average client relationship lasts over 2.5 years because we focus on building partnerships, not just executing campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipHighlights.map((highlight, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card rounded-xl shadow-brand border border-border hover:shadow-brand-lg transition-brand group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-brand">
                  <Icon name={highlight.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-text-primary group-hover:text-primary transition-brand">
                  {highlight.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-text-primary mb-8">
            Trusted by Growing Businesses Across Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              "TechFlow Solutions",
              "GreenEnergy Corp",
              "HealthTech Innovations",
              "FinanceForward"
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name="Building" size={24} color="var(--color-text-secondary)" />
                </div>
                <div className="text-sm font-medium text-text-secondary">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;