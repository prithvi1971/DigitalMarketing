import React from 'react';
import Icon from '../../../components/AppIcon';

const Blog002 = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-accent/5 border-l-4 border-accent p-4 sm:p-6 rounded-r-lg">
        <p className="text-base sm:text-lg text-text-primary leading-relaxed">
          Performance marketing in 2025 is defined by signal loss, rising CPAs, and smarter automation. Winning brands are pairing clean first-party data with modern attribution, value-based bidding, and relentless creative testing to grow ROAS sustainably.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Performance Marketing in 2025: What Changed (and Why It Matters)</h2>
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
          Privacy changes and the decline of third-party cookies have forced a shift from channel-first to customer-first optimization. That means stronger measurement frameworks, server-side tagging, and media strategies aligned to customer value—not just clicks.
        </p>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-text-primary mb-3 flex items-center text-lg">
            <Icon name="TrendingUp" size={18} className="text-primary mr-2 shrink-0" />
            Core Performance Channels to Prioritize
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <ul className="space-y-2 text-text-secondary text-sm sm:text-base">
              <li>Paid Search (value-based &amp; query-less models)</li>
              <li>Paid Social (creative-led, algorithmic distribution)</li>
              <li>Programmatic &amp; Retail Media (incremental reach)</li>
              <li>Affiliate &amp; Partnerships (efficient expansion)</li>
            </ul>
            <ul className="space-y-2 text-text-secondary text-sm sm:text-base">
              <li>Email &amp; SMS (first-party data activation)</li>
              <li>CRO &amp; Landing Experiences (conversion science)</li>
              <li>Remarketing with Consent (privacy-compliant)</li>
              <li>Influencer &amp; UGC (authentic demand gen)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Modern Attribution: From Last-Click to Evidence-Based</h2>
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
          Last-click hides the truth. In 2025, robust measurement pairs <strong>multi-touch attribution (MTA)</strong> for tactical decisions with <strong>marketing mix modeling (MMM)</strong> for budget planning—validated by <strong>incrementality testing</strong> and server-side data.
        </p>

        {/* Attribution Playbook (improved section) */}
        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <div className="bg-muted px-4 sm:px-6 py-3 border-b border-border">
            <h4 className="font-semibold text-text-primary">Attribution Playbook: Choose by Goal</h4>
          </div>

          <div className="p-4 sm:p-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {/* Awareness */}
            <div className="rounded-lg border border-border p-4 sm:p-5">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Megaphone" size={16} className="text-primary shrink-0" />
                <span className="font-semibold text-text-primary">First-Touch</span>
              </div>
              <p className="text-sm text-text-secondary mb-2">
                Best for: <span className="font-medium text-text-primary">Upper-funnel discovery</span>
              </p>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>Use when testing new channels or creatives</li>
                <li>Great for top-of-funnel budget decisions</li>
                <li className="text-xs text-text-secondary/80 mt-2">Watch out: Overvalues early touches; validate with holdouts.</li>
              </ul>
            </div>

            {/* Balanced journey */}
            <div className="rounded-lg border border-border p-4 sm:p-5">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Route" size={16} className="text-primary shrink-0" />
                <span className="font-semibold text-text-primary">Position-Based / Linear</span>
              </div>
              <p className="text-sm text-text-secondary mb-2">
                Best for: <span className="font-medium text-text-primary">Mid-funnel influence</span>
              </p>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>Fairly credits assist channels</li>
                <li>Useful for cross-channel mix tuning</li>
                <li className="text-xs text-text-secondary/80 mt-2">Watch out: Still heuristic; sanity-check with MMM.</li>
              </ul>
            </div>

            {/* Late-funnel */}
            <div className="rounded-lg border border-border p-4 sm:p-5">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Clock" size={16} className="text-primary shrink-0" />
                <span className="font-semibold text-text-primary">Time-Decay</span>
              </div>
              <p className="text-sm text-text-secondary mb-2">
                Best for: <span className="font-medium text-text-primary">Late-funnel nudges</span>
              </p>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>Good for remarketing + sales assist</li>
                <li>Emphasizes proximity to conversion</li>
                <li className="text-xs text-text-secondary/80 mt-2">Watch out: Can undervalue awareness inputs.</li>
              </ul>
            </div>

            {/* Data-driven */}
            <div className="rounded-lg border border-border p-4 sm:p-5">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Brain" size={16} className="text-primary shrink-0" />
                <span className="font-semibold text-text-primary">Data-Driven / Algorithmic</span>
              </div>
              <p className="text-sm text-text-secondary mb-2">
                Best for: <span className="font-medium text-text-primary">Mature programs with volume</span>
              </p>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>AI-weighted impact per channel/touch</li>
                <li>Strong for tactical optimization</li>
                <li className="text-xs text-text-secondary/80 mt-2">Watch out: Needs clean events + server-side tagging.</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">The 4-Pillar ROI Optimization Framework</h2>
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
          Build a durable engine with four pillars: <strong>measurement accuracy</strong>, <strong>smart bidding</strong>, <strong>creative performance</strong>, and <strong>audience refinement</strong>. Iterate weekly; scale monthly.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4 sm:p-6">
            <h4 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Target" size={16} className="text-primary mr-2 shrink-0" />
              Pillar 1: Measurement Excellence
            </h4>
            <ul className="space-y-2 text-text-secondary text-sm sm:text-base">
              <li>Server-side tagging + consent mode alignment</li>
              <li>GA4 + event taxonomy and deduplication</li>
              <li>Modeled conversions &amp; offline import</li>
              <li>Incrementality tests (geo / audience holdouts)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-lg p-4 sm:p-6">
            <h4 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Zap" size={16} className="text-accent mr-2 shrink-0" />
              Pillar 2: Strategic, Value-Based Bidding
            </h4>
            <ul className="space-y-2 text-text-secondary text-sm sm:text-base">
              <li>ROAS/CPA targets tied to LTV cohorts</li>
              <li>Query-less bidding (broad match, Advantage+) with guardrails</li>
              <li>Seasonal/price elasticity adjustments</li>
              <li>Budget pacing by marginal return</li>
            </ul>
          </div>
        </div>

        <blockquote className="border-l-4 border-accent pl-4 sm:pl-6 italic text-base sm:text-lg text-text-primary bg-muted p-4 rounded-r-lg">
          "ROI optimization is not cost cutting—it’s compounding value by measuring precisely, bidding intelligently, and letting creative do the heavy lifting."
        </blockquote>

        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Creative Performance: Your Biggest Lever in 2025</h2>
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
          Algorithms reward high-engagement assets. Systematize creative with weekly testing, strong hooks, native formats (short-form video, UGC), and landing pages that mirror the ad’s promise.
        </p>

        {/* Creative Optimization System (improved section) */}
        <div className="bg-white border border-border rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center text-lg">
            <Icon name="Sparkles" size={18} className="text-primary mr-2 shrink-0" />
            Creative Optimization System (Weekly Cadence)
          </h3>

          {/* Weekly Cadence */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Calendar" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Mon–Tue: Plan &amp; Build</span>
              </div>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>Define 2–3 hypotheses (angle + audience)</li>
                <li>Produce 4–6 variants (hook/visual/CTA)</li>
                <li>Mirror messaging on landing pages</li>
              </ul>
            </div>

            <div className="rounded-lg bg-accent/5 border border-accent/20 p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Activity" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Wed–Thu: Run &amp; Learn</span>
              </div>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>Stat-sig thresholds: CTR, CVR, CPR</li>
                <li>Cap frequency; monitor comments</li>
                <li>Tag winners/losers in naming</li>
              </ul>
            </div>

            <div className="rounded-lg bg-success/5 border border-success/20 p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="TrendingUp" size={16} className="text-success shrink-0" />
                <span className="font-medium text-text-primary">Fri: Scale &amp; Archive</span>
              </div>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>Scale top 1–2 variants</li>
                <li>Archive underperformers</li>
                <li>Log learnings → next week</li>
              </ul>
            </div>
          </div>

          {/* Hook Library */}
          <div className="mt-6">
            <h4 className="font-semibold text-text-primary mb-2 flex items-center">
              <Icon name="Megaphone" size={16} className="text-primary mr-2 shrink-0" />
              High-Performing Hook Patterns
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Before/After Proof',
                'Myth vs. Reality',
                'Time-to-Value Claim',
                'Risk Reversal',
                'Social Proof Stat',
                'Problem → Agitate → Solve',
                'Comparison (“Why X beats Y”)',
                'Human Story / UGC',
              ].map((chip) => (
                <span key={chip} className="px-3 py-1 text-xs rounded-full bg-muted text-text-secondary border border-border">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Audience Refinement: Quality Over Quantity</h2>
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
          Move beyond broad demographics. Use first-party data to build high-intent segments, then let platforms expand via value-based lookalikes while you keep control with exclusions and frequency caps.
        </p>

        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-text-primary mb-4">2025 ROI Benchmarks (Directionally)</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">3–6x</div>
              <div className="text-sm text-text-secondary">Target ROAS (mature programs)</div>
              <div className="text-xs text-text-secondary mt-1">Varies by AOV &amp; cycle</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-success mb-2">-15–30%</div>
              <div className="text-sm text-text-secondary">CPA vs. baseline after CRO</div>
              <div className="text-xs text-text-secondary mt-1">60–90 days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">3.0x</div>
              <div className="text-sm text-text-secondary">LTV:CAC goal</div>
              <div className="text-xs text-text-secondary mt-1">Sustainable growth</div>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Implementation Roadmap: 30 / 60 / 90 Days</h2>
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
          Build the foundation first, then layer on automation and creative scale. Keep tests small and decisions fast.
        </p>

        <div className="bg-white border border-border rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-text-primary mb-4">Action Plan</h3>
          <div className="grid gap-6 sm:grid-cols-3 text-sm sm:text-base">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Calendar" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Days 1–30</span>
              </div>
              <ul className="text-text-secondary space-y-1">
                <li>GA4 + server-side tagging audit</li>
                <li>Modeled conversions live</li>
                <li>First-party capture (forms, email/SMS)</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="CalendarCheck" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Days 31–60</span>
              </div>
              <ul className="text-text-secondary space-y-1">
                <li>Value-based bidding pilots</li>
                <li>Weekly creative testing</li>
                <li>CRO fixes on top landing pages</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="CalendarRange" size={16} className="text-primary shrink-0" />
                <span className="font-medium text-text-primary">Days 61–90</span>
              </div>
              <ul className="text-text-secondary space-y-1">
                <li>MMM/MTA alignment + holdouts</li>
                <li>Budget reallocation by marginal ROAS</li>
                <li>Scale winners; pause noise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ for SEO (rich results) */}
        <div className="bg-muted p-4 sm:p-6 rounded-lg border border-border">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center text-lg">
            <Icon name="HelpCircle" size={18} className="text-primary mr-2 shrink-0" />
            Performance Marketing ROI: FAQs (2025)
          </h3>
          <div className="space-y-4 text-text-secondary">
            <div>
              <p className="font-medium text-text-primary mb-1">How do I improve ROAS with rising CPAs?</p>
              <p className="text-sm">Tighten tracking, shift to value-based bidding, and run a weekly creative testing cadence. Reinvest into winners; cap frequency on low-intent segments.</p>
            </div>
            <div>
              <p className="font-medium text-text-primary mb-1">What’s the best attribution model in 2025?</p>
              <p className="text-sm">Use MTA for tactical decisions and MMM for budgeting—validate both with incrementality tests. No single model is “best” without triangulation.</p>
            </div>
            <div>
              <p className="font-medium text-text-primary mb-1">Does server-side tagging really help?</p>
              <p className="text-sm">Yes. It improves data quality, page performance, and privacy control—leading to more reliable optimization and better ROI decisions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="border-t border-border pt-6 sm:pt-8">
        <p className="text-text-secondary leading-relaxed italic text-sm sm:text-base">
          Sustainable ROAS in 2025 comes from measurement discipline, creative excellence, and value-based automation—stacked and repeated. Build the system, then let it compound.
        </p>
      </div>
    </div>
  );
};

export default Blog002;
