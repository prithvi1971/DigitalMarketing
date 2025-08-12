import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "Shield",
      title: "Proven Excellence",
      description: "Successful campaigns delivering measurable business transformation",
      stats: "50+ Success Stories",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: "Users",
      title: "World-Class Expertise", 
      description: "Google Premier Partners and HubSpot Solutions Experts with 10+ years of strategic marketing leadership",
      stats: "Premier Certifications",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: "TrendingUp",
      title: "Data-Driven Intelligence",
      description: "Advanced analytics, AI-powered optimization, and proprietary frameworks for maximum performance",
      stats: "98% Client Retention",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: "Zap",
      title: "Rapid Implementation",
      description: "90-day performance guarantee with immediate impact strategies and accelerated growth execution",
      stats: "90-Day Results",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: "Target",
      title: "Strategic Architecture",
      description: "Comprehensive growth frameworks tailored to your unique business objectives and market dynamics",
      stats: "$1M+ Generated",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon: "Award",
      title: "Industry Leadership",
      description: "Top 1% agency performance with industry awards and recognition from leading marketing platforms",
      stats: "Industry Awards",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 mb-8">
            <Icon name="Star" size={20} className="text-purple-600" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            The MarketForce
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Advantage</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We don't just deliver campaigns—we architect sustainable growth. Here's what sets us apart 
            from traditional marketing agencies and drives exceptional results.
          </p>
        </div>

        {/* Enhanced Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons?.map((reason, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason?.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${reason?.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-500`}>
                    <Icon name={reason?.icon} size={36} className="text-white" strokeWidth={2} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {reason?.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                    {reason?.description}
                  </p>
                </div>
                
                {/* Enhanced Stats Badge */}
                <div className="pt-6 border-t border-slate-100">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${reason?.gradient} rounded-full text-white font-semibold text-sm shadow-lg`}>
                    <Icon name="CheckCircle" size={16} />
                    <span>{reason?.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default WhyChooseUs;