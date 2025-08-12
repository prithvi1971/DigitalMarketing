import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  const stats = [
    { value: "300%", label: "Average ROI Increase", icon: "TrendingUp" },
    { value: "300+", label: "Successful Campaigns", icon: "Target" },
    { value: "10+", label: "Industries Served", icon: "Building" },
    { value: "98%", label: "Client Retention Rate", icon: "Heart" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} className="mr-2" />
            Strategic Marketing Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="text-gradient block mt-2">Data-Driven Marketing</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We don't just run campaigns—we architect growth. Our comprehensive suite of marketing services combines strategic thinking with flawless execution to deliver measurable results that scale your business.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4"
            >
              Schedule Strategy Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4"
            >
              Watch Our Process
            </Button>
          </div> */}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-brand mb-4 group-hover:shadow-brand-lg transition-brand">
                <Icon 
                  name={stat.icon} 
                  size={28} 
                  className="text-blue-700"
                  strokeWidth={2}
                />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;