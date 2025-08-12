import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4 overscroll-contain"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl md:rounded-3xl w-full
                   max-w-3xl md:max-w-[min(92vw,960px)]
                   max-h-[86svh] overflow-hidden shadow-2xl
                   flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <div className="h-[clamp(140px,24vh,220px)] overflow-hidden">
            <AppImage
              src={project?.image}
              alt={project?.title}
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute z-20 top-4 right-4 md:top-5 md:right-5 w-10 h-10 md:w-11 md:h-11
                       bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full
                       flex items-center justify-center transition-colors pointer-events-auto"
            aria-label="Close"
          >
            <Icon name="X" size={22} className="text-white" />
          </button>

          {/* Title Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <div className="flex items-end gap-3 md:gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow">
                <AppImage src={project?.logo} alt={`${project?.client} logo`} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                    <Icon name="Tag" size={12} />
                    {project?.category}
                  </span>
                </div>
                <h2 className="font-bold text-white leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 1.9vw, 1.6rem)' }}>
                  {project?.title}
                </h2>
                <div className="flex flex-wrap gap-3 text-white/80 text-xs md:text-sm mt-1">
                  <span className="flex items-center gap-2"><Icon name="Building" size={14} />{project?.industry}</span>
                  <span className="flex items-center gap-2"><Icon name="Clock" size={14} />{project?.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-5 lg:p-6 space-y-5 md:space-y-7 text-[0.95rem] md:text-base">
            {/* Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {[
                { v: project?.results?.revenue, l: 'Revenue Growth', grad: 'from-blue-50 to-purple-50', tgrad: 'from-blue-600 to-purple-600' },
                { v: project?.results?.roas,    l: 'Return on Ad Spend', grad: 'from-orange-50 to-red-50', tgrad: 'from-orange-600 to-red-600' },
                { v: project?.results?.conversion, l: 'Conversion Rate', grad: 'from-emerald-50 to-teal-50', tgrad: 'from-emerald-600 to-teal-600' },
                { v: project?.results?.traffic, l: 'Traffic Growth', grad: 'from-purple-50 to-pink-50', tgrad: 'from-purple-600 to-pink-600' }
              ].map((k) => (
                <div key={k.l} className={`text-center p-3 md:p-4 bg-gradient-to-br ${k.grad} rounded-lg md:rounded-xl`}>
                  <div className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${k.tgrad} mb-1`}
                       style={{ fontSize: 'clamp(1.1rem, 1.9vw, 1.5rem)' }}>
                    {k.v}
                  </div>
                  <div className="text-[11px] md:text-sm text-slate-600 font-medium">{k.l}</div>
                </div>
              ))}
            </div>

            {/* Overview */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                <Icon name="FileText" size={20} className="text-blue-600" />
                Project Overview
              </h3>
              <p className="text-slate-700 leading-relaxed">{project?.overview}</p>
            </section>

            {/* Challenge */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                <Icon name="AlertTriangle" size={20} className="text-orange-600" />
                The Challenge
              </h3>
              <p className="text-slate-700 leading-relaxed">{project?.challenge}</p>
            </section>

            {/* Solution */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                <Icon name="Lightbulb" size={20} className="text-emerald-600" />
                Our Solution
              </h3>
              <p className="text-slate-700 leading-relaxed">{project?.solution}</p>
            </section>

            {/* Outcomes */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                <Icon name="TrendingUp" size={20} className="text-purple-600" />
                Key Outcomes
              </h3>
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {project?.outcomes?.map((o, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 md:p-3.5 bg-slate-50 rounded-lg">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-slate-700">{o}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            {project?.testimonial && (
              <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-5 md:p-6 text-white">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-5">
                  <div className="p-2.5 bg-orange-500/20 rounded-xl">
                    <Icon name="Quote" size={24} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1.5">Client Testimonial</h3>
                    <p className="text-slate-300 text-xs md:text-sm">What our client had to say</p>
                  </div>
                </div>
                <blockquote className="text-base md:text-lg leading-relaxed mb-4 md:mb-5 italic">
                  "{project.testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">{project.testimonial.author}</div>
                    <div className="text-slate-400 text-xs md:text-sm">{project.testimonial.position}</div>
                  </div>
                </div>
              </section>
            )}

            {/* Tags */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                <Icon name="Hash" size={20} className="text-blue-600" />
                Project Tags
              </h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {project?.tags?.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs md:text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
