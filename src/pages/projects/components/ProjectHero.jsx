import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectHero = () => {
  return (
    <section className="pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Icon name="FolderOpen" size={20} className="text-orange-400" />
            <span className="font-semibold text-sm uppercase tracking-wide">Client Success Stories</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Strategic Marketing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
              {" "}Case Studies
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Explore our portfolio of transformative marketing campaigns and strategic initiatives. 
            See how we've helped industry leaders achieve measurable growth, overcome challenges, 
            and dominate their markets.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">50+</div>
              <div className="text-slate-400 font-medium">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-3">437%</div>
              <div className="text-slate-400 font-medium">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-3">$1M+</div>
              <div className="text-slate-400 font-medium">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">98%</div>
              <div className="text-slate-400 font-medium">Client Retention</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <Icon name="Award" size={24} className="text-blue-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white text-sm">Industry Recognition</div>
                <div className="text-xs text-slate-400">Award-Winning Campaigns</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-orange-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white text-sm">Proven Results</div>
                <div className="text-xs text-slate-400">Measurable Growth</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                <Icon name="Users" size={24} className="text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white text-sm">Client Success</div>
                <div className="text-xs text-slate-400">Long-term Partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default ProjectHero;