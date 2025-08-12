import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MethodologyShowcase = () => {
  const [activePhase, setActivePhase] = useState(0);

  const methodology = [
    { phase: 1, title: 'Discovery & Analysis', duration: '2-3 weeks', icon: 'Search',
      description: 'Comprehensive audit of your current marketing ecosystem and competitive landscape.',
      activities: ['Business objectives alignment','Market research & competitor analysis','Customer persona development','Current performance audit','Technology stack assessment'],
      deliverables: ['Strategic assessment report','Competitive analysis document','Customer journey maps','Performance baseline metrics'],
      color: 'blue'
    },
    { phase: 2, title: 'Strategy Development', duration: '1-2 weeks', icon: 'Target',
      description: 'Custom marketing strategy creation based on your unique business goals and market position.',
      activities: ['Growth strategy formulation','Channel selection & prioritization','Content strategy development','Budget allocation planning','KPI framework establishment'],
      deliverables: ['Comprehensive marketing strategy','Channel roadmap & timeline','Content calendar framework','Budget allocation plan'],
      color: 'orange'
    },
    { phase: 3, title: 'Implementation & Launch', duration: '2-4 weeks', icon: 'Rocket',
      description: 'Systematic execution of marketing campaigns across all selected channels.',
      activities: ['Campaign setup & configuration','Creative asset development','Landing page optimization','Automation workflow creation','Tracking implementation'],
      deliverables: ['Live marketing campaigns','Optimized landing pages','Automation sequences','Tracking dashboard setup'],
      color: 'green'
    },
    { phase: 4, title: 'Optimization & Scale', duration: 'Ongoing', icon: 'TrendingUp',
      description: 'Continuous monitoring, testing, and optimization for sustained growth.',
      activities: ['Performance monitoring','A/B testing execution','Campaign optimization','Scaling successful initiatives','Regular strategy refinement'],
      deliverables: ['Monthly performance reports','Optimization recommendations','Scaling action plans','Strategic updates'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue:   { bg: 'bg-blue-700',   text: 'text-blue-700',   bgLight: 'bg-blue-50',   border: 'border-blue-200' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', bgLight: 'bg-orange-50', border: 'border-orange-200' },
      green:  { bg: 'bg-green-600',  text: 'text-green-600',  bgLight: 'bg-green-50',  border: 'border-green-200' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', bgLight: 'bg-purple-50', border: 'border-purple-200' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const activeMethodology = methodology[activePhase];
  const colors = getColorClasses(activeMethodology.color);

  return (
    <section className="py-20 bg-slate-50 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Icon name="Layers" size={16} className="mr-2" />
            Our Proven Methodology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The MarketForce Pro Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our systematic approach ensures consistent results through strategic planning, precise execution, and continuous optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phase Navigation */}
          <div className="hidden lg:block lg:col-span-1 min-w-0">

            <div className="space-y-4">
              {methodology.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`w-full text-left p-4 rounded-xl transition-brand group ${
                    activePhase === index
                      ? `${getColorClasses(phase.color).bgLight} ${getColorClasses(phase.color).border} border-2`
                      : 'bg-white hover:bg-slate-50 border-2 border-transparent shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        activePhase === index ? getColorClasses(phase.color).bg : 'bg-slate-200 group-hover:bg-slate-300'
                      } transition-brand`}
                    >
                      <Icon
                        name={phase.icon}
                        size={20}
                        className={activePhase === index ? 'text-white' : 'text-slate-600'}
                        strokeWidth={2}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1 min-w-0">
                        <h3
                          className={`font-semibold truncate ${
                            activePhase === index ? getColorClasses(phase.color).text : 'text-slate-900'
                          }`}
                          title={`Phase ${phase.phase}`}
                        >
                          Phase {phase.phase}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium shrink-0">{phase.duration}</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate" title={phase.title}>
                        {phase.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          <div className="lg:col-span-2 min-w-0">
            <div className="bg-white rounded-2xl shadow-brand-lg p-6 sm:p-8">
              {/* Header row */}
              <div className="flex items-center gap-4 mb-6 min-w-0">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center ${colors.bg} shrink-0`}>
                  <Icon name={activeMethodology.icon} size={28} className="text-white" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 min-w-0">
                      <span className="whitespace-normal break-words">
                        Phase {activeMethodology.phase}: {activeMethodology.title}
                      </span>
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bgLight} ${colors.text} shrink-0`}>
                      {activeMethodology.duration}
                    </span>
                  </div>
                  <p className="text-slate-600">{activeMethodology.description}</p>
                </div>
              </div>

              {/* Two-column lists */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <Icon name="CheckSquare" size={20} className={`${colors.text} mr-2`} />
                    Key Activities
                  </h4>
                  <ul className="space-y-3">
                    {activeMethodology.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="ArrowRight" size={16} className={`${colors.text} mt-0.5 shrink-0`} strokeWidth={2} />
                        <span className="text-slate-700 break-words">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <Icon name="Package" size={20} className={`${colors.text} mr-2`} />
                    Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {activeMethodology.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="FileText" size={16} className={`${colors.text} mt-0.5 shrink-0`} strokeWidth={2} />
                        <span className="text-slate-700 break-words">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Progress + controls */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Process Progress</span>
                  <span className="text-sm text-slate-500">{activePhase + 1} of {methodology.length}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-brand ${colors.bg}`}
                    style={{ width: `${((activePhase + 1) / methodology.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Button
                  variant="outline"
                  disabled={activePhase === 0}
                  onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                  iconName="ChevronLeft"
                  iconPosition="left"
                  className={`${colors.border} ${colors.text} hover:${colors.bgLight} order-3 sm:order-1 w-full sm:w-auto`}
                >
                  Previous Phase
                </Button>

                <div className="flex justify-center gap-2 order-2">
                  {methodology.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhase(i)}
                      className={`w-3 h-3 rounded-full transition-brand ${i === activePhase ? colors.bg : 'bg-slate-300'}`}
                      aria-label={`Go to phase ${i + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  disabled={activePhase === methodology.length - 1}
                  onClick={() => setActivePhase(Math.min(methodology.length - 1, activePhase + 1))}
                  iconName="ChevronRight"
                  iconPosition="right"
                  className={`${colors.border} ${colors.text} hover:${colors.bgLight} order-1 sm:order-3 w-full sm:w-auto`}
                >
                  Next Phase
                </Button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MethodologyShowcase;
