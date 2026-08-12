import { Link } from "react-router-dom";
import Image from "../../assets/yog.jpeg"; // adjust path to your actual image imports
import Buddha from "../../assets/hbbuddha.webp"; // adjust path to your actual image imports

const VALUES = [
  {
    icon: "🎯",
    title: "Mission",
    desc: "To provide quality services that exceed the expectations of our esteemed customers and make tax filing hassle-free and affordable.",
  },
  {
    icon: "👁️",
    title: "Vision",
    desc: "To be the most trusted and comprehensive tax services provider for USA and Nepal taxpayers globally.",
  },
  {
    icon: "⚖️",
    title: "Integrity",
    desc: "We maintain the highest standards of professional ethics, transparency, and accuracy in all our work.",
  },
  {
    icon: "🤝",
    title: "Client First",
    desc: "Customer satisfaction is our top priority. We go above and beyond to deliver exceptional results.",
  },
  {
    icon: "📚",
    title: "Expertise",
    desc: "Our team of qualified professionals brings decades of combined experience to every tax return we file.",
  },
  {
    icon: "💼",
    title: "Excellence",
    desc: "We commit to multi-level accuracy reviews and quality checks on every single return before it is filed.",
  },
];

const SERVICES = [
  {
    icon: "👤",
    title: " Individual Tax Services",
    desc: "Federal, State and Local Tax Filing · FBAR and FATCA Services · Representation Services",
    href: "/services#individual",
  },
  {
    icon: "🏢",
    title: " Business Tax Services",
    desc: "Tax Planning and Filing Strategies For Small and Medium Business Enterprises",
    href: "/services#business",
  },
];

const attorneys = [
  {
    name: "Yog Chaudhary",
    title:
      "Former IRS Tax Examination Technician | MS in Data Analytics & AI | MBA Finance & Accounting | CPA Candidate",
    bio: "Yog Chaudhary brings strong expertise with nearly 12+ years of experience across Nepal and the United States in taxation, accounting, finance, and data analytics, supported by professional experience at the Former Internal Revenue Service (IRS) in Austin, Texas. He specializes in tax preparation, IRS compliance, bookkeeping, and data-driven financial solutions for individuals and businesses.",
    education:
      "He holds an M.S. in Advanced Data Analytics & Artificial Intelligence Engineering from the University of North Texas and an MBA in Finance & Accounting from Tribhuvan University and is a CPA candidate with the Texas State Board of Public Accountancy.",
    email: "yogataxchaudhary@gmail.com",
    phone: "+1 (469) 231-9102",
    website: "Yogtax.com",
    websiteUrl: "http://Yogtax.com",
    img: Image,
  },
  {
    name: "Himalaya Budhathoki (Himal)",
    title: "CPA | CA | CMA | MSA | Tax & Financial Advisor",
    bio: `Himalaya Budhathoki is a highly experienced accounting and finance professional with nearly 21+ years of international expertise in tax, audit, and financial management across the U.S., Nepal, India, and Qatar. He holds multiple professional credentials, including CPA (AICPA, Colorado), Chartered Accountant (ICAI & ICAN), CMA (IMA), and MS in Accounting from Western Governors University.
    
    `,
    education:
      "His expertise includes tax planning, audit & assurance, financial reporting, SOX compliance, and strategic financial advisory for individuals, businesses, and high-net-worth clients.",
    email: "himalb@hbudhacpa.com",
    phone: "+1 (619) 636-7988",
    website: "budhacpa.com",
    websiteUrl: "https://wwwhbudhacpa.com",
    img: Buddha,
  },

  // Add more team members here — the grid auto-adjusts
];

export default function About() {
  return (
    <div>
      {/* ════ PAGE HERO ════ */}
      <div className="page-hero">
        <div className="mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs">
            <Link
              to="/"
              className="text-white/50 hover:text-gold no-underline transition-colors"
            >
              Home
            </Link>

            <span className="text-gold">/</span>

            <span className="text-white">About Us</span>
          </div>

          <div className="text-white/65 text-base md:text-lg max-w-4xl mx-auto mt-4 space-y-3 leading-relaxed text-left">
            <p>
              YogaTax Solution is a dedicated tax filing company and a
              registered Electronic Return Originator (ERO) with the IRS,
              operating in accordance with IRS Circular 230.
              <br />
              We provide personalized tax and accounting services for
              individuals and businesses, including tax preparation,
              bookkeeping, payroll, financial reporting, data analysis, and IRS
              e-filing.
              <br />
              <p className="mt-2">
                Our goal is to deliver accurate, reliable, and transparent
                solutions that support informed financial decisions and
                long-term success.
              </p>
            </p>
          </div>
        </div>
      </div>

      {/* ════ ABOUT INTRO ════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual block */}
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-dark via-navy to-navy-light rounded-3xl aspect-[4/3] flex flex-col items-center justify-center overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="font-display text-8xl font-black text-gold relative z-10">
                  2025
                </div>
                <p className="text-white/70 text-center mt-4 relative z-10 px-8">
                  Founded with a vision to make tax filing hassle-free and
                  affordable for every American.
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="section-tag">Our Story</div>
              <h2 className="text-navy font-display text-3xl font-bold mb-6">
                Trusted Tax Professionals Since 2025
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                YogaTax Solution provides simple, transparent, and reliable tax
                and accounting services. We understand complex tax regulations
                and provide accurate, personalized guidance to help clients stay
                compliant, save money, and achieve financial success.
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-gold">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ STATS ════ */}
      {/* <section className="bg-gradient-to-r from-navy-dark via-navy to-navy-light py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[['20+','Years Of Experience'],['15+','Tax Experts'],['100K+','Happy Clients'],['200K+','Returns Filed']].map(([v,l])=>(
              <div key={l}><div className="stat-val">{v}</div><div className="stat-label">{l}</div></div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ════ MEET OUR TEAM ════ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">Our Team</div>
          <h2 className="text-navy font-display text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-500 max-w-2xl mb-14">
            Credentialed professionals with decades of combined experience
            across the USA, Nepal
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attorneys.map((a) => (
              <div
                key={a.name}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="flex items-start gap-5 mb-5">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-display text-navy text-lg font-bold mb-1">
                      {a.name}
                    </h4>
                    <p className="text-gold text-xs font-semibold leading-relaxed">
                      {a.title}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {a.bio}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {a.education}
                </p>

                <div className="mt-auto pt-5 border-t border-slate-100 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-gold">✉️</span>
                    <a
                      href={`mailto:${a.email}`}
                      className="hover:text-gold transition-colors no-underline text-gray-600"
                    >
                      {a.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-gold">📞</span>
                    <a
                      href={`tel:${a.phone}`}
                      className="hover:text-gold transition-colors no-underline text-gray-600"
                    >
                      {a.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ OUR SERVICES ════ */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">Our Services</div>

          <p className="text-gray-500 max-w-2xl mb-14">
            We provide expert tax and advisory services to individuals and small
            businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.title} to={s.href} className="no-underline group">
                <div className="service-card h-full">
                  <div className="service-icon-box">{s.icon}</div>
                  <h4 className="font-display text-navy text-lg font-bold mb-2 group-hover:text-gold transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
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
          <h2 className="text-navy font-display text-4xl font-bold mb-14">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="why-card">
                <div className="why-icon">{v.icon}</div>
                <div>
                  <h4 className="font-display text-navy font-bold mb-1.5">
                    {v.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="bg-gold py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-navy/70 max-w-xl mx-auto mb-10">
            Get started with a free consultation today. No obligation, no hidden
            fees.
          </p>
          <Link to="/contact" className="btn-navy">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
