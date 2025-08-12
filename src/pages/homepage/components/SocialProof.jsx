import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const clientLogos = [
  {
    id: 1,
    name: "Impact Media & Events Corporation",
    logo: "/assets/images/home/IMEC.png",
    industry: "Corporate Events",
  },
  {
    id: 2,
    name: "The Cranberry Movement",
    logo: "/assets/images/home/TheCranberryMovement.png",
    industry: "E-commerce",
  },
  {
    id: 3,
    name: "Hotel Kleiner Riesen",
    logo: "/assets/images/home/KleinerRiesen.png",
    industry: "Hospitality",
  },
  {
    id: 4,
    name: "Mail Experts",
    logo: "/assets/images/home/MailExpert.png",
    industry: "Email Marketing",
  },
  {
    id: 5,
    name: "Siyara",
    logo: "/assets/images/home/Siyara.png",
    industry: "Import & Export",
  },
  {
    id: 6,
    name: "Ai Document Generator",
    logo: "/assets/images/home/DocumentGenerator.png",
    industry: "Ai Solutions",
  },
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              {' '}
              Visionary Clients
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Big wins don’t need big numbers—just bold partners.
          </p>
        </div>

        {/* Logo Wall (clean, consistent, no hover popups) */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {clientLogos.map((client) => (
              <div
                key={client.id}
                className="rounded-xl bg-white ring-1 ring-border shadow-[0_1px_0_rgba(0,0,0,0.03)] p-4 sm:p-5 flex items-center justify-center"
                title={client.name}
                aria-label={client.name}
              >
                {/* 
                  Using a fixed visual box ensures uniformity.
                  Aspect + max-h keep logos crisp without distortion.
                */}
                <div className="w-full aspect-[3/1] flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-10 sm:max-h-12 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Optional tiny caption to reinforce trust on mobile */}
          <p className="mt-4 text-center text-xs text-slate-500">
            Selection of recent partners across technology, e-commerce, finance, healthcare, and more.
          </p>
        </div>

        {/* Certifications — no outer box, perfectly aligned (your latest version) */}
        <div className="py-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-[11px] font-semibold tracking-wide text-text-secondary">
              <Icon name="ShieldCheck" size={14} className="text-primary" aria-hidden="true" />
              Verified Expertise
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-text-primary">
              Industry-Certified Experts
            </h3>
            <p className="mt-2 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
              Certifications across analytics, paid media, lifecycle, and search—built for outcomes, not badges.
            </p>
          </div>

          {(() => {
            const certs = [
              {
                icon: 'BarChart3',
                title: 'Google & Ads',
                blurb: 'Measurement, attribution, media efficiency',
                points: ['Server-side tagging & GA4 modeling', 'Value-based bidding & budgets'],
              },
              {
                icon: 'Megaphone',
                title: 'Meta Blueprint',
                blurb: 'Creative systems & social distribution',
                points: ['UGC & short-form native ads', 'Incrementality & lift testing'],
              },
              {
                icon: 'Mail',
                title: 'Email Sends',
                blurb: 'Automation, segmentation, deliverability',
                points: ['Journey orchestration & triggers', 'Template systems & testing'],
              },
              {
                icon: 'Target',
                title: 'SEM',
                blurb: 'High-intent search & CRO alignment',
                points: ['Broad-match guardrails & scripts', 'Landing page testing & ROAS'],
              },
            ];

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
                {certs.map((c, i) => (
                  <article key={i} className="flex h-full flex-col rounded-xl border border-border bg-background p-5">
                    <div className="flex items-start gap-3">
                      <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 ring-1 ring-primary/15 shrink-0">
                        <Icon name={c.icon} size={20} className="text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <h4 className="font-semibold text-text-primary leading-tight">{c.title}</h4>
                          <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                            Certified
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-text-secondary min-h-[40px]">{c.blurb}</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-xs text-text-secondary">
                      {c.points.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="CircleDot" size={14} className="text-primary mt-[2px] shrink-0" />
                          <span className="leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto" />
                  </article>
                ))}
              </div>
            );
          })()}

          <div className="mt-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-[11px] text-text-secondary">
              <Icon name="Sparkles" size={14} className="text-primary" />
              Updated quarterly — credentials on file
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
