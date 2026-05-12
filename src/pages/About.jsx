import { Link } from 'react-router-dom';

const VALUES = [
  { icon: '🎯', title: 'Mission', desc: 'To provide quality services that exceed the expectations of our esteemed customers and make tax filing hassle-free and affordable.' },
  { icon: '👁️', title: 'Vision', desc: 'To be the most trusted and comprehensive tax services provider for US and Indian taxpayers globally.' },
  { icon: '⚖️', title: 'Integrity', desc: 'We maintain the highest standards of professional ethics, transparency, and accuracy in all our work.' },
  { icon: '🤝', title: 'Client First', desc: 'Customer satisfaction is our top priority — we go above and beyond to deliver exceptional results.' },
  { icon: '📚', title: 'Expertise', desc: 'Our team of qualified professionals brings decades of combined experience to every tax return we file.' },
  { icon: '💼', title: 'Excellence', desc: 'We commit to multi-level accuracy reviews and quality checks on every single return before it is filed.' },
];

const SERVICES = [
  { icon: '👤', title: 'US Individual Tax Services', desc: 'Federal, State and Local Tax Filing · FBAR and FATCA Services · Representation Services', href: '/services#individual' },
  { icon: '🏢', title: 'US Business Tax Services', desc: 'Tax Planning and Filing Strategies For Small and Medium Business Enterprises', href: '/services#business' },
  { icon: '🇮🇳', title: 'Indian Tax Services', desc: 'Indian Tax Return Filing · Representation Services', href: '/services#india' },
];

export default function About() {
  return (
    <div>

      {/* ════ PAGE HERO ════ */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs mb-4">
            <Link to="/" className="text-white/50 hover:text-gold no-underline transition-colors">Home</Link>
            <span className="text-gold">/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-white font-display text-5xl font-bold mb-4">About UsTaxFiler</h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto">A dedicated US Tax Filing Company formed by professionals in the year 2009.</p>
        </div>
      </div>

      {/* ════ ABOUT INTRO ════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Visual block */}
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-dark via-navy to-navy-light rounded-3xl aspect-[4/3] flex flex-col items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize:"24px 24px"}} />
                <div className="font-display text-8xl font-black text-gold relative z-10">2009</div>
                <p className="text-white/70 text-center mt-4 relative z-10 px-8">Founded with a vision to make tax filing hassle-free and affordable for every American.</p>
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-2xl px-6 py-4 shadow-card-lg">
                <div className="font-display text-2xl font-black text-navy">200K+</div>
                <div className="text-navy/70 text-xs font-semibold">Tax Returns Filed</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="section-tag">Our Story</div>
              <h2 className="text-navy font-display text-3xl font-bold mb-6">Trusted Tax Professionals Since 2009</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>UsTaxFiler is a dedicated US Tax Filing Company formed by professionals in the year 2009. We at UsTaxFiler offer a wide range of services to Salaried, Self-Employed & High Net worth Individuals and Small Business Enterprises with respect to filing of Income Tax returns in USA.</p>
                <p>As a practice, our firm hires experienced professionals to serve our clients which enable us to provide the highest quality of service available.</p>
                <p>So far, UsTaxFiler processed more than <strong className="text-navy">200,000 tax returns</strong> (with the client base of <strong className="text-navy">100,000+</strong>) which mountain the experience in dealing with different tax matters. The vision is to provide quality services that exceed the expectations of our esteemed customers.</p>
                <p>UsTaxFiler is known for its expertize in handling simple to most complex tax returns including Stock Options, Income Tax Treaties, Foreign Earned Income Exclusions, Local Tax Returns, International Tax Services, Notices, Amendments, Partnership, S Corp and C Corp Tax Returns.</p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-gold">Get Free Consultation</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════ STATS ════ */}
      <section className="bg-gradient-to-r from-navy-dark via-navy to-navy-light py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[['20+','Years Of Experience'],['15+','Tax Experts'],['100K+','Happy Clients'],['200K+','Returns Filed']].map(([v,l])=>(
              <div key={l}><div className="stat-val">{v}</div><div className="stat-label">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ OUR SERVICES ════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">Our Services</div>
          <h2 className="text-navy font-display text-4xl font-bold mb-3">Having more than 20 Years of Professional Experience</h2>
          <p className="text-gray-500 max-w-2xl mb-14">We provide expert tax and advisory services to individuals and small businesses.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map(s=>(
              <Link key={s.title} to={s.href} className="no-underline group">
                <div className="service-card h-full">
                  <div className="service-icon-box">{s.icon}</div>
                  <h4 className="font-display text-navy text-lg font-bold mb-2 group-hover:text-gold transition-colors">{s.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════ VALUES ════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">Our Values</div>
          <h2 className="text-navy font-display text-4xl font-bold mb-14">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(v=>(
              <div key={v.title} className="why-card">
                <div className="why-icon">{v.icon}</div>
                <div>
                  <h4 className="font-display text-navy font-bold mb-1.5">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="bg-gold py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-navy text-4xl font-bold mb-4">Ready to Experience the UsTaxFiler Difference?</h2>
          <p className="text-navy/70 max-w-xl mx-auto mb-10">Get started with a free consultation today. No obligation, no hidden fees.</p>
          <Link to="/contact" className="btn-navy">Contact Us Today</Link>
        </div>
      </section>

    </div>
  );
}
