import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['strategy', 'performance']);

  const services = [
    {
      id: 'strategy',
      name: 'Digital Strategy',
      shortName: 'Strategy',
      icon: 'Target',
      basePrice: 2500,
      features: [
        'Market Research & Analysis',
        'Competitive Intelligence',
        'Customer Journey Mapping',
        'Growth Strategy Development',
        'KPI Framework Design',
        'Budget Allocation Planning'
      ],
      benefits: [
        'Clear roadmap for growth',
        'Optimized resource allocation',
        'Competitive advantage',
        'Measurable objectives'
      ],
      timeToResults: '3-6 months',
      complexity: 'High',
      color: 'blue'
    },
    {
      id: 'performance',
      name: 'Performance Marketing',
      shortName: 'Performance',
      icon: 'TrendingUp',
      basePrice: 3500,
      features: [
        'Paid Search Management',
        'Social Media Advertising',
        'Display & Retargeting',
        'Email Marketing Automation',
        'Conversion Rate Optimization',
        'Landing Page Development'
      ],
      benefits: [
        'Immediate traffic increase',
        'Higher conversion rates',
        'Scalable lead generation',
        'Measurable ROI'
      ],
      timeToResults: '1-3 months',
      complexity: 'Medium',
      color: 'orange'
    },
    {
      id: 'brand',
      name: 'Brand Development',
      shortName: 'Brand',
      icon: 'Palette',
      basePrice: 2000,
      features: [
        'Brand Strategy & Positioning',
        'Visual Identity Design',
        'Content Strategy & Creation',
        'Brand Guidelines Development',
        'Brand Experience Design',
        'Messaging Framework'
      ],
      benefits: [
        'Stronger brand recognition',
        'Improved customer loyalty',
        'Premium positioning',
        'Consistent messaging'
      ],
      timeToResults: '2-4 months',
      complexity: 'Medium',
      color: 'purple'
    },
    {
      id: 'technology',
      name: 'Marketing Technology',
      shortName: 'MarTech',
      icon: 'Settings',
      basePrice: 1800,
      features: [
        'Marketing Automation Setup',
        'CRM Integration & Optimization',
        'Analytics Implementation',
        'Lead Scoring & Nurturing',
        'Technology Stack Audit',
        'Workflow Optimization'
      ],
      benefits: [
        'Improved efficiency',
        'Better data insights',
        'Automated processes',
        'Enhanced tracking'
      ],
      timeToResults: '2-5 months',
      complexity: 'High',
      color: 'green'
    },
    {
      id: 'analytics',
      name: 'Analytics & Optimization',
      shortName: 'Analytics',
      icon: 'BarChart3',
      basePrice: 1500,
      features: [
        'Advanced Analytics Setup',
        'Performance Dashboard Creation',
        'A/B Testing & Optimization',
        'Attribution Modeling',
        'Predictive Analytics',
        'Reporting Automation'
      ],
      benefits: [
        'Data-driven decisions',
        'Continuous improvement',
        'Performance insights',
        'ROI optimization'
      ],
      timeToResults: '1-2 months',
      complexity: 'Medium',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-700', text: 'text-blue-700', bgLight: 'bg-blue-50', border: 'border-blue-200' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', bgLight: 'bg-orange-50', border: 'border-orange-200' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', bgLight: 'bg-purple-50', border: 'border-purple-200' },
      green: { bg: 'bg-green-600', text: 'text-green-600', bgLight: 'bg-green-50', border: 'border-green-200' },
      indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', bgLight: 'bg-indigo-50', border: 'border-indigo-200' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const toggleService = (serviceId) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const selectedServiceData = services.filter(service => selectedServices.includes(service.id));
  const totalPrice = selectedServiceData.reduce((sum, service) => sum + service.basePrice, 0);
  const bundleDiscount = selectedServices.length > 1 ? Math.floor(totalPrice * 0.15) : 0;
  const finalPrice = totalPrice - bundleDiscount;

  const synergyBenefits = [
    {
      combination: ['strategy', 'performance'],
      benefit: 'Strategic campaigns with optimized targeting and messaging'
    },
    {
      combination: ['performance', 'analytics'],
      benefit: 'Data-driven optimization for maximum ROI and performance'
    },
    {
      combination: ['brand', 'strategy'],
      benefit: 'Cohesive brand positioning aligned with growth objectives'
    },
    {
      combination: ['technology', 'analytics'],
      benefit: 'Advanced automation with comprehensive performance tracking'
    },
    {
      combination: ['strategy', 'brand', 'performance'],
      benefit: 'Complete marketing ecosystem with unified messaging and execution'
    }
  ];

  const getApplicableSynergies = () => {
    return synergyBenefits.filter(synergy => 
      synergy.combination.every(service => selectedServices.includes(service)) &&
      synergy.combination.length <= selectedServices.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Service Comparison & Bundles
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare our services and discover how combining them creates synergistic results that amplify your marketing impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                const colors = getColorClasses(service.color);
                
                return (
                  <div
                    key={service.id}
                    className={`relative p-6 rounded-xl border-2 transition-brand cursor-pointer ${
                      isSelected
                        ? `${colors.bgLight} ${colors.border} shadow-brand-lg`
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-brand'
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    {/* Selection Indicator */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected
                          ? `${colors.bg} border-transparent`
                          : 'border-slate-300'
                      }`}>
                        {isSelected && (
                          <Icon name="Check" size={14} className="text-white" strokeWidth={3} />
                        )}
                      </div>
                    </div>

                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      isSelected ? colors.bg : 'bg-slate-100'
                    }`}>
                      <Icon 
                        name={service.icon} 
                        size={24} 
                        className={isSelected ? 'text-white' : 'text-slate-600'}
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className={`text-lg font-semibold mb-2 ${
                      isSelected ? colors.text : 'text-slate-900'
                    }`}>
                      {service.name}
                    </h3>

                    <div className="text-2xl font-bold text-slate-900 mb-4">
                      ${service.basePrice.toLocaleString()}
                      <span className="text-sm font-normal text-slate-500">/month</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Time to Results:</span>
                        <span className="font-medium text-slate-900">{service.timeToResults}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Complexity:</span>
                        <span className={`font-medium ${
                          service.complexity === 'High' ? 'text-red-600' :
                          service.complexity === 'Medium' ? 'text-orange-600' : 'text-green-600'
                        }`}>
                          {service.complexity}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                          <Icon name="Check" size={12} className={colors.text} strokeWidth={2} />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-slate-500">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary & Pricing */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Selected Services ({selectedServices.length})
                </h3>

                {selectedServices.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon name="Package" size={40} className="text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-500">Select services to compare</p>
                  </div>
                ) : (
                  <div>
                    {/* Selected Services List */}
                    <div className="space-y-3 mb-6">
                      {selectedServiceData.map((service) => {
                        const colors = getColorClasses(service.color);
                        return (
                          <div key={service.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors.bg}`}>
                                <Icon 
                                  name={service.icon} 
                                  size={16} 
                                  className="text-white"
                                  strokeWidth={2}
                                />
                              </div>
                              <span className="font-medium text-slate-900">{service.shortName}</span>
                            </div>
                            <span className="text-slate-700">${service.basePrice.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Pricing Breakdown */}
                    <div className="border-t border-slate-200 pt-4 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-600">Subtotal:</span>
                        <span className="text-slate-900">${totalPrice.toLocaleString()}</span>
                      </div>
                      {bundleDiscount > 0 && (
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-green-600">Bundle Discount (15%):</span>
                          <span className="text-green-600">-${bundleDiscount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span className="text-slate-900">Total:</span>
                        <span className="text-slate-900">${finalPrice.toLocaleString()}/mo</span>
                      </div>
                    </div>

                    {/* Synergy Benefits */}
                    {getApplicableSynergies().length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                          <Icon name="Zap" size={16} className="text-orange-600 mr-2" />
                          Synergy Benefits
                        </h4>
                        <div className="space-y-2">
                          {getApplicableSynergies().map((synergy, index) => (
                            <div key={index} className="text-sm text-slate-700 bg-orange-50 p-3 rounded-lg">
                              <Icon name="Plus" size={12} className="text-orange-600 inline mr-2" />
                              {synergy.benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="space-y-3">
                      <Button
                        variant="default"
                        size="lg"
                        fullWidth
                        iconName="Calendar"
                        iconPosition="left"
                        className="bg-blue-700 hover:bg-blue-800"
                      >
                        Schedule Consultation
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        fullWidth
                        iconName="FileText"
                        iconPosition="left"
                        className="border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        Get Custom Proposal
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Recommendations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Recommended Service Bundles
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter Bundle */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Rocket" size={24} className="text-blue-700" />
                <h4 className="text-xl font-bold text-blue-900">Growth Starter</h4>
              </div>
              <p className="text-blue-700 mb-4">Perfect for businesses ready to scale their marketing efforts</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-blue-700" />
                  <span className="text-blue-800">Digital Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-blue-700" />
                  <span className="text-blue-800">Performance Marketing</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-900 mb-4">$5,100/mo</div>
              <Button
                variant="outline"
                fullWidth
                onClick={() => setSelectedServices(['strategy', 'performance'])}
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                Select Bundle
              </Button>
            </div>

            {/* Professional Bundle */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Star" size={24} className="text-orange-700" />
                <h4 className="text-xl font-bold text-orange-900">Professional</h4>
              </div>
              <p className="text-orange-700 mb-4">Comprehensive solution for established businesses</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-orange-700" />
                  <span className="text-orange-800">Digital Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-orange-700" />
                  <span className="text-orange-800">Performance Marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-orange-700" />
                  <span className="text-orange-800">Brand Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-orange-700" />
                  <span className="text-orange-800">Analytics & Optimization</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-orange-900 mb-4">$8,075/mo</div>
              <Button
                variant="default"
                fullWidth
                onClick={() => setSelectedServices(['strategy', 'performance', 'brand', 'analytics'])}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Select Bundle
              </Button>
            </div>

            {/* Enterprise Bundle */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Crown" size={24} className="text-purple-700" />
                <h4 className="text-xl font-bold text-purple-900">Enterprise</h4>
              </div>
              <p className="text-purple-700 mb-4">Complete marketing transformation for large organizations</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-purple-700" />
                  <span className="text-purple-800">All Services Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-purple-700" />
                  <span className="text-purple-800">Dedicated Account Manager</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-purple-700" />
                  <span className="text-purple-800">Priority Support</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-purple-900 mb-4">$9,775/mo</div>
              <Button
                variant="outline"
                fullWidth
                onClick={() => setSelectedServices(['strategy', 'performance', 'brand', 'technology', 'analytics'])}
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                Select Bundle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;