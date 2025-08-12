import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const teamMembers = [
  
  {
    id: 1,
    name: "Prithvi Pandya",
    role: "Account Manager",
    department: "leadership",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQE1_68R3G22vw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698979324713?e=1757548800&v=beta&t=Wes-N0106q0mh4aeaH-M1xo0ggv5o52J_WxpMqRkxDQ",
    bio: "Client-first communicator who ensures seamless delivery, strategic alignment, and results tracking across all campaigns.",
    specialties: ["Client Success", "Project Coordination", "Campaign Reporting"],
    certifications: ["Project Management Certified", "HubSpot & Mailchimp Client Management"],
    funFact: "Once coordinated 5 international client campaigns while traveling full-time",
    linkedin: "#",
    email: "talia@marketforcepro.com"
  },
  {
    id: 2,
    name: "Jay Mehta",
    role: "Graphic Designer",
    department: "creative",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQH6rRh63PHWGw/profile-framedphoto-shrink_800_800/B4DZgqeC3oHAAk-/0/1753059176212?e=1755194400&v=beta&t=5szlBPlMMsgsot5l4wVgclPbzy6QOqraFTLM1J-rmbs",
    bio: "Design-driven creative focused on building bold, conversion-optimized visuals across web, ads, and social campaigns.",
    specialties: ["Brand Design", "Ad Creatives", "UI Graphics", "Content Design"],
    certifications: ["Adobe Illustrator Certified", "Canva Brand Designer"],
    funFact: "Designed a viral Instagram carousel that hit 250k shares organically",
    linkedin: "#",
    email: "leila@marketforcepro.com"
  },
  {
    id: 3,
    name: "Sahil Lalani",
    role: "Email Marketing Specialist",
    department: "strategy",
    image: "https://images.unsplash.com/photo-1603415526960-f8f0f5f79e10?w=400&h=400&fit=crop",
    bio: "Specializes in lifecycle email strategies that turn subscribers into customers and customers into brand advocates.",
    specialties: ["Email Automation", "Lead Nurturing", "Campaign Optimization"],
    certifications: ["Klaviyo Partner Certified", "HubSpot Email Certified"],
    funFact: "Once A/B tested 47 subject lines for a campaign — and it paid off",
    linkedin: "#",
    email: "ayaan@marketforcepro.com"
  },
  {
    id: 4,
    name: "Yash Jani",
    role: "Social Media Manager",
    department: "media",
    image: "https://images.unsplash.com/photo-1614289180154-d307b1e0ecb1?w=400&h=400&fit=crop",
    bio: "Crafts engaging social strategies that drive brand reach, community growth, and content virality across platforms.",
    specialties: ["Content Calendars", "Platform Growth", "Reels & Shorts"],
    certifications: ["Meta Social Media Strategy", "Hootsuite Certified"],
    funFact: "Grew a niche brand’s TikTok from 0 to 50k in 45 days",
    linkedin: "#",
    email: "zara@marketforcepro.com"
  },
  {
    id: 5,
    name: "Ravish Virani",
    role: "Web Developer",
    department: "creative",
    image: "https://images.unsplash.com/photo-1603415527153-9f4f3a7200a8?w=400&h=400&fit=crop",
    bio: "Frontend-focused web developer crafting high-performance marketing sites optimized for speed, SEO, and conversions.",
    specialties: ["React & Next.js", "Website Optimization", "Technical SEO"],
    certifications: ["Google Mobile Web Certified", "Netlify Developer Partner"],
    funFact: "Built a side project that hit 100,000+ organic visitors in 6 months",
    linkedin: "#",
    email: "eli@marketforcepro.com"
  },
  {
    id: 6,
    name: "Noah Rivera",
    role: "Paid Media Specialist",
    department: "analytics",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=400&fit=crop",
    bio: "Digital media strategist optimizing ad performance across Google, Meta, and LinkedIn with a data-first approach to scale ROAS.",
    specialties: ["PPC Campaigns", "Retargeting Funnels", "Cross-Platform Budgeting"],
    certifications: ["Google Ads Certified", "Meta Media Buying Professional"],
    funFact: "Runs a personal dashboard that tracks live ad performance across 9 accounts",
    linkedin: "#",
    email: "noah@marketforcepro.com"
  }
  ];

  const departments = [
    { key: 'all', label: 'All Team', icon: 'Users' },
    { key: 'leadership', label: 'Leadership', icon: 'Crown' },
    { key: 'strategy', label: 'Strategy', icon: 'Target' },
    { key: 'creative', label: 'Creative', icon: 'Palette' },
    { key: 'analytics', label: 'Analytics', icon: 'BarChart3' },
    { key: 'media', label: 'Media', icon: 'Megaphone' }
  ];

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Team
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Meet the Strategists Behind
            <span className="text-gradient block">Your Success</span>
          </h2>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            Each team member brings unique expertise and passion to every client partnership. Get to know the people who will be architecting your growth.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.key}
              onClick={() => setActiveFilter(dept.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand ${
                activeFilter === dept.key
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-background text-text-secondary hover:text-primary hover:bg-muted border border-border'
              }`}
            >
              <Icon 
                name={dept.icon} 
                size={16} 
                className={activeFilter === dept.key ? 'text-primary-foreground' : 'text-text-secondary'}
              />
              <span>{dept.label}</span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="bg-background rounded-2xl shadow-brand hover:shadow-brand-lg transition-brand overflow-hidden border border-border">
                {/* Member Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-brand"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-brand"></div>
                  
                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-brand">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-background/90 backdrop-blur-brand rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-brand"
                    >
                      <Icon name="Linkedin" size={16} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-background/90 backdrop-blur-brand rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-brand"
                    >
                      <Icon name="Mail" size={16} />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-xs font-medium text-text-secondary rounded-md"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Certifications</h4>
                    <div className="space-y-1">
                      {member.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Award" size={12} color="var(--color-primary)" />
                          <span className="text-xs text-text-secondary">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fun Fact */}
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-start space-x-2">
                      <Icon name="Lightbulb" size={14} color="var(--color-warning)" className="mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-text-secondary italic">
                        {member.funFact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-background rounded-2xl p-8 shadow-brand border border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-text-secondary">Combined Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">20+</div>
              <div className="text-sm text-text-secondary">Industry Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-text-secondary">Speaking Engagements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">10+</div>
              <div className="text-sm text-text-secondary">Published Blogs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;