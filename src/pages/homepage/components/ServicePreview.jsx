import React, { useState } from 'react';

const ServicePreview = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Strategic Growth Planning",
      description: "Comprehensive digital transformation roadmaps with measurable outcomes",
      metrics: {
        improvement: "340%",
        metric: "Revenue Growth",
        timeframe: "12 months"
      },
      caseStudy: "TechStart Inc scaled from $2M to $8.8M ARR through our strategic growth framework and data-driven execution.",
      features: ["Market Intelligence", "Growth Strategy", "KPI Architecture", "Competitive Analysis"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 1,
      title: "Performance Marketing",
      description: "Data-driven campaigns engineered for maximum ROI and scalable growth",
      metrics: {
        improvement: "437%",
        metric: "Average ROAS",
        timeframe: "6 months"
      },
      caseStudy: "E-commerce leader achieved 4.37x return on ad spend through our proprietary optimization algorithms.",
      features: ["PPC Optimization", "Social Advertising", "Conversion Engineering", "Attribution Science"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Brand Architecture",
      description: "Strategic brand positioning that captures minds and drives market differentiation",
      metrics: {
        improvement: "256%",
        metric: "Brand Recognition",
        timeframe: "9 months"
      },
      caseStudy: "B2B SaaS company transformed market position, resulting in 256% increase in brand awareness and premium pricing.",
      features: ["Brand Strategy", "Visual Identity", "Content Systems", "Brand Experience"],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "Growth Analytics",
      description: "Advanced analytics and AI-powered optimization for continuous performance improvement",
      metrics: {
        improvement: "189%",
        metric: "Conversion Rate",
        timeframe: "4 months"
      },
      caseStudy: "Financial services client improved conversion rates by 189% through our predictive analytics platform.",
      features: ["Predictive Analytics", "A/B Testing", "User Intelligence", "Performance AI"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full px-6 py-3 mb-8">
            <span className="text-slate-700 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Strategic Services That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Drive Results</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our comprehensive approach transforms businesses through strategic marketing excellence and measurable outcomes
          </p>
        </div>

        {/* Enhanced Interactive Service Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Service Navigation */}
          <div className="space-y-6">
            {services?.map((service, index) => (
              <div
                key={service?.id}
                className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 group ${
                  activeService === index
                    ? 'bg-white shadow-2xl border-2 border-blue-100 scale-105'
                    : 'bg-slate-50/50 hover:bg-white hover:shadow-xl hover:scale-102'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start gap-6">
                  <div className={`relative p-4 rounded-2xl transition-all duration-500 ${
                    activeService === index
                      ? `bg-gradient-to-br ${service?.gradient} text-white shadow-lg` 
                      : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}>
                    <div className="w-7 h-7 rounded-lg bg-current opacity-20"></div>
                    {activeService === index && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {service?.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service?.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service?.features?.map((feature, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                            activeService === index
                              ? 'bg-blue-100 text-blue-700' :'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Active Service Details */}
          <div className="sticky top-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white shadow-2xl">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${services?.[activeService]?.gradient} rounded-2xl shadow-lg`}>
                    <div className="w-8 h-8 rounded-lg bg-white opacity-90"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {services?.[activeService]?.title}
                    </h3>
                    <p className="text-slate-300">Strategic Excellence</p>
                  </div>
                </div>
                
                {/* Enhanced Metrics Display */}
                <div className={`bg-gradient-to-br ${services?.[activeService]?.gradient} rounded-3xl p-8 mb-8 shadow-xl`}>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-3">
                      {services?.[activeService]?.metrics?.improvement}
                    </div>
                    <div className="text-white/90 font-semibold text-lg mb-2">
                      {services?.[activeService]?.metrics?.metric}
                    </div>
                    <div className="text-white/70">
                      Achieved in {services?.[activeService]?.metrics?.timeframe}
                    </div>
                  </div>
                </div>

                {/* Enhanced Case Study */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <div className="w-6 h-6 rounded bg-orange-400 opacity-80"></div>
                    </div>
                    <h4 className="text-xl font-bold text-white">Success Story</h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {services?.[activeService]?.caseStudy}
                  </p>
                </div>
              </div>

              {/* Enhanced Action Button */}
              <div className="flex justify-center">
                <button className={`flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${services?.[activeService]?.gradient} hover:shadow-2xl text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105`}>
                  <span>Explore Strategy</span>
                  <div className="w-5 h-5 border-2 border-white border-r-0 border-b-0 rotate-45"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;