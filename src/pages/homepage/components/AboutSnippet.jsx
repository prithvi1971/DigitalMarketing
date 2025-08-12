import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AboutSnippet = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full px-6 py-3 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 font-semibold text-sm uppercase tracking-wide">Strategic Excellence</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                We Don't Just Market,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> We Innovate</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Transform your business trajectory with our data-driven approach that combines strategic thinking, 
                creative excellence, and measurable results. We're not just another agency—we're your growth architects.
              </p>
            </div>

            {/* Enhanced Features */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl">
                    <Icon name="Target" size={28} className="text-blue-600" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Strategic Intelligence
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every campaign begins with deep market intelligence, competitor analysis, and strategic positioning 
                    that gives you the unfair advantage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl">
                    <Icon name="TrendingUp" size={28} className="text-orange-600" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Performance-First Results
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Continuous optimization, 
                    advanced analytics, and relentless focus on what moves the needle.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl">
                    <Icon name="Users" size={28} className="text-emerald-600" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    World-Class Team
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Google Premier Partners, HubSpot Solutions Experts, and certified professionals 
                    with proven track records across various industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Success Stories</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">$1M+</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Revenue Impact</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Side */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">

                <Image
                  src="https://blogs.sw.siemens.com/wp-content/uploads/sites/41/2023/08/Scalability.jpg"
                  alt="MarketForce Pro strategic team collaboration"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-xl -z-10"></div>
            <div className="absolute bottom-20 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-red-200/40 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;