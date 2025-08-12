import React from 'react';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const ProjectCard = ({ project, onClick }) => {
  return (
    <article
      className="
        group bg-white rounded-2xl shadow-md hover:shadow-lg border border-slate-100
        transition-all duration-300 cursor-pointer overflow-hidden
        md:hover:scale-[1.02]
      "
      onClick={() => onClick?.(project)}
    >
      {/* Image */}
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <AppImage
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Industry */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full" />
            {project?.industry}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute top-3 right-3">
          <span className="bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[11px] font-medium">
            {project?.duration}
          </span>
        </div>

        {/* Logo */}
        <div className="absolute bottom-3 left-3">
          <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow">
            <AppImage src={project?.logo} alt={`${project?.client} logo`} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-[11px] font-semibold uppercase tracking-wide">
            <Icon name="Tag" size={12} />
            {project?.category}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
          {project?.title}
        </h3>

        <p className="text-slate-600 mb-3 font-medium text-sm">{project?.client}</p>

        <p className="text-slate-600 mb-5 line-clamp-3 leading-relaxed text-sm">
          {project?.overview}
        </p>

        {/* Results */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-0.5">
              {project?.results?.revenue}
            </div>
            <div className="text-[11px] text-slate-600 font-medium">Revenue</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-0.5">
              {project?.results?.roas}
            </div>
            <div className="text-[11px] text-slate-600 font-medium">ROAS</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project?.tags?.slice(0, 2).map((tag, i) => (
            <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-[11px] font-medium">
              {tag}
            </span>
          ))}
          {project?.tags?.length > 2 && (
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-[11px] font-medium">
              +{project.tags.length - 2} more
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-blue-600 group-hover:text-blue-700 transition-colors">
            <span className="text-sm font-semibold">View Case Study</span>
            <Icon name="ArrowRight" size={16} className="md:group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <Icon name="ExternalLink" size={16} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
