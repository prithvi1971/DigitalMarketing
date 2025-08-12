import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceMatrix = () => {
  const [activeService, setActiveService] = useState('strategy');

  const services = [
    {
      id: 'strategy',
      name: 'Digital Strategy & Planning',
      icon: 'Target',
      description: 'Comprehensive digital transformation roadmaps that align marketing initiatives with business objectives.',
      features: [
        'Market Research & Analysis',
        'Competitive Intelligence',
        'Customer Journey Mapping',
        'Growth Strategy Development',
        'KPI Framework Design'
      ],
      metrics: {
        avgROI: '285%',
        timeframe: '3-6 months',
        clientSatisfaction: '96%'
      },
      color: 'blue'
    },
    {
      id: 'performance',
      name: 'Performance Marketing',
      icon: 'TrendingUp',
      description: 'Data-driven campaigns across all digital channels optimized for maximum ROI and scalable growth.',
      features: [
        'Paid Search (Google Ads)',
        'Social Media Advertising',
        'Display & Retargeting',
        'Email Marketing Automation',
        'Conversion Rate Optimization'
      ],
      metrics: {
        avgROI: '320%',
        timeframe: '1-3 months',
        clientSatisfaction: '98%'
      },
      color: 'orange'
    },
    {
      id: 'brand',
      name: 'Brand Development',
      icon: 'Palette',
      description: 'Strategic brand positioning and creative execution that resonates with your target audience.',
      features: [
        'Brand Strategy & Positioning',
        'Visual Identity Design',
        'Content Strategy & Creation',
        'Brand Guidelines Development',
        'Brand Experience Design'
      ],
      metrics: {
        avgROI: '240%',
        timeframe: '2-4 months',
        clientSatisfaction: '94%'
      },
      color: 'purple'
    },
    {
      id: 'technology',
      name: 'Marketing Technology',
      icon: 'Settings',
      description: 'Advanced marketing automation and technology stack optimization for operational excellence.',
      features: [
        'Marketing Automation Setup',
        'CRM Integration & Optimization',
        'Analytics Implementation',
        'Lead Scoring & Nurturing',
        'Technology Stack Audit'
      ],
      metrics: {
        avgROI: '195%',
        timeframe: '2-5 months',
        clientSatisfaction: '92%'
      },
      color: 'green'
    },
    {
      id: 'analytics',
      name: 'Analytics & Optimization',
      icon: 'BarChart3',
      description: 'Comprehensive performance tracking and continuous optimization for sustained growth.',
      features: [
        'Advanced Analytics Setup',
        'Performance Dashboard Creation',
        'A/B Testing & Optimization',
        'Attribution Modeling',
        'Predictive Analytics'
      ],
      metrics: {
        avgROI: '275%',
        timeframe: '1-2 months',
        clientSatisfaction: '97%'
      },
      color: 'indigo'
    }
  ];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: { bg: 'bg-blue-700', text: 'text-blue-700', border: 'border-blue-200', bgLight: 'bg-blue-50' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200', bgLight: 'bg-orange-50' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', bgLight: 'bg-purple-50' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-200', bgLight: 'bg-green-50' },
      indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', bgLight: 'bg-indigo-50' }
    };
    return colorMap[color][type] || '';
  };

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Service Ecosystem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Integrated marketing solutions designed to work together for maximum impact and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-brand group ${
                    activeService === service.id
                      ? `${getColorClasses(service.color, 'bgLight')} ${getColorClasses(service.color, 'border')} border-2`
                      : 'bg-slate-50 hover:bg-slate-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeService === service.id 
                        ? getColorClasses(service.color, 'bg')
                        : 'bg-slate-200 group-hover:bg-slate-300'
                    } transition-brand`}>
                      <Icon 
                        name={service.icon} 
                        size={20} 
                        className={activeService === service.id ? 'text-white' : 'text-slate-600'}
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        activeService === service.id 
                          ? getColorClasses(service.color, 'text')
                          : 'text-slate-900'
                      }`}>
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(activeServiceData.color, 'bg')}`}>
                  <Icon 
                    name={activeServiceData.icon} 
                    size={28} 
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{activeServiceData.name}</h3>
                  <p className="text-slate-600">{activeServiceData.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Services Include:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon 
                        name="CheckCircle" 
                        size={16} 
                        className={getColorClasses(activeServiceData.color, 'text')}
                        strokeWidth={2}
                      />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{activeServiceData.metrics.avgROI}</div>
                  <div className="text-sm text-slate-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{activeServiceData.metrics.timeframe}</div>
                  <div className="text-sm text-slate-600">Time to Results</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{activeServiceData.metrics.clientSatisfaction}</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
              </div>

              {/* CTA */}
              {/* <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  iconName="Calculator"
                  iconPosition="left"
                  className={`${getColorClasses(activeServiceData.color, 'bg')} hover:opacity-90`}
                >
                  Calculate ROI
                </Button>
                <Button
                  variant="outline"
                  iconName="FileText"
                  iconPosition="left"
                  className={`${getColorClasses(activeServiceData.color, 'border')} ${getColorClasses(activeServiceData.color, 'text')} hover:${getColorClasses(activeServiceData.color, 'bgLight')}`}
                >
                  View Case Studies
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMatrix;