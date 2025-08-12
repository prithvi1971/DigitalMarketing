import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCTA = () => {
  const ctaOptions = [
    {
      title: 'Schedule Strategy Call',
      description: 'Get a personalized marketing strategy consultation',
      icon: 'Calendar',
      action: 'primary',
      duration: '45 minutes',
      value: 'Free'
    },
    {
      title: 'Request Custom Proposal',
      description: 'Receive a tailored proposal for your business needs',
      icon: 'FileText',
      action: 'secondary',
      duration: '24-48 hours',
      value: 'Free'
    },
    {
      title: 'Download Service Guide',
      description: 'Comprehensive guide to our services and methodology',
      icon: 'Download',
      action: 'tertiary',
      duration: 'Instant',
      value: 'Free'
    }
  ];

  const guarantees = [
    {
      icon: 'Shield',
      title: '90-Day Performance Guarantee',
      description: 'See measurable results within 90 days'
    },
    {
      icon: 'Users',
      title: 'Dedicated Account Team',
      description: 'Direct access to senior strategists and account managers'
    },
    {
      icon: 'BarChart3',
      title: 'Transparent Reporting',
      description: 'Real-time dashboard access and monthly performance reviews'
    },
    {
      icon: 'Clock',
      title: '24/7 Support Access',
      description: 'Priority support channel for urgent marketing needs'
    }
  ];

  const testimonialHighlight = {
    quote: `MarketForce Pro transformed our entire marketing approach. Within 6 months, we saw a sharp increase in qualified leads and our revenue grew by 180%. Their strategic thinking combined with flawless execution is unmatched.`,
    author: 'Vipul Jani',
    position: 'CEO',
    company: 'IMEC',
    avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQEDomTT_QUaDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1644166397087?e=1757548800&v=beta&t=JtOtgvQmXOOUoN62VdwxJw8yyOVPMjcEVnrJtEgMdWU',
    results: [
      { metric: '453%', label: 'Lead Increase' },
      { metric: '180%', label: 'Revenue Growth' },
      { metric: '6 mo', label: 'Time to Results' }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} className="mr-2" />
            Ready to Transform Your Marketing?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's Build Your
            <span className="text-gradient block mt-2">Growth Strategy Together</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join the growing list of successful businesses that have transformed their marketing with our proven methodology. 
            Your growth journey starts with a single conversation.
          </p>

          {/* CTA Options */}
          {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
            {ctaOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-brand rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-brand group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-brand">
                  <Icon 
                    name={option.icon} 
                    size={28} 
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-blue-100 mb-4">{option.description}</p>
                
                <div className="flex items-center justify-between text-sm text-blue-200 mb-6">
                  <span>Duration: {option.duration}</span>
                  <span className="font-semibold text-green-300">{option.value}</span>
                </div>

                <Button
                  variant={option.action === 'primary' ? 'default' : 'outline'}
                  size="lg"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className={
                    option.action === 'primary' ?'bg-orange-600 hover:bg-orange-700 text-white'
                      : option.action === 'secondary' ?'border-white/30 text-white hover:bg-white/10' :'border-blue-300/30 text-blue-200 hover:bg-blue-500/10'
                  }
                >
                  {option.action === 'primary' ? 'Schedule Now' : 
                   option.action === 'secondary' ? 'Request Proposal' : 'Download Guide'}
                </Button>
              </div>
            ))}
          </div> */}
        </div>

        {/* Testimonial Highlight */}
        <div className="bg-white/10 backdrop-blur-brand rounded-2xl p-8 border border-white/20 mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonialHighlight.avatar} 
                    alt={testimonialHighlight.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-white text-lg leading-relaxed mb-4">
                    "{testimonialHighlight.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonialHighlight.author}</div>
                    <div className="text-blue-200">{testimonialHighlight.position}, {testimonialHighlight.company}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="grid grid-cols-3 gap-4">
                {testimonialHighlight.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">{result.metric}</div>
                    <div className="text-sm text-blue-200">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Our Commitment to Your Success
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-brand">
                  <Icon 
                    name={guarantee.icon} 
                    size={24} 
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>
                <h4 className="font-semibold text-white mb-2">{guarantee.title}</h4>
                <p className="text-blue-100 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to 3X Your Marketing Results?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl">
              Join the businesses that have already transformed their growth with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="xl"
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8"
              >
                Schedule Your Strategy Call
              </Button>
              <Button
                variant="outline"
                size="xl"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10 px-8"
              >
                Call (555) 123-4567
              </Button>
            </div>
            <div className="mt-4 text-orange-200 text-sm">
              <Icon name="Clock" size={14} className="inline mr-1" />
              Free 45-minute consultation • No obligation • Immediate insights
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceCTA;