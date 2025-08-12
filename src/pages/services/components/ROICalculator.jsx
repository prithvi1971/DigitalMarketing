import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    currentMarketingSpend: '',
    industry: '',
    businessType: '',
    primaryGoal: ''
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industryOptions = [
    { value: 'saas', label: 'SaaS & Technology' },
    { value: 'ecommerce', label: 'E-commerce & Retail' },
    { value: 'professional', label: 'Professional Services' },
    { value: 'healthcare', label: 'Healthcare & Medical' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'other', label: 'Other' }
  ];

  const businessTypeOptions = [
    { value: 'b2b', label: 'B2B (Business to Business)' },
    { value: 'b2c', label: 'B2C (Business to Consumer)' },
    { value: 'both', label: 'Both B2B and B2C' }
  ];

  const goalOptions = [
    { value: 'leads', label: 'Generate More Leads' },
    { value: 'sales', label: 'Increase Sales Revenue' },
    { value: 'brand', label: 'Build Brand Awareness' },
    { value: 'retention', label: 'Improve Customer Retention' },
    { value: 'efficiency', label: 'Optimize Marketing Efficiency' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const monthlyRevenue = parseFloat(formData.monthlyRevenue) || 0;
      const currentSpend = parseFloat(formData.currentMarketingSpend) || 0;
      
      // Industry multipliers
      const industryMultipliers = {
        saas: 3.2,
        ecommerce: 2.8,
        professional: 3.5,
        healthcare: 2.9,
        finance: 3.1,
        manufacturing: 2.6,
        other: 2.8
      };

      // Goal multipliers
      const goalMultipliers = {
        leads: 1.2,
        sales: 1.4,
        brand: 1.1,
        retention: 1.3,
        efficiency: 1.25
      };

      const baseMultiplier = industryMultipliers[formData.industry] || 2.8;
      const goalMultiplier = goalMultipliers[formData.primaryGoal] || 1.2;
      
      const projectedIncrease = monthlyRevenue * (baseMultiplier * goalMultiplier * 0.1);
      const annualIncrease = projectedIncrease * 12;
      const investmentROI = currentSpend > 0 ? ((projectedIncrease - currentSpend) / currentSpend) * 100 : 250;
      
      setResults({
        monthlyIncrease: projectedIncrease,
        annualIncrease: annualIncrease,
        roi: Math.max(investmentROI, 150),
        paybackPeriod: Math.ceil((currentSpend * 1.5) / projectedIncrease) || 3,
        confidenceLevel: 85 + Math.floor(Math.random() * 10)
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  const isFormValid = formData.monthlyRevenue && formData.currentMarketingSpend && 
                     formData.industry && formData.businessType && formData.primaryGoal;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Icon name="Calculator" size={16} className="mr-2" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Calculate Your Marketing ROI Potential
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get a personalized projection of how our strategic marketing approach could impact your business growth and revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-brand-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Business Information</h3>
            
            <div className="space-y-6">
              <Input
                label="Monthly Revenue"
                type="number"
                placeholder="50000"
                description="Your current monthly revenue in USD"
                value={formData.monthlyRevenue}
                onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                className="mb-4"
              />

              <Input
                label="Current Marketing Spend"
                type="number"
                placeholder="5000"
                description="Monthly marketing budget in USD"
                value={formData.currentMarketingSpend}
                onChange={(e) => handleInputChange('currentMarketingSpend', e.target.value)}
                className="mb-4"
              />

              <Select
                label="Industry"
                placeholder="Select your industry"
                options={industryOptions}
                value={formData.industry}
                onChange={(value) => handleInputChange('industry', value)}
                className="mb-4"
              />

              <Select
                label="Business Type"
                placeholder="Select business model"
                options={businessTypeOptions}
                value={formData.businessType}
                onChange={(value) => handleInputChange('businessType', value)}
                className="mb-4"
              />

              <Select
                label="Primary Goal"
                placeholder="Select your main objective"
                options={goalOptions}
                value={formData.primaryGoal}
                onChange={(value) => handleInputChange('primaryGoal', value)}
                className="mb-6"
              />

              <Button
                variant="default"
                size="lg"
                fullWidth
                loading={isCalculating}
                disabled={!isFormValid}
                onClick={calculateROI}
                iconName="TrendingUp"
                iconPosition="left"
                className="bg-blue-700 hover:bg-blue-800"
              >
                {isCalculating ? 'Calculating...' : 'Calculate ROI Potential'}
              </Button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-2xl shadow-brand-lg p-8">
            {!results ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="BarChart3" size={40} className="text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Your ROI Projection
                </h3>
                <p className="text-slate-600">
                  Fill out the form to see your personalized marketing ROI potential and growth projections.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Your ROI Projection</h3>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Icon name="CheckCircle" size={20} />
                    <span className="text-sm font-medium">{results.confidenceLevel}% Confidence</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <Icon name="TrendingUp" size={32} className="text-blue-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-900 mb-2">
                      ${results.monthlyIncrease.toLocaleString()}
                    </div>
                    <div className="text-sm text-blue-700 font-medium">Monthly Revenue Increase</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <Icon name="DollarSign" size={32} className="text-green-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-900 mb-2">
                      ${results.annualIncrease.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-700 font-medium">Annual Revenue Increase</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                    <Icon name="Percent" size={32} className="text-orange-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-orange-900 mb-2">
                      {Math.round(results.roi)}%
                    </div>
                    <div className="text-sm text-orange-700 font-medium">Marketing ROI</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <Icon name="Clock" size={32} className="text-purple-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-900 mb-2">
                      {results.paybackPeriod} mo
                    </div>
                    <div className="text-sm text-purple-700 font-medium">Payback Period</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">What This Means:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                      <span>Projected to increase monthly revenue by ${results.monthlyIncrease.toLocaleString()}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                      <span>Expected ROI of {Math.round(results.roi)}% on marketing investment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                      <span>Break-even point reached within {results.paybackPeriod} months</span>
                    </li>
                  </ul>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Schedule Strategy Discussion
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;