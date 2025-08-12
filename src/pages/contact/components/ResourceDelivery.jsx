import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceDelivery = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [email, setEmail] = useState('');
  const [isDelivering, setIsDelivering] = useState(false);
  const [deliveryComplete, setDeliveryComplete] = useState(false);

  const resourceCategories = [
    {
      id: 'seo-content',
      title: 'SEO & Content Marketing',
      icon: 'Search',
      resources: [
        'Complete SEO Audit Checklist',
        'Content Strategy Framework',
        'Keyword Research Template',
        'Local SEO Optimization Guide'
      ],
      description: 'Comprehensive guides for organic growth and content excellence'
    },
    {
      id: 'paid-advertising',
      title: 'Paid Advertising',
      icon: 'Target',
      resources: [
        'Google Ads ROI Calculator',
        'Facebook Ads Targeting Guide',
        'Campaign Optimization Checklist',
        'Ad Creative Best Practices'
      ],
      description: 'Tools and strategies for maximizing advertising performance'
    },
    {
      id: 'marketing-automation',
      title: 'Marketing Automation',
      icon: 'Zap',
      resources: [
        'Email Sequence Templates',
        'Lead Scoring Framework',
        'Marketing Funnel Builder',
        'Automation Workflow Guide'
      ],
      description: 'Systems and templates for scalable marketing processes'
    },
    {
      id: 'analytics-reporting',
      title: 'Analytics & Reporting',
      icon: 'BarChart3',
      resources: [
        'Marketing Dashboard Template',
        'KPI Tracking Spreadsheet',
        'ROI Measurement Guide',
        'Attribution Model Framework'
      ],
      description: 'Data-driven tools for measuring and optimizing performance'
    },
    {
      id: 'brand-strategy',
      title: 'Brand & Strategy',
      icon: 'Lightbulb',
      resources: [
        'Brand Positioning Canvas',
        'Competitive Analysis Template',
        'Marketing Strategy Planner',
        'Brand Guidelines Template'
      ],
      description: 'Strategic frameworks for building powerful brand presence'
    },
    {
      id: 'conversion-optimization',
      title: 'Conversion Optimization',
      icon: 'TrendingUp',
      resources: [
        'Landing Page Checklist',
        'A/B Testing Framework',
        'Conversion Audit Template',
        'UX Optimization Guide'
      ],
      description: 'Proven methods for improving conversion rates and user experience'
    }
  ];

  const handleInterestToggle = (categoryId) => {
    setSelectedInterests(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleResourceDelivery = async () => {
    if (selectedInterests.length === 0 || !email) return;
    
    setIsDelivering(true);
    
    // Simulate resource delivery
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsDelivering(false);
    setDeliveryComplete(true);
    
    // Reset after showing success
    setTimeout(() => {
      setDeliveryComplete(false);
      setSelectedInterests([]);
      setEmail('');
    }, 4000);
  };

  if (deliveryComplete) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-brand-lg p-8 text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Download" size={36} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Resources Delivered Successfully!
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Check your email inbox for your personalized resource package. We've also added you to our strategic insights newsletter for ongoing value.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Mail" size={16} />
                <span className="text-sm">Resources sent to {email}</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="BookOpen" size={16} />
                <span className="text-sm">{selectedInterests.length} resource categories included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Gift" size={16} />
            <span>Immediate Value Delivery</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Instant Access to Our
            <span className="text-gradient"> Strategic Resources</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            While you're considering your next steps, let us provide immediate value. Select your areas of interest and receive our most effective tools, templates, and guides instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resourceCategories.map((category) => (
            <div
              key={category.id}
              className={`relative p-6 rounded-xl border-2 cursor-pointer transition-brand group ${
                selectedInterests.includes(category.id)
                  ? 'border-primary bg-primary/5 shadow-brand-lg'
                  : 'border-border bg-card hover:border-primary/30 hover:shadow-brand'
              }`}
              onClick={() => handleInterestToggle(category.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-brand ${
                  selectedInterests.includes(category.id)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-text-secondary group-hover:bg-primary/10 group-hover:text-primary'
                }`}>
                  <Icon name={category.icon} size={24} />
                </div>
                
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-brand ${
                  selectedInterests.includes(category.id)
                    ? 'border-primary bg-primary' :'border-border group-hover:border-primary'
                }`}>
                  {selectedInterests.includes(category.id) && (
                    <Icon name="Check" size={14} className="text-primary-foreground" />
                  )}
                </div>
              </div>
              
              <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-text-secondary mb-4">{category.description}</p>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-primary mb-2">Included Resources:</p>
                {category.resources.map((resource, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs text-text-secondary">
                    <Icon name="FileText" size={12} />
                    <span>{resource}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resource Delivery Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-brand-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Deliver My Selected Resources
              </h3>
              <p className="text-text-secondary">
                {selectedInterests.length > 0 
                  ? `${selectedInterests.length} resource ${selectedInterests.length === 1 ? 'category' : 'categories'} selected`
                  : 'Select at least one category above to continue'
                }
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <Button
                variant="default"
                size="lg"
                fullWidth
                loading={isDelivering}
                iconName="Download"
                iconPosition="right"
                onClick={handleResourceDelivery}
                disabled={selectedInterests.length === 0 || !email}
                className="bg-accent hover:bg-accent/90"
              >
                {isDelivering ? 'Preparing Your Resources...' : 'Get My Resources Now'}
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Download" size={16} className="text-success" />
                  <span>Instant delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Gift" size={16} className="text-success" />
                  <span>100% free</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
            <Icon name="Lightbulb" size={16} />
            <span className="text-sm font-medium">
              These are the same resources we use with our $1M+ clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceDelivery;