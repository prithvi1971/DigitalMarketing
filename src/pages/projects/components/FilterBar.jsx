import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ categories, selectedCategory, onCategoryChange, projectCount }) => {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Icon name="Filter" size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">Filter Projects</h3>
              <p className="text-xs md:text-sm text-slate-600">
                Showing {projectCount} project{projectCount !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Chips — wrap, never scroll */}
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={[
                      "rounded-full border px-4 py-2 text-[13px] md:text-sm font-semibold transition-colors",
                      active
                        ? "bg-blue-600 text-white border-blue-600 shadow"
                        : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
