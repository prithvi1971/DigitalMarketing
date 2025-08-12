import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { getAllBlogPosts } from '../../../utils/blogRegistry';

const AwardsSection = () => {
  const navigate = useNavigate();

  const awards = [
    {
      year: '2024',
      title: 'Certified Experts Across the Board',
      organization: 'Google, Meta, HubSpot & more',
      description:
        'Our team holds platform certifications to ensure performance-backed, up-to-date execution.',
      icon: 'CheckCircle',
      color: 'var(--color-success)',
    },
    {
      year: '2024',
      title: 'Trusted by Ambitious Brands',
      organization: 'Across SaaS, E-Commerce & Events',
      description:
        'From early-stage startups to growing brands, we’ve helped clients unlock measurable growth.',
      icon: 'Handshake',
      color: 'var(--color-primary)',
    },
    {
      year: '2023',
      title: 'Results Over Awards',
      organization: 'Client-Centric Philosophy',
      description:
        'We’re focused on outcomes that matter: increased revenue, lower CAC, and better ROAS.',
      icon: 'TrendingUp',
      color: 'var(--color-warning)',
    },
    {
      year: '2023',
      title: 'Platform-Ready & Performance-Driven',
      organization: 'Modern Marketing Stack',
      description:
        'From data analytics to CRM and media buying platforms, we integrate with what drives ROI.',
      icon: 'Layers',
      color: 'var(--color-primary)',
    },
  ];

  // Pick 4 featured posts if available; otherwise latest 4.
  const blogPosts = useMemo(() => {
    const all = getAllBlogPosts?.() || [];
    const withSlug = all.filter(p => !!p.slug);
    const featured = withSlug.filter(p => p.featured);
    const pick = featured.length >= 4 ? featured.slice(0, 4) : withSlug.slice(0, 4);
    return pick.map(p => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      image: p.image || '/assets/images/no_image.png',
      category: p.category || 'Insights',
      date: p.date || '',
      readTime: p.readTime || '',
    }));
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
              <Icon name="Award" size={20} className="text-warning shrink-0" />
            </div>
            <span className="text-sm font-semibold text-warning uppercase tracking-wider">
              Recognition & Trust
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Trusted by Ambitious Brands
            <span className="text-gradient block">Built on Real Results</span>
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed">
            Our commitment to excellence has been recognized by industry leaders. From startups to growing
            enterprises, our clients trust us to deliver marketing that drives real business outcomes.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {awards.map((award, index) => (
            <div key={index} className="group">
              <div className="bg-background p-8 rounded-2xl shadow-brand hover:shadow-brand-lg transition-brand border border-border h-full">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${award.color}15` }}
                  >
                    <Icon name={award.icon} size={28} className="shrink-0" style={{ color: award.color }} />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-brand">
                      {award.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">{award.organization}</p>
                    <p className="text-text-secondary leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">Professional Certifications</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our team maintains platform-specific certifications to ensure every campaign we run is optimized,
              data-informed, and aligned with the latest industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Google Analytics Certified',
                logo:
                  'https://www.reliablesoft.net/wp-content/uploads/2021/01/google-analytics-certification.png',
                description: 'Advanced tracking and performance analysis to guide marketing strategy.',
              },
              {
                title: 'Meta Ads Certified',
                logo: 'https://images.credly.com/images/cc2c9a21-84a0-4f80-bcda-eb9dea7aa35c/blob.png',
                description: "Certified expertise in Meta's ad ecosystem—across Facebook, Instagram & beyond.",
              },
              {
                title: 'HubSpot Inbound Certified',
                logo:
                  'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-512.png',
                description: 'Inbound marketing strategies, lead nurturing, and CRM alignment mastered.',
              },
              {
                title: 'Mailchimp Certified',
                logo: 'https://portermetrics.com/wp-content/uploads/2022/04/mailchimp-logo.png',
                description: 'Specialists in email automation, segmentation, and campaign optimization.',
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl shadow-brand border border-border text-center group hover:shadow-brand-lg transition-brand"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image src={cert.logo} alt={`${cert.title} certification logo`} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2 group-hover:text-primary transition-brand">
                  {cert.title}
                </h4>
                <p className="text-sm text-text-secondary">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* From Our Blog (repurposed from "Featured in Leading Publications") */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">From Our Blog</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Latest articles on performance marketing, LLM-ready content, B2B lead gen, and voice/AI assistant SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-background rounded-xl shadow-brand border border-border overflow-hidden hover:shadow-brand-lg transition-brand flex flex-col"
              >
                <button
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="relative block w-full overflow-hidden"
                  aria-label={`Open article ${post.title}`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <span
                    className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-full text-[11px] font-medium
                              bg-black/70 text-white backdrop-blur-sm border border-white/10 shadow-sm"
                  >
                    <Icon name="Tag" size={14} className="mr-1 text-white shrink-0" />
                    {post.category}
                  </span>
                </button>

                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-text-secondary line-clamp-3 mb-4">{post.excerpt}</p>

                  <div className="mt-auto flex items-center justify-between text-xs text-text-secondary">
                    <div className="flex items-center space-x-3">
                      {post.date && (
                        <span className="inline-flex items-center">
                          <Icon name="Calendar" size={14} className="mr-1 text-primary shrink-0" />
                          {post.date}
                        </span>
                      )}
                      {post.readTime && (
                        <span className="inline-flex items-center">
                          <Icon name="Clock" size={14} className="mr-1 text-primary shrink-0" />
                          {post.readTime}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Read
                      <Icon name="ArrowRight" size={16} className="ml-1 shrink-0" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-brand"
            >
              View all articles
              <Icon name="ArrowRight" size={18} className="ml-2 shrink-0" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-background rounded-2xl p-8 shadow-brand border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Trusted by Industry Leaders</h3>
            <p className="text-text-secondary">
              Join the growing list of successful businesses that trust MarketForce Pro with their growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-text-secondary">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">$1M+</div>
              <div className="text-sm text-text-secondary">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-text-secondary">Successful Campaigns</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">10+</div>
              <div className="text-sm text-text-secondary">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
