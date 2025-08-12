import React from 'react';
import Icon from '../../../components/AppIcon';

const Blog003 = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-primary/5 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg">
        <p className="text-base sm:text-lg text-text-primary leading-relaxed">
          Search is no longer just ten blue links. In 2025, buyers ask <em>LLMs</em> like ChatGPT and Perplexity for direct answers—often before (or instead of) Googling. Your growth now depends on content that ranks in Google <strong>and</strong> gets quoted by LLMs. This post shows how to build for both worlds without doubling your workload.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Why LLM Search Changes the Game</h2>
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
          LLMs summarize the web and prefer sources that are clear, factual, and structured. They extract definitions, stats, steps, and FAQs—then synthesize. If your content isn’t scannable by humans <em>and</em> parsable by machines, you’ll be skipped in both SERP and AI answers.
        </p>

        {/* Dual Optimization Framework */}
        <div className="bg-white border border-border rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center text-lg">
            <Icon name="Bot" size={18} className="text-primary mr-2 shrink-0" />
            Dual Optimization Framework: Google + LLM
          </h3>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {/* Google pillar */}
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 sm:p-5 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Search" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Built for Google</span>
              </div>
              <ul className="text-sm sm:text-base text-text-secondary space-y-2">
                <li>Topic clusters + internal links from pillar → supporting pages</li>
                <li>Intent-aligned H2/H3s, compelling title/meta, 1200×630 OG image</li>
                <li>Schema: <strong>Article</strong>, <strong>FAQPage</strong>, <strong>BreadcrumbList</strong></li>
                <li>Core Web Vitals, lazy images, CDN; clean canonical &amp; sitemap</li>
              </ul>
            </div>

            {/* LLM pillar */}
            <div className="rounded-lg bg-accent/5 border border-accent/20 p-4 sm:p-5 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Brain" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Built for LLMs</span>
              </div>
              <ul className="text-sm sm:text-base text-text-secondary space-y-2">
                <li>Concise <strong>TL;DR</strong>, clear definitions, step-by-step sections</li>
                <li>Tables, bullet lists, and labeled frameworks (easy to quote)</li>
                <li>Inline citations/outbound references to credible sources</li>
                <li>Licensing &amp; access: no paywall, stable URLs, readable HTML</li>
              </ul>
            </div>
          </div>
        </div>

        {/* TL;DR + Definitions (LLM-friendly) */}
        <div className="bg-muted p-4 sm:p-6 rounded-lg border border-border">
          <h3 className="font-semibold text-text-primary mb-3 flex items-center text-lg">
            <Icon name="Bookmark" size={18} className="text-primary mr-2 shrink-0" />
            TL;DR: What to Do This Quarter
          </h3>
          <ol className="list-decimal pl-5 text-text-secondary space-y-1 text-sm sm:text-base">
            <li>Add a 3–5 sentence summary to every post.</li>
            <li>Include a glossary: definitions of your key terms.</li>
            <li>Add a short FAQ that answers the exact questions users ask.</li>
            <li>Use schema (Article + FAQPage); keep pages fast and public.</li>
            <li>Link out to authoritative sources; update posts quarterly.</li>
          </ol>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Information Design for LLMs (Without Hurting SEO)</h2>
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
          You don’t need “AI-only” content. Instead, structure your pages so both crawlers and LLMs can extract meaning fast.
        </p>

        {/* Info Design Patterns */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
          <div className="bg-white border border-border rounded-lg p-4 sm:p-5">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="FileText" size={16} className="text-primary shrink-0" />
              <span className="font-semibold text-text-primary">Answer Blocks</span>
            </div>
            <p className="text-sm sm:text-base text-text-secondary">
              Start sections with a 2–4 sentence plain-English answer, then add depth. LLMs quote the upfront summary; humans read the rest.
            </p>
          </div>

          <div className="bg-white border border-border rounded-lg p-4 sm:p-5">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="ListChecks" size={16} className="text-primary shrink-0" />
              <span className="font-semibold text-text-primary">Steps &amp; Checklists</span>
            </div>
            <p className="text-sm sm:text-base text-text-secondary">
              Turn processes into numbered steps or checklists. They’re easy to reuse in AI answers and drive higher dwell time.
            </p>
          </div>

          <div className="bg-white border border-border rounded-lg p-4 sm:p-5">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Database" size={16} className="text-primary shrink-0" />
              <span className="font-semibold text-text-primary">Citations &amp; Data</span>
            </div>
            <p className="text-sm sm:text-base text-text-secondary">
              Add stats with sources, dates, and context. LLMs reward verifiable facts; users reward credibility.
            </p>
          </div>
        </div>

        {/* Content System */}
        <div className="not-prose bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center text-lg">
            <Icon name="Layers" size={18} className="text-primary mr-2 shrink-0" />
            The AI-Ready Content System (ARC)
          </h3>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {/* Pillar & Cluster */}
            <div className="min-w-0 rounded-lg border border-border bg-white p-4 sm:p-5 flex flex-col h-full">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="BookOpen" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Pillar &amp; Cluster</span>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed break-words">
                One pillar page per core topic, with 5–10 cluster posts that answer specific questions. Link both ways. Keep anchors descriptive.
              </p>
            </div>

            {/* Structured Answers */}
            <div className="min-w-0 rounded-lg border border-border bg-white p-4 sm:p-5 flex flex-col h-full">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Link" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Structured Answers</span>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed break-words">
                Each post: TL;DR, definitions, steps, table, FAQ. Add “Updated on” near the top—LLMs prefer fresh content.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="min-w-0 rounded-lg border border-border bg-white p-4 sm:p-5 flex flex-col h-full">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="ShieldCheck" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Trust Signals</span>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed break-words">
                E-E-A-T: author bio, expertise, sources, case studies, screenshots. Use org/person schema sitewide.
              </p>
            </div>

            {/* Performance & Access */}
            <div className="min-w-0 rounded-lg border border-border bg-white p-4 sm:p-5 flex flex-col h-full">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Zap" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Performance &amp; Access</span>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed break-words">
                Fast, mobile-first, no intrusive paywalls on educational content. Stable URLs, canonical tags, valid sitemap.
              </p>
            </div>
          </div>
        </div>

        {/* Practical Checklist */}
        <div className="bg-white border border-border rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center text-lg">
            <Icon name="ClipboardCheck" size={18} className="text-primary mr-2 shrink-0" />
            10-Point “LLM + Google” Checklist
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 text-sm sm:text-base text-text-secondary">
            <ul className="space-y-2">
              <li>TL;DR + Definitions at top</li>
              <li>FAQ with 3–5 real questions</li>
              <li>Cite 2–3 reputable sources per post</li>
              <li>Table or bulleted steps per section</li>
              <li>Article + FAQPage schema</li>
            </ul>
            <ul className="space-y-2">
              <li>Descriptive internal links (not “click here”)</li>
              <li>“Updated on” date visible</li>
              <li>Fast images (next-gen, CDN)</li>
              <li>Clean canonical + sitemap</li>
              <li>Publicly accessible (no JS walls for core content)</li>
            </ul>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary pl-4 sm:pl-6 italic text-base sm:text-lg text-text-primary bg-muted p-4 rounded-r-lg">
          “If your page makes it easy for a human to learn and easy for a model to quote, you win twice—visibility in SERP <em>and</em> visibility in AI answers.”
        </blockquote>

        {/* Implementation Roadmap */}
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Implementation Roadmap (30 / 60 / 90 Days)</h2>
        <div className="bg-white border border-border rounded-lg p-4 sm:p-6">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3 text-sm sm:text-base">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Calendar" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Days 1–30</span>
              </div>
              <ul className="text-text-secondary space-y-1">
                <li>Pillar + cluster plan for 3 topics</li>
                <li>Add TL;DR, definitions, FAQ to top 5 posts</li>
                <li>Fix schema, canonical, and sitemap</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="CalendarCheck" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Days 31–60</span>
              </div>
              <ul className="text-text-secondary space-y-1">
                <li>Publish 6 cluster posts; add tables &amp; steps</li>
                <li>Add 2–3 citations per article</li>
                <li>Improve CWV (images, font, caching)</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="CalendarRange" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Days 61–90</span>
              </div>
              <ul className="text-text-secondary space-y-1">
                <li>Refresh “Updated on” and republish</li>
                <li>Interlink clusters; add “related reading”</li>
                <li>Start monthly content QA + source review</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ (rich, also good for LLM snippets) */}
        <div className="bg-muted p-4 sm:p-6 rounded-lg border border-border">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center text-lg">
            <Icon name="HelpCircle" size={18} className="text-primary mr-2 shrink-0" />
            LLM &amp; SEO: FAQs (2025)
          </h3>
          <div className="space-y-4 text-text-secondary">
            <div>
              <p className="font-medium text-text-primary mb-1">Will optimizing for LLMs hurt my SEO?</p>
              <p className="text-sm">No—good LLM structure (summaries, steps, FAQs, citations) also improves user satisfaction and Google’s understanding. It’s complementary.</p>
            </div>
            <div>
              <p className="font-medium text-text-primary mb-1">Do I need special “AI feeds”?</p>
              <p className="text-sm">Not today. Focus on accessible, structured HTML with valid schema and stable URLs. If you have docs or data, consider public pages with tables or CSV downloads.</p>
            </div>
            <div>
              <p className="font-medium text-text-primary mb-1">How do I know if LLMs quote us?</p>
              <p className="text-sm">Track branded queries in analytics, monitor referral spikes from AI browsers like Perplexity, and look for your brand citations in generated answers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="border-t border-border pt-6 sm:pt-8">
        <p className="text-text-secondary leading-relaxed italic text-sm sm:text-base">
          LLMs won’t replace Google—but they will change who gets discovered first. Structure your knowledge so humans learn quickly and models quote you reliably. Do that, and you’ll win the new search.
        </p>
      </div>
    </div>
  );
};

export default Blog003;
