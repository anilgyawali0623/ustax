import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: "📋",
    title: "Individual Tax Filing",
    desc: "Specialized in Planning, Preparation and Filing of Individual Tax Returns for Federal and all States including Gift, FATCA & FBAR (Form 1040/1040-NR).",
  },
  {
    icon: "🏢",
    title: "Business Tax Filing",
    desc: "Planning & Filing of Corporate Tax Returns for Federal and all States: 1065/1120/1120-S for Partnerships, S-Corps and C-Corps.",
  },
  {
    icon: "🌍",
    title: "International Tax Filing",
    desc: "Robust Experience in handling International Taxpayer Returns invoking Tax Treaties across multiple countries.",
  },
  {
    icon: "🪪",
    title: "Apply for ITIN",
    desc: "Seamless and Effortless Procedure to get ITIN for Spouse and Dependents through US Tax Filer.",
  },
  {
    icon: "🛡️",
    title: "Audit Representation",
    desc: "Our service & responsibility don't end with tax filing, we are open 365 days to assist in case of queries from tax agencies.",
  },
  {
    icon: "✏️",
    title: "Amendments",
    desc: "Whether it's correcting errors, claiming overlooked deductions, or updating your filing status, our team of experts will guide you through every step.",
  },
];

const WHY = [
  {
    icon: "💸",
    title: "Free Tax Quotation",
    desc: "Don't pay before tax quotation from us. We first prepare your tax returns entirely free and fee can be paid only after tax estimates.",
  },
  {
    icon: "✅",
    title: "100% Accuracy Guarantee",
    desc: "We believe in the importance of accuracy and we are confident in our team's ability. 100% Fee Refund if erroneous tax returns filed.",
  },
  {
    icon: "📆",
    title: "Open All The Year",
    desc: "Our responsibility don't end with just tax filing. We are open round the year and always at your service in case of queries from tax agencies.",
  },
  {
    icon: "🎁",
    title: "Complementary Services",
    desc: "Offer free services like Extension, W4, FBAR & India Tax Filing as a token of gratitude — our way of saying thank you for being a valued part of our success.",
  },
  {
    icon: "💡",
    title: "Transparent Pricing",
    desc: "Competitive pricing without compromising on quality. No Hidden Fees & Clear Cost Breakdown through tax estimates.",
  },
  {
    icon: "🔒",
    title: "Free Audit Defense",
    desc: "Audits can be complex and stressful, but you don't have to face them alone — we provide expert support and peace of mind every step of the way.",
  },
];

const TESTIMONIALS = [
  {
    text: "YogaTaxSolutionhas been helping us filing taxes for the last 4 years, they have been extremely professional, helpful and patient in answering all the tax related questions. I highly recommend to anyone who wants to file taxes.",
    author: "Ram Shankar",
    loc: "Atlanta, GA",
  },
  {
    text: "My tax return is little complex as we have LLC and employee stock options too, exceptionally done by YogaTaxSolutionand very satisfied with their approach and knowledge, the process was smooth and done on time.",
    author: "Dipankar Balasubramanian",
    loc: "San Jose, CA",
  },
  {
    text: "I am a student from Nepal and YogaTaxSolutionhas been filing my tax returns for the last 3 years, they are masters in US Taxation and very good in handling student tax returns. Thanks so much! You were very helpful and put my mind at ease!",
    author: "Agharna Battacharya",
    loc: "Houston, TX",
  },
  {
    text: "I am very pleased with the expertise, professionalism, and prompt support from the entire team, Their service offering was exactly what I needed to give me peace of mind regarding my complex tax situation as a US Citizen.",
    author: "Deepak M Nair",
    loc: "New York City, NY",
  },
  {
    text: "Excellent service, informative, precise and hassle free! very knowledgeable about international / expat situations.",
    author: "Srinivas Konatham",
    loc: "Tempe, AZ",
  },
  {
    text: "Seamless Service and Professional, I am very satisfied with the commendable job on my tax returns.",
    author: "Vikas Kollipara",
    loc: "Chicago, IL",
  },
];

const RESOURCES = [
  {
    emoji: "🔄",
    title: "Check Your Federal and State Refund Status",
    href: "#",
  },
  { emoji: "💳", title: "Pay Federal and State Taxes Online", href: "#" },
  {
    emoji: "🪪",
    title: "Apply ITIN for Yourself, Spouse or Dependents",
    href: "/services#itin",
  },
  { emoji: "📁", title: "Record Keeping Management", href: "#" },
];

export default function Home() {
  return (
    <div>
      {/* ════ HERO ════ */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light min-h-[88vh] flex items-center overflow-hidden">
        {/* dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">
              YogaTax Solution provides professional tax and accounting services
              with a personalized approach. We specialize in tax preparation,
              financial reporting, and data-driven insights to help clients make
              smart financial decisions. Founded by a former Internal Revenue
              Service Tax Examination Technician and a CPA candidate with the
              Texas State Board of Public Accountancy, we bring trusted
              expertise, accuracy, and integrity to every client.YogaTax
              Solution is dedicated to delivering professional accounting and
              tax services with a personalized approach. With strong experience
              in tax preparation, financial reporting, data analysis,
              bookkeeping, financial management and IRS e-filing, we help
              individuals and businesses make informed financial decisions with
              confidence. We also provide business advisory services to support
              growth, improve financial performance, and ensure long-term
              success.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link to="/contact" className="btn-gold">
                Get in Touch
              </Link>
              <Link to="/about" className="btn-outline-white">
                Learn More
              </Link>
            </div>

            {/* badges */}
            <div className="flex flex-wrap gap-3 mb-14">
              {[
                "24/7 Support During Tax Season",
                "100% Accuracy Guarantee",
                "Free Tax Quotation",
                "Unlimited Tax Advice",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/85"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {t}
                </div>
              ))}
            </div>

            {/* stats row */}
          </div>
        </div>
      </section>

      {/* ════ FEATURE CARDS (overlap) ════ */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-10">
          {[
            {
              n: "01",
              t: "24/7 Support",
              d: "Committed to providing the highest level of service. Teams of skilled tax experts available round the clock during tax season.",
            },
            {
              n: "02",
              t: "100% Customer Satisfaction",
              d: "Customer satisfaction remains our top priority and we are committed to maintain it. Our mission is simple: 100% Customer Satisfaction.",
            },
            {
              n: "03",
              t: "Unlimited Tax Advice",
              d: "Optimize your tax strategies year-round, not just during tax season, get expert tax planning advice year-round at no additional cost.",
            },
          ].map((f) => (
            <div key={f.n} className="feature-card">
              <div className="font-display text-4xl font-black text-gray-100 mb-2">
                {f.n}
              </div>
              <h3 className="text-navy font-display text-lg font-bold mb-2">
                {f.t}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ════ CORE SERVICES ════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-tag">What We Offer</div>
          <h2 className="text-navy font-display text-4xl font-bold mb-3">
            Our Core Services
          </h2>
         

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card cursor-default">
                <div className="service-icon-box">{s.icon}</div>
                <h4 className="font-display text-navy text-lg font-bold mb-2">
                  {s.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-navy">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ════ WHY US ════ */}
      

      {/* ════ STATS BAND ════ */}
     

      {/* ════ RESOURCES ════ */}
      

      {/* ════ TESTIMONIALS ════ */}
   

      {/* ════ CTA BANNER ════ */}
      <section className="bg-gold py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-navy text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-navy/70 max-w-xl mx-auto mb-10">
            Let our expert tax professionals handle your taxes while you focus
            on what matters most.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-navy">
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="inline-block border-2 border-navy text-navy font-bold px-7 py-3.5 rounded-lg hover:bg-navy hover:text-white transition-all duration-200 cursor-pointer"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
