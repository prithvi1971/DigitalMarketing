import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FoundingStory = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Spark",
      description: "Disillusioned with one-size-fits-all agency models, we set out to build a marketing firm rooted in strategic thinking, measurable outcomes, and client-first execution."
    },
    {
      year: "2020",
      title: "First Breakthrough",
      description: "Drove 300% growth in under 6 months for an early-stage SaaS startup through clear positioning, conversion-focused content, and performance marketing."
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Scaled to a specialized team of 10+, with talent across growth strategy, paid media, content, and analytics — enabling us to serve more clients with greater depth."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized by peers and partners for delivering consistent client success. Formed strategic collaborations and expanded our footprint across North America and beyond."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Story
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Born from Frustration,
            <span className="text-gradient block">Built for Excellence</span>
          </h2>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            MarketForce Pro wasn't born in a boardroom—it was born from the frustration of watching talented businesses struggle with generic marketing solutions that didn't understand their unique challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary">
                The Problem We Saw Everywhere
              </h3>
              <p className="text-text-secondary leading-relaxed">
                After years of working inside traditional marketing agencies, we noticed a common pattern: brilliant businesses were being boxed into one-size-fits-all strategies that ignored their unique market position, customer base, and growth stage.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We launched this agency to change that—by treating each client not as a number, but as a brand with a distinct vision and potential.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-xl border-l-4 border-primary">
              <blockquote className="text-lg font-medium text-text-primary italic">
                "We don’t just execute campaigns—we architect growth strategies as unique as the businesses we serve."
              </blockquote>
              <cite className="text-sm text-text-secondary mt-2 block">
                — Founder, MarketForce Pro
              </cite>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-text-primary">Our Core Beliefs</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Every business has a unique story worth telling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Data should drive decisions, not assumptions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Partnerships outperform vendor relationships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Transparency builds trust, trust builds results</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Founders Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src="assets/images/about/Everywhere.png"
                alt="We don’t just execute campaigns—we architect growth strategies as unique as the businesses we serve."
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              
              {/* Founders Info Overlay */}
              {/* <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/95 backdrop-blur-brand p-4 rounded-lg">
                  <div className="text-sm font-semibold text-text-primary">Sarah Chen & Michael Rodriguez</div>
                  <div className="text-xs text-text-secondary">Co-Founders, MarketForce Pro</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Our Journey to Excellence
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From a lean startup to a trusted digital growth partner, here’s how we’ve scaled with purpose — staying committed to marketing that drives real impact.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-border hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-brand border border-border">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center text-white text-sm font-bold">
                          {milestone.year.slice(-2)}
                        </div>
                        <span className="text-lg font-bold text-primary">{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-text-primary mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-brand"></div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingStory;