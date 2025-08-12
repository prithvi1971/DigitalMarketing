import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const IndustryFocus = () => {
  const [activeIndustry, setActiveIndustry] = useState('saas');

  const industries = [
    {
      id: 'saas',
      name: 'SaaS & Technology',
      icon: 'Code',
      description: 'Specialized growth strategies for software companies and tech startups.',
      image: 'https://ewzduhvhjkj.exactdn.com/wp-content/uploads/2022/04/10103232/GCC-image-for-team-working-in-office.jpg?strip=all&lossy=1&ssl=1',
      challenges: [
        'Customer acquisition cost optimization',
        'Product-market fit validation',
        'Scaling user onboarding',
        'Reducing churn rates'
      ],
      solutions: [
        'Freemium conversion optimization',
        'Product-led growth strategies',
        'Technical content marketing',
        'Developer community building'
      ],
      caseStudy: {
        client: 'CloudTech Solutions',
        result: '340% increase in qualified leads',
        metric: 'Reduced CAC by 45%'
      },
      stats: {
        avgGrowth: '285%',
        clientCount: '45+',
        avgROI: '320%'
      }
    },
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: 'ShoppingCart',
      description: 'Revenue-focused marketing for online retailers and e-commerce brands.',
      image: 'https://www-cdn.bigcommerce.com/assets/_1200x630_crop_center-center_82_none/article-thumbnail-in-store-vs-online-bigcommerce.jpg?mtime=1670959852',
      challenges: [
        'Shopping cart abandonment',
        'Seasonal revenue fluctuations',
        'Customer lifetime value optimization',
        'Multi-channel attribution'
      ],
      solutions: [
        'Advanced retargeting campaigns',
        'Email automation sequences',
        'Social commerce optimization',
        'Conversion rate optimization'
      ],
      caseStudy: {
        client: 'Fashion Forward Co.',
        result: '180% increase in online sales',
        metric: 'Improved ROAS by 65%'
      },
      stats: {
        avgGrowth: '220%',
        clientCount: '38+',
        avgROI: '280%'
      }
    },
    {
      id: 'professional',
      name: 'Professional Services',
      icon: 'Briefcase',
      description: 'Trust-building marketing for consultants, agencies, and service providers.',
      image: 'https://blogs.sw.siemens.com/wp-content/uploads/sites/41/2023/08/Scalability.jpg',
      challenges: [
        'Establishing thought leadership',
        'Long sales cycles',
        'Service differentiation',
        'Client referral systems'
      ],
      solutions: [
        'Content authority building',
        'LinkedIn lead generation',
        'Webinar marketing programs',
        'Case study development'
      ],
      caseStudy: {
        client: 'Strategic Consulting Group',
        result: '250% increase in qualified inquiries',
        metric: 'Shortened sales cycle by 30%'
      },
      stats: {
        avgGrowth: '195%',
        clientCount: '32+',
        avgROI: '240%'
      }
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      icon: 'Heart',
      description: 'Compliant marketing strategies for healthcare providers and medical practices.',
      image: 'https://www.news-medical.net/images/Article_Images/ImageForArticle_22572_16533781526443229.jpg',
      challenges: [
        'HIPAA compliance requirements',
        'Patient trust building',
        'Local market competition',
        'Reputation management'
      ],
      solutions: [
        'Local SEO optimization',
        'Patient education content',
        'Review management systems',
        'Telehealth promotion'
      ],
      caseStudy: {
        client: 'Metro Health Partners',
        result: '160% increase in patient appointments',
        metric: 'Improved online reputation by 85%'
      },
      stats: {
        avgGrowth: '175%',
        clientCount: '28+',
        avgROI: '210%'
      }
    }
  ];

  const activeIndustryData = industries.find(industry => industry.id === activeIndustry);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Industry-Specific Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deep industry knowledge combined with proven marketing strategies tailored to your sector's unique challenges and opportunities.
          </p>
        </div>

        {/* Industry Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-brand ${
                activeIndustry === industry.id
                  ? 'bg-blue-700 text-white shadow-brand-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Icon 
                name={industry.icon} 
                size={20} 
                strokeWidth={2}
              />
              <span className="font-medium">{industry.name}</span>
            </button>
          ))}
        </div>

        {/* Industry Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
                <Icon 
                  name={activeIndustryData.icon} 
                  size={28} 
                  className="text-white"
                  strokeWidth={2}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{activeIndustryData.name}</h3>
                <p className="text-slate-600">{activeIndustryData.description}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">{activeIndustryData.stats.avgGrowth}</div>
                <div className="text-sm text-slate-600">Avg Growth</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">{activeIndustryData.stats.clientCount}</div>
                <div className="text-sm text-slate-600">Clients Served</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">{activeIndustryData.stats.avgROI}</div>
                <div className="text-sm text-slate-600">Average ROI</div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Icon name="AlertCircle" size={20} className="text-orange-600 mr-2" />
                  Common Challenges
                </h4>
                <ul className="space-y-2">
                  {activeIndustryData.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Minus" size={16} className="text-slate-400 mt-1" />
                      <span className="text-slate-700 text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mr-2" />
                  Our Solutions
                </h4>
                <ul className="space-y-2">
                  {activeIndustryData.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Plus" size={16} className="text-green-600 mt-1" />
                      <span className="text-slate-700 text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study Preview */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Success Story</h4>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">{activeIndustryData.caseStudy.client}</div>
                  <div className="text-blue-700 font-semibold">{activeIndustryData.caseStudy.result}</div>
                  <div className="text-sm text-slate-600">{activeIndustryData.caseStudy.metric}</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Let's Talk
                </Button>
              </div>
            </div>

            {/* <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-blue-700 hover:bg-blue-800"
            >
              Discuss Your Industry Needs
            </Button> */}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src={activeIndustryData.image}
                alt={`${activeIndustryData.name} marketing solutions`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-brand-lg">
              <div className="flex items-center space-x-3">
                <Icon name="TrendingUp" size={24} className="text-green-600" />
                <div>
                  <div className="text-sm font-medium text-slate-900">Industry Growth</div>
                  <div className="text-lg font-bold text-green-600">{activeIndustryData.stats.avgGrowth}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFocus;