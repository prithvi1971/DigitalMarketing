import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import FilterBar from './components/FilterBar';
import ProjectHero from './components/ProjectHero';
import Icon from '../../components/AppIcon';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Mock project data - in real app, this would come from API
  const mockProjects = [
    {
      id: 1,
      title: "IMEC – Scaling Global Event Impact with Multi-Channel Marketing",
      client: "Impact Media & Events Corporation",
      industry: "Events & Media",
      category: "Performance Marketing",
      duration: "10 months",
      image: "https://imec.biz/wp-content/uploads/2025/06/IMGL1201.jpg",
      logo: "https://imec.biz/wp-content/uploads/2024/06/IMEC-Logo-1.png",
      results: {
        revenue: "+278%",
        conversion: "+210%",
        traffic: "+278%",
        roas: "9.1x"
      },
      overview:
        "Helped IMEC expand its reach and sponsor engagement for high-level events across Canada, the US, and India through targeted digital campaigns and content strategy.",
      challenge:
        "IMEC lacked a strong digital strategy to attract sponsors and attendees online, limiting their event growth potential and long-term brand visibility.",
      solution:
        "We developed and executed a multi-channel marketing strategy including SEO, paid ads, lead funnels, and content marketing — focused on scaling event registrations and increasing sponsor conversion.",
      outcomes: [
        "Website traffic increased by 278% through SEO and paid media",
        "ROAS across digital channels reached 9.1×",
        "Sponsor inquiries increased by 182% with tailored landing pages",
        "High-intent registrations grew by 210% from targeted outreach"
      ],
      testimonial: {
        text: "MarketForce Pro brought precision and performance to our event marketing. Their data-driven campaigns helped us scale faster and attract the right audience.",
        author: "Vipul Jani",
        position: "Founder & Director, IMEC"
      },
      tags: [
        "Event Marketing",
        "Paid Media",
        "B2B Campaigns",
        "Email Strategy",
        "LinkedIn Ads"
      ]
    },

    {
      id: 2,
      title: "The Cranberry Movement – Digital Awareness Campaign",
      client: "The Cranberry Movement",
      industry: "Health & Not-for-Profit",
      category: "Brand Development",
      duration: "12 months",
      image: "https://static.wixstatic.com/media/187be5_b3ca2f44b992415a958f2d5da407fc3e~mv2.png/v1/fill/w_979,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%201.png",
      logo: "https://static.wixstatic.com/media/187be5_b3ca2f44b992415a958f2d5da407fc3e~mv2.png/v1/fill/w_979,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%201.png",
      results: {
        revenue: "+25% Subs",
        conversion: "+140%",
        traffic: "+220%",
        roas: "7.5x"
      },
      overview: "Helped The Cranberry Movement amplify its digital presence and public engagement through SEO-driven content strategy, social campaigns, and influencer partnerships.",
      challenge: "Despite strong offline engagement, The Cranberry Movement had limited visibility online. SEO performance, content reach, and email list growth were stagnant.",
      solution: "We launched a multi-channel digital strategy—focused on search-optimized content, targeted social campaigns, and health-focused lead magnets—to increase traffic and awareness.",
      outcomes: [
        "Organic traffic increased by 220% through optimized blog content",
        "Social engagement improved by 140% via campaign-specific outreach",
        "Email subscriber base grew by 25% with gated educational content",
        "Achieved 7.5× engagement across social and campaign touchpoints"
      ],
      testimonial: {
        text: "MarketForce Pro helped us bring the story of cranberries—and their health benefits—to a wider audience. Their content and outreach strategies significantly lifted our visibility and impact.",
        author: "J’aime MH",
        position: "Founder, The Cranberry Movement"
      },
      tags: ["Content Marketing", "SEO Strategy", "Social Campaigns", "Email Growth", "Influencer Outreach"]
    },

    {
      id: 3,
      title: "Hotel Kleiner Riesen – Boutique Stays, Digital Visibility Boost",
      client: "Hotel Kleiner Riesen (Koblenz, Germany)",
      industry: "Hospitality & Travel",
      category: "Content & Local SEO Strategy",
      duration: "7 months",
      image: "https://www.hotel-kleinerriesen.de/images/BANNER/kaiserin-augusta-am-rhein-bittet-zu-bett.jpg",
      logo: "https://www.hotel-kleinerriesen.de/images/kleiner-riesen-hotel.png",
      results: {
        revenue: "+34% ",
        conversion: "+210%",
        traffic: "+195%",
        visibility: "+260%",
        bookingInquiries: "+150%",
        roas: "6.2x"
      },
      overview:
        "MarketForce Pro partnered with Hotel Kleiner Riesen to invigorate its online presence through content marketing, local SEO, and targeted ads—driving visibility and direct booking growth.",
      challenge:
        "A charming, family-run boutique hotel on the Rhine, Kleiner Riesen suffered from low organic visibility, minimal direct bookings, and an over-reliance on OTAs for inbound traffic.",
      solution:
        "We launched a localized SEO and content strategy, built Google Business optimizations, curated Rhine-themed blog guides, and executed geo-targeted paid campaigns for direct guest engagement.",
      outcomes: [
        "Organic search traffic increased by 195%",
        "Local visibility in Koblenz search results improved by 260%",
        "Direct booking inquiries rose by 150%",
        "Achieved 6.2× ROI from geo‑targeted ad spends"
      ],
      testimonial: {
        text: "Thanks to MarketForce Pro, our hotel now ranks top in Koblenz searches and guests are bookings more than ever through partnered channels like expedia. Their hyperlocal content and paid strategy made all the difference.",
        author: "Julia Müller",
        position: "General Manager, Hotel Kleiner Riesen"
      },
      tags: ["Local SEO", "Content Marketing", "Paid Media", "Boutique Hospitality", "Direct Booking"]
    },

    {
      id: 4,
      title: "HealthTech Solutions - Growth Analytics",
      client: "HealthTech Solutions",
      industry: "Healthcare Technology",
      category: "Analytics & Optimization", 
      duration: "6 months",
      image: "https://imec.biz/wp-content/uploads/2025/06/IMGL1201.jpg",
      logo: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=100&h=100&fit=crop",
      results: {
        revenue: "+189%",
        conversion: "+234%",
        traffic: "+167%",
        roas: "9.2x"
      },
      overview: "Advanced analytics implementation and growth optimization for a healthcare technology platform serving medical professionals.",
      challenge: "HealthTech Solutions had complex user journeys and multiple stakeholder types, making it difficult to optimize campaigns and measure true impact.",
      solution: "We built custom analytics infrastructure, implemented multi-touch attribution, created predictive models for user behavior, and optimized the entire conversion funnel.",
      outcomes: [
        "User engagement increased by 189%",
        "Conversion rate optimization improved by 234%",
        "Customer acquisition cost reduced by 45%",
        "Predictive analytics accuracy reached 87%"
      ],
      testimonial: {
        text: "Their analytics expertise transformed our data from overwhelming to actionable. We finally understand our customers\' true journey.",
        author: "Dr. Michael Thompson",
        position: "CTO, HealthTech Solutions"
      },
      tags: ["Predictive Analytics", "User Journey Optimization", "A/B Testing", "Performance Modeling"]
    },
    {
      id: 5,
      title: "RetailMax - Omnichannel Strategy Lead Retention",
      client: "RetailMax",
      industry: "Retail",
      category: "Digital Strategy",
      duration: "14 months", 
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=100&h=100&fit=crop",
      results: {
        revenue: "+312%",
        conversion: "+178%",
        traffic: "+298%",
        roas: "7.9x"
      },
      overview: "Comprehensive omnichannel strategy implementation for a traditional retailer transitioning to digital-first operations.",
      challenge: "RetailMax was losing market share to digital competitors and needed to integrate their online and offline experiences while maintaining their brand heritage.",
      solution: "We created an integrated omnichannel strategy, unified customer data platforms, implemented personalization engines, and optimized the entire customer experience.",
      outcomes: [
        "Online revenue grew by 312%",
        "Customer lifetime value increased by 178%",
        "Store-to-online conversion improved by 89%",
        "Brand loyalty scores increased by 156%"
      ],
      testimonial: {
        text: "MarketForce Pro helped us bridge the gap between our physical and digital presence. The transformation exceeded all expectations.",
        author: "Amanda Foster",
        position: "VP Marketing, RetailMax"
      },
      tags: ["Omnichannel Strategy", "Customer Experience", "Personalization", "Digital Transformation"]
    },
    {
      id: 6,
      title: "ManufacturePro - B2B Lead Generation",
      client: "ManufacturePro",
      industry: "Manufacturing",
      category: "Lead Generation",
      duration: "9 months",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", 
      logo: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=100&h=100&fit=crop",
      results: {
        revenue: "+267%",
        conversion: "+145%",
        traffic: "+234%",
        roas: "11.3x"
      },
      overview: "B2B lead generation and sales enablement for a manufacturing company targeting enterprise clients with complex sales cycles.",
      challenge: "ManufacturePro struggled with long sales cycles, low-quality leads, and difficulty demonstrating ROI from their marketing investments.",
      solution: "We implemented account-based marketing strategies, created sales enablement content, optimized lead scoring models, and built integrated CRM workflows.",
      outcomes: [
        "Qualified leads increased by 267%",
        "Sales cycle shortened by 34%",
        "Lead-to-customer conversion improved by 145%",
        "Average deal size increased by 78%"
      ],
      testimonial: {
        text: "They transformed our approach to B2B marketing. The quality of leads and sales alignment has never been better.",
        author: "Robert Kim",
        position: "Sales Director, ManufacturePro"
      },
      tags: ["Account-Based Marketing", "Lead Generation", "Sales Enablement", "B2B Strategy"]
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  const categories = ['All', 'Digital Strategy', 'Performance Marketing', 'Brand Development', 'Analytics & Optimization', 'Lead Generation'];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-20 flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading case studies...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Client Projects - MarketForce Pro | Strategic Marketing Case Studies</title>
        <meta name="description" content="Explore our portfolio of successful marketing campaigns and strategic initiatives. See how we've helped clients achieve measurable growth and transformation." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <ProjectHero />
        
        <FilterBar 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          projectCount={filteredProjects.length}
        />

        {/* Projects Grid */}
        <section className="container mx-auto px-6 py-16 bg-gray-50">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-8">
                <Icon name="FolderOpen" size={48} className="text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No projects found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                No projects match your current filter selection. Try selecting a different category.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
              >
                View All Projects
              </button>
            </div>
          )}
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={closeModal}
          />
        )}

        <Footer />
      </div>
    </>
  );
};

export default Projects;