import { Link } from 'react-router-dom';

const SERVICES = [
  { icon: '📋', title: 'Individual Tax Filing', desc: 'Specialized in Planning, Preparation and Filing of Individual Tax Returns for Federal and all States including Gift, FATCA & FBAR (Form 1040/1040-NR).' },
  { icon: '🏢', title: 'Business Tax Filing', desc: 'Planning & Filing of Corporate Tax Returns for Federal and all States: 1065/1120/1120-S for Partnerships, S-Corps and C-Corps.' },
  { icon: '🌍', title: 'International Tax Filing', desc: 'Robust Experience in handling International Taxpayer Returns invoking Tax Treaties across multiple countries.' },
  { icon: '🪪', title: 'Apply for ITIN', desc: 'Seamless and Effortless Procedure to get ITIN for Spouse and Dependents through US Tax Filer.' },
  { icon: '🛡️', title: 'Audit Representation', desc: "Our service & responsibility don't end with tax filing, we are open 365 days to assist in case of queries from tax agencies." },
  { icon: '✏️', title: 'Amendments', desc: "Whether it's correcting errors, claiming overlooked deductions, or updating your filing status, our team of experts will guide you through every step." },
];

const WHY = [
  { icon: '💸', title: 'Free Tax Quotation', desc: "Don't pay before tax quotation from us. We first prepare your tax returns entirely free and fee can be paid only after tax estimates." },
  { icon: '✅', title: '100% Accuracy Guarantee', desc: "We believe in the importance of accuracy and we are confident in our team's ability. 100% Fee Refund if erroneous tax returns filed." },
  { icon: '📆', title: 'Open All The Year', desc: "Our responsibility don't end with just tax filing. We are open round the year and always at your service in case of queries from tax agencies." },
  { icon: '🎁', title: 'Complementary Services', desc: 'Offer free services like Extension, W4, FBAR & India Tax Filing as a token of gratitude — our way of saying thank you for being a valued part of our success.' },
  { icon: '💡', title: 'Transparent Pricing', desc: 'Competitive pricing without compromising on quality. No Hidden Fees & Clear Cost Breakdown through tax estimates.' },
  { icon: '🔒', title: 'Free Audit Defense', desc: "Audits can be complex and stressful, but you don't have to face them alone — we provide expert support and peace of mind every step of the way." },
];

const TESTIMONIALS = [
  { text: 'UsTaxFiler has been helping us filing taxes for the last 4 years, they have been extremely professional, helpful and patient in answering all the tax related questions. I highly recommend to anyone who wants to file taxes.', author: 'Ram Shankar', loc: 'Atlanta, GA' },
  { text: 'My tax return is little complex as we have LLC and employee stock options too, exceptionally done by UsTaxFiler and very satisfied with their approach and knowledge, the process was smooth and done on time.', author: 'Dipankar Balasubramanian', loc: 'San Jose, CA' },
  { text: 'I am a student from Nepal and UsTaxFiler has been filing my tax returns for the last 3 years, they are masters in US Taxation and very good in handling student tax returns. Thanks so much! You were very helpful and put my mind at ease!', author: 'Agharna Battacharya', loc: 'Houston, TX' },
  { text: 'I am very pleased with the expertise, professionalism, and prompt support from the entire team, Their service offering was exactly what I needed to give me peace of mind regarding my complex tax situation as a US Citizen.', author: 'Deepak M Nair', loc: 'New York City, NY' },
  { text: 'Excellent service, informative, precise and hassle free! very knowledgeable about international / expat situations.', author: 'Srinivas Konatham', loc: 'Tempe, AZ' },
  { text: 'Seamless Service and Professional, I am very satisfied with the commendable job on my tax returns.', author: 'Vikas Kollipara', loc: 'Chicago, IL' },
];

const RESOURCES = [
  { emoji: '🔄', title: 'Check Your Federal and State Refund Status', href: '#' },
  { emoji: '💳', title: 'Pay Federal and State Taxes Online', href: '#' },
  { emoji: '🪪', title: 'Apply ITIN for Yourself, Spouse or Dependents', href: '/services#itin' },
  { emoji: '📁', title: 'Record Keeping Management', href: '#' },
];

export default function Home() {
  return (
    <div>

      {/* ════ HERO ════ */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light min-h-[88vh] flex items-center overflow-hidden">
        {/* dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize:"28px 28px"}} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-semibold tracking-[3px] uppercase mb-4">🇺🇸 Trusted Since 2009 · 100,000+ Happy Clients</p>
            <h5 className="text-white/70 font-body font-medium text-lg mb-2">Local, State</h5>
            <h1 className="text-white font-display font-black leading-tight mb-6" style={{fontSize:'clamp(2.8rem,5vw,4.2rem)'}}>
              or <em className="text-gold not-italic">Federal Taxes</em>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">
              Maximum Tax Refunds With The Best In Class Customer Service At An Affordable &amp; Lowest Tax Filing Fee
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link to="/contact" className="btn-gold">Get in Touch</Link>
              <Link to="/about" className="btn-outline-white">Learn More</Link>
            </div>

            {/* badges */}
            <div className="flex flex-wrap gap-3 mb-14">
              {['24/7 Support During Tax Season','100% Accuracy Guarantee','Free Tax Quotation','Unlimited Tax Advice'].map(t=>(
                <div key={t} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/85">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />{t}
                </div>
              ))}
            </div>

            {/* stats row */}
            <div className="flex flex-wrap gap-10">
              {[['20+','Years Experience'],['15+','Tax Experts'],['100K+','Happy Clients'],['200K+','Returns Filed']].map(([v,l])=>(
                <div key={l}>
                  <div className="font-display text-3xl font-black text-gold">{v}</div>
                  <div className="text-white/60 text-xs mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ FEATURE CARDS (overlap) ════ */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-10">
          {[
            {n:'01', t:'24/7 Support', d:'Committed to providing the highest level of service. Teams of skilled tax experts available round the clock during tax season.'},
            {n:'02', t:'100% Customer Satisfaction', d:'Customer satisfaction remains our top priority and we are committed to maintain it. Our mission is simple: 100% Customer Satisfaction.'},
            {n:'03', t:'Unlimited Tax Advice', d:'Optimize your tax strategies year-round, not just during tax season, get expert tax planning advice year-round at no additional cost.'},
          ].map(f=>(
            <div key={f.n} className="feature-card">
              <div className="font-display text-4xl font-black text-gray-100 mb-2">{f.n}</div>
              <h3 className="text-navy font-display text-lg font-bold mb-2">{f.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ════ CORE SERVICES ════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">What We Offer</div>
          <h2 className="text-navy font-display text-4xl font-bold mb-3">Our Core Services</h2>
          <p className="text-gray-500 max-w-2xl mb-14">Having more than 20 Years of Professional Experience, We provide expert tax and advisory services to individuals and small businesses.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s=>(
              <div key={s.title} className="service-card cursor-default">
                <div className="service-icon-box">{s.icon}</div>
                <h4 className="font-display text-navy text-lg font-bold mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-navy">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ════ WHY US ════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="text-navy font-display text-4xl font-bold mb-3">Why UsTaxFiler</h2>
          <p className="text-gray-500 max-w-2xl mb-14">Witness our Masterful Experience on Tax Strategies and Filing of Individual and Business Tax Returns.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map(w=>(
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <div>
                  <h4 className="font-display text-navy font-bold mb-1.5">{w.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ STATS BAND ════ */}
      <section className="bg-gradient-to-r from-navy-dark via-navy to-navy-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-white font-display text-3xl font-bold mb-4">Our Proven Track Record</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
              UsTaxFiler is a leading tax consulting firm with a proven track record of delivering exceptional results. Our team of experienced tax professionals has helped numerous clients navigate complex tax regulations.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[['20+','Years Of Experience'],['15+','Tax Experts'],['100K+','Happy Clients'],['24/7','During Tax Season']].map(([v,l])=>(
              <div key={l}>
                <div className="stat-val">{v}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ RESOURCES ════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">Helpful Tools</div>
          <h2 className="text-navy font-display text-4xl font-bold mb-14">Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESOURCES.map(r=>(
              <a key={r.title} href={r.href} className="no-underline group">
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-lg border border-gray-100 hover:border-gold transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="text-4xl mb-4">{r.emoji}</div>
                  <p className="text-navy font-semibold text-sm leading-snug group-hover:text-gold transition-colors">{r.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">Client Stories</div>
          <h2 className="text-navy font-display text-4xl font-bold mb-14">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t=>(
              <div key={t.author} className="testimonial-card">
                <div className="text-gold text-4xl font-serif leading-none mb-3">"</div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-5">{t.text}</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-navy text-sm">{t.author}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA BANNER ════ */}
      <section className="bg-gold py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-navy text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-navy/70 max-w-xl mx-auto mb-10">Let our expert tax professionals handle your taxes while you focus on what matters most.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-navy">Contact Us Today</Link>
            <Link to="/services" className="inline-block border-2 border-navy text-navy font-bold px-7 py-3.5 rounded-lg hover:bg-navy hover:text-white transition-all duration-200 cursor-pointer">Explore Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
