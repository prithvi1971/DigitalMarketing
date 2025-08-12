import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'MapPin',
      title: 'Headquarters',
      primary: 'New York City',
      secondary: '123 Marketing Avenue, Suite 500\nNew York, NY 10001',
      action: 'View on Map'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      primary: '+1 (555) 123-4567',
      secondary: 'Monday - Friday: 9:00 AM - 6:00 PM EST\nSaturday: 10:00 AM - 2:00 PM EST',
      action: 'Call Now'
    },
    {
      icon: 'Mail',
      title: 'Email',
      primary: 'hello@marketforcepro.com',
      secondary: 'For general inquiries and new partnerships\nResponse time: Within 4 hours',
      action: 'Send Email'
    },
    {
      icon: 'MessageSquare',
      title: 'Live Chat',
      primary: 'Available Now',
      secondary: 'Instant support for quick questions\nAverage response: Under 2 minutes',
      action: 'Start Chat'
    }
  ];

  const officeLocations = [
    {
      city: 'New York',
      address: '123 Marketing Avenue, Suite 500',
      phone: '+1 (555) 123-4567',
      timezone: 'EST',
      isHeadquarters: true
    },
    {
      city: 'Los Angeles',
      address: '456 Innovation Blvd, Floor 12',
      phone: '+1 (555) 987-6543',
      timezone: 'PST',
      isHeadquarters: false
    },
    {
      city: 'Chicago',
      address: '789 Strategy Street, Suite 300',
      phone: '+1 (555) 456-7890',
      timezone: 'CST',
      isHeadquarters: false
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#', followers: '25K+' },
    { name: 'Twitter', icon: 'Twitter', url: '#', followers: '18K+' },
    { name: 'Instagram', icon: 'Instagram', url: '#', followers: '12K+' },
    { name: 'YouTube', icon: 'Youtube', url: '#', followers: '8K+' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactDetails.map((detail, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-brand group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-brand">
                  <Icon name={detail.icon} size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{detail.title}</h3>
              </div>
              
              <p className="font-medium text-foreground mb-2">{detail.primary}</p>
              <p className="text-sm text-text-secondary mb-4 whitespace-pre-line">{detail.secondary}</p>
              
              <button className="text-sm font-medium text-primary hover:text-accent transition-brand flex items-center space-x-1">
                <span>{detail.action}</span>
                <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Locations</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              With offices across major markets, we're positioned to serve clients nationwide while maintaining the personal touch of local partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((location, index) => (
              <div key={index} className={`relative bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-brand ${
                location.isHeadquarters ? 'ring-2 ring-primary/20' : ''
              }`}>
                {location.isHeadquarters && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Headquarters
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Building" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{location.city}</h3>
                    <span className="text-sm text-text-secondary">{location.timezone}</span>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary mb-3">{location.address}</p>
                <p className="text-sm font-medium text-foreground mb-4">{location.phone}</p>
                
                <button className="text-sm font-medium text-primary hover:text-accent transition-brand flex items-center space-x-1">
                  <Icon name="MapPin" size={14} />
                  <span>Get Directions</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Community */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Join Our <span className="text-gradient">Community</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Follow us for daily marketing insights, industry trends, and behind-the-scenes content from our team of strategic experts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="bg-card rounded-lg p-4 text-center hover:shadow-brand transition-brand group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-brand">
                  <Icon name={social.icon} size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-medium text-foreground mb-1">{social.name}</h4>
                <p className="text-sm text-text-secondary">{social.followers} followers</p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-card rounded-lg p-4">
              <Icon name="Bell" size={20} className="text-accent" />
              <div className="text-left">
                <p className="font-medium text-foreground">Stay Updated</p>
                <p className="text-sm text-text-secondary">Get notified about new insights and resources</p>
              </div>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-brand">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;