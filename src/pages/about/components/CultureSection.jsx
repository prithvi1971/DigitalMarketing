import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CultureSection = () => {
  const [activeTab, setActiveTab] = useState('values');

  const cultureValues = [
    {
      icon: "Target",
      title: "Results-Driven Excellence",
      description: "Every strategy, every campaign, every decision is measured against one question: Does this drive meaningful results for our clients?",
      color: "var(--color-primary)"
    },
    {
      icon: "Users",
      title: "Partnership Over Profit",
      description: "We succeed when our clients succeed. This isn\'t just a motto—it\'s how we structure our relationships and measure our own success.",
      color: "var(--color-primary)"
    },
    {
      icon: "Eye",
      title: "Radical Transparency",
      description: "No black boxes, no hidden fees, no sugar-coating. Our clients know exactly what we're doing, why we're doing it, and how it's performing.",
      color: "var(--color-success)"
    },
    {
      icon: "Lightbulb",
      title: "Continuous Innovation",
      description: "The marketing landscape changes daily. We invest 20% of our time staying ahead of trends and testing new approaches.",
      color: "var(--color-warning)"
    }
  ];

  const officeGallery = [
    {
      image: "https://plus.unsplash.com/premium_photo-1677529494234-5d797511f539?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JvdXAlMjBtZWV0aW5nfGVufDB8fDB8fHww",
     
    },
    {
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?cs=srgb&dl=pexels-fauxels-3184291.jpg&fm=jpg",
      
    },
    {
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?cs=srgb&dl=pexels-fauxels-3184360.jpg&fm=jpg",
      
    },
    {
      image: "https://img.freepik.com/free-photo/medium-shot-people-partying-with-confetti_23-2149128382.jpg?semt=ais_hybrid&w=740&q=80",

    }
  ];

  const workingPrinciples = [
    {
      title: "Data-First Decision Making",
      description: "Every recommendation is backed by solid data analysis and market research.",
      icon: "BarChart3"
    },
    {
      title: "Client-Centric Approach",
      description: "Your business goals become our North Star for every strategic decision.",
      icon: "Compass"
    },
    {
      title: "Agile Methodology",
      description: "Quick iterations, rapid testing, and continuous optimization based on performance.",
      icon: "Zap"
    },
    {
      title: "Cross-Functional Collaboration",
      description: "Every project benefits from our diverse expertise working in harmony.",
      icon: "Users"
    }
  ];

  const tabs = [
    { key: 'values', label: 'Our Values', icon: 'Heart' },
    { key: 'workspace', label: 'Our Workspace', icon: 'Building' },
    { key: 'principles', label: 'How We Work', icon: 'Settings' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Heart" size={20} color="var(--color-success)" />
            </div>
            <span className="text-sm font-semibold text-success uppercase tracking-wider">
              Our Culture
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            More Than an Agency,
            <span className="text-gradient block">We're a Growth Partner</span>
          </h2>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            Our culture isn't just about ping pong tables and free snacks. It's about creating an environment where exceptional work thrives and meaningful partnerships flourish.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-brand ${
                activeTab === tab.key
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-muted text-text-secondary hover:text-primary hover:bg-background border border-border'
              }`}
            >
              <Icon 
                name={tab.icon} 
                size={18} 
                className={activeTab === tab.key ? 'text-primary-foreground' : 'text-text-secondary'}
              />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {cultureValues.map((value, index) => (
                  <div key={index} className="group">
                    <div className="bg-card p-8 rounded-2xl shadow-brand hover:shadow-brand-lg transition-brand border border-border h-full">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: `${value.color}15`}}>
                          <Icon name={value.icon} size={24} color={value.color} strokeWidth={2} />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-brand">
                            {value.title}
                          </h3>
                          <p className="text-text-secondary leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Culture Quote */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
                <div className="max-w-4xl mx-auto text-center">
                  <Icon name="Quote" size={32} color="var(--color-primary)" className="mx-auto mb-6" />
                  <blockquote className="text-2xl font-medium text-text-primary mb-6 italic">
                    "Culture isn't just what happens when leadership isn't watching—it's what happens because leadership has created an environment where excellence is the natural outcome."
                  </blockquote>
                  <cite className="text-text-secondary">
                    — MarketForce Pro Team Philosophy
                  </cite>
                </div>
              </div>
            </div>
          )}

          {/* Workspace Tab */}
          {activeTab === 'workspace' && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {officeGallery.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-brand hover:shadow-brand-lg transition-brand">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-brand"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Features */}
              <div className="bg-muted/50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                  Designed for Collaboration & Innovation
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon name="Wifi" size={24} color="var(--color-primary)" />
                    </div>
                    <h4 className="font-semibold text-text-primary">Tech-Forward Environment</h4>
                    <p className="text-sm text-text-secondary">Latest tools and technology to support cutting-edge marketing strategies</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon name="Coffee" size={24} color="var(--color-success)" />
                    </div>
                    <h4 className="font-semibold text-text-primary">Comfort & Wellness</h4>
                    <p className="text-sm text-text-secondary">Spaces designed for both focused work and creative collaboration</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon name="Users" size={24} color="var(--color-primary)" />
                    </div>
                    <h4 className="font-semibold text-text-primary">Client-Ready Spaces</h4>
                    <p className="text-sm text-text-secondary">Professional meeting rooms for strategy sessions and presentations</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Principles Tab */}
          {activeTab === 'principles' && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {workingPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-brand border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={principle.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-text-secondary">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process Flow */}
              <div className="bg-gradient-to-r from-muted/50 to-background p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                  Our Collaborative Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "01", title: "Discovery", desc: "Deep dive into your business, market, and goals" },
                    { step: "02", title: "Strategy", desc: "Develop data-driven marketing roadmap" },
                    { step: "03", title: "Execute", desc: "Launch campaigns with precision and monitoring" },
                    { step: "04", title: "Optimize", desc: "Continuous improvement based on performance data" }
                  ].map((item, index) => (
                    <div key={index} className="text-center space-y-3">
                      <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-text-primary">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;