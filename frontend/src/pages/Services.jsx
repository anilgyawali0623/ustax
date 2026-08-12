import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const INDIVIDUAL_LIST = [
  'Strategic Tax Planning for Individuals',
  'Federal Income Tax Return Preparation',
  'State & Local Income Tax Return Preparation',
  'Multi-State Tax Return Preparation',
  'Tax Planning & Preparation for U.S. Expatriates',
  'ITIN Application & Renewal Services (Form W-7)',
  'Federal & State Tax E-Filing',
  'Paper Tax Filing Services',
  'Alternative Minimum Tax (AMT) Planning',
  'Amended Tax Returns (Form 1040-X)',
  'Tax Extension Filing – Federal & State',
  'Double-Taxation Planning & Advisory',
  'Tax Compliance & Filing Support',
];

const BUSINESS_TYPES = [
  {
    t: 'Sole Proprietors',
    d: (
      <>
        <p className="mb-3">
          A sole proprietorship is owned and operated by one individual.
          Business income and eligible expenses are generally reported on the
          owner’s individual tax return.
        </p>

        <ul className="space-y-1">
          <li>
            <strong>Form 1040</strong> – Individual Income Tax Return
          </li>
          <li>
            <strong>Schedule C (Form 1040)</strong> – Profit or Loss from
            Business
          </li>
          <li>
            <strong>Schedule SE (Form 1040)</strong> – Self-Employment Tax,
            when applicable
          </li>
          <li>
            <strong>Form 1040-ES</strong> – Estimated Tax for Individuals,
            when applicable
          </li>
        </ul>
      </>
    ),
  },

  {
    t: 'General Partnerships',
    d: (
      <>
        <p className="mb-3">
          A partnership generally passes its income, deductions, credits, and
          other tax items through to its partners. Each partner reports their
          share of these items on their individual tax return based on the
          partnership agreement and applicable tax rules.
        </p>

        <ul className="space-y-1">
          <li>
            <strong>Form 1065</strong> –  Return of Partnership Income
          </li>
          <li>
            <strong>Schedule K-1 (Form 1065)</strong> – Partner’s Share of
            Income, Deductions, Credits, etc.
          </li>
          <li>
            <strong>Form 1040</strong> – Individual Income Tax Return
          </li>
          <li>
            <strong>Schedule E (Form 1040)</strong> – Supplemental Income and
            Loss
          </li>
          <li>
            <strong>Schedule SE (Form 1040)</strong> – Self-Employment Tax,
            when applicable
          </li>
        </ul>
      </>
    ),
  },

  {
    t: 'S Corporations',
    d: (
      <>
        <p className="mb-3">
          An S corporation generally passes its income, deductions, losses,
          and credits through to its shareholders. The corporation files an
          annual tax return with the IRS, and each shareholder receives a
          Schedule K-1 to report their share of the corporation’s tax items.
        </p>

        <ul className="space-y-1">
          <li>
            <strong>Form 1120-S</strong> –  Income Tax Return for an
            S Corporation
          </li>
          <li>
            <strong>Schedule K-1 (Form 1120-S)</strong> – Shareholder’s Share
            of Income, Deductions, Credits, etc.
          </li>
          <li>
            <strong>Form 1040</strong> – Individual Income Tax Return
          </li>
          <li>
            <strong>Form 941</strong> – Employer’s Quarterly Federal Tax
            Return, when applicable
          </li>
          <li>
            <strong>Form 940</strong> – Employer’s Annual Federal Unemployment
            (FUTA) Tax Return, when applicable
          </li>
        </ul>
      </>
    ),
  },

  {
    t: 'C Corporations',
    d: (
      <>
        <p className="mb-3">
          A C corporation is a separate taxable entity from its owners and
          generally pays federal income tax at the corporate level. Shareholders
          may also have tax consequences on certain distributions, such as
          dividends.
        </p>

        <ul className="space-y-1">
          <li>
            <strong>Form 1120</strong> –  Corporation Income Tax Return
          </li>
          <li>
            <strong>Form 1120-W</strong> – Estimated Tax for Corporations,
            when applicable
          </li>
          <li>
            <strong>Form 941</strong> – Employer’s Quarterly Federal Tax
            Return, when applicable
          </li>
          <li>
            <strong>Form 940</strong> – Employer’s Annual Federal Unemployment
            (FUTA) Tax Return, when applicable
          </li>
        </ul>
      </>
    ),
  },
];

const INDIA_LIST = [
  'Wages/Salaries received in India while residing in USA during Tax Year',
  'Interest or Dividend earned from any source in India',
  'Property (residential or other) let out during the tax year — rental income',
  'Property sold at a profit or loss during the tax year',
  'Stock transactions made during the tax year in India',
  'Income received as a partner in any Indian partnership firm',
];

const TABS = [
  { id: 'individual', label: '👤 Individual Tax' },
  { id: 'business',   label: '🏢  Business Tax' },
  { id: 'itin',       label: '🪪 ITIN Services' },
  { id: 'fbar',       label: '📊 FBAR / FATCA' },
  { id: 'insurance',       label: '📊 Insurance' },
  {id:"transportation", label:"🚗 Transportation"},
  {id:"representation", label:"⚖️ Representation"},


];

export default function Services() {
  const [tab, setTab] = useState('individual');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#','');
      if (['individual','business','itin','fbar','india'].includes(id)) setTab(id);
    }
  }, [hash]);

  return (
    <div>

      {/* ════ PAGE HERO ════ */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs mb-4">
            <Link to="/" className="text-white/50 hover:text-gold no-underline transition-colors">Home</Link>
            <span className="text-gold">/</span>
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-white font-display text-5xl font-bold mb-4">Optimizing Your Taxes is Our Job!</h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">Comprehensive tax services for individuals, businesses, and international taxpayers — all under one roof.</p>
        </div>
      </div>

      {/* ════ CONTENT ════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            {TABS.map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 font-body cursor-pointer
                  ${tab===t.id ? 'bg-navy text-white border-navy' : 'bg-white text-gray-500 border-gray-200 hover:border-navy hover:text-navy'}`}>
                {t.label}
              </button>
            ))}
          </div>

          {/* ── INDIVIDUAL ── */}
          {tab==='individual' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="section-tag">Individual Tax</div>
                <h2 className="text-navy font-display text-3xl font-bold mb-2"> Individual Tax Services</h2>
                <h3 className="text-navy-light font-display text-xl mb-4">Federal, State And Local Tax Filing Services</h3>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6">
                  <p>It provides professional, accurate, and personalized tax preparation services for individuals and families. Our tax professionals carefully review each return and help clients identify eligible deductions and credits while meeting applicable tax filing requirements..</p>
                </div>
                <h4 className="text-navy font-semibold mb-3 font-body">Services offered with respect to Individual Tax Filing:</h4>
                <ul className="space-y-0 list-none p-0">
                  {INDIVIDUAL_LIST.map(s=>(
                    <li key={s} className="flex items-start gap-3 py-3 border-b border-gray-100 text-sm text-gray-700">
                      <span className="text-gold font-bold mt-0.5 flex-shrink-0">✓</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-navy rounded-2xl p-8 text-white sticky top-24">
                  <h4 className="font-display text-xl font-bold mb-4">Need Help Filing?</h4>
                  <p className="text-white/65 text-sm leading-relaxed mb-6">Our tax professionals are ready to help you maximize your refund and minimize stress.</p>
                  <ul className="space-y-3 mb-8">
                    {['Free Tax Quotation','100% Accuracy Guarantee','Open 365 Days','Multi-level Review Process'].map(f=>(
                      <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-gold text-xs">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block text-center bg-gold text-navy font-bold py-3 rounded-xl hover:bg-gold-light transition-colors no-underline">Contact Us</Link>
                </div>
              </div>
            </div>
          )}


{tab === 'insurance' && (
  <div>
    <div className="section-tag">Insurance</div>

    <h2 className="text-navy font-display text-3xl font-bold mb-3">
      Insurance
    </h2>

    <p className="text-gray-600 text-sm leading-relaxed  mb-10">
      We provide personalized insurance solutions to help individuals and
      businesses protect their assets, manage risks, and plan for the future.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Life Insurance */}
      <div className="service-card">
        <div className="service-icon-box">❤️</div>

        <h4 className="font-display text-navy text-lg font-bold mb-2">
          Life Insurance
        </h4>

        <p className="text-gray-500 text-sm leading-relaxed">
          Protect your loved ones with life insurance coverage that provides
          financial support and peace of mind for the future.
        </p>
      </div>

      {/* Health Insurance */}
      <div className="service-card">
        <div className="service-icon-box">🏥</div>

        <h4 className="font-display text-navy text-lg font-bold mb-2">
          Health Insurance
        </h4>

        <p className="text-gray-500 text-sm leading-relaxed">
          We offer personalized health insurance solutions designed to meet
          your coverage needs and budget, helping you access quality healthcare
          with confidence.
        </p>
      </div>

      {/* Auto Insurance */}
      <div className="service-card">
        <div className="service-icon-box">🚗</div>

        <h4 className="font-display text-navy text-lg font-bold mb-2">
          Auto Insurance
        </h4>

        <p className="text-gray-500 text-sm leading-relaxed">
          Get reliable auto insurance coverage to protect your vehicle from
          accidents, theft, and other unexpected events.
        </p>
      </div>

      {/* Home Insurance */}
      <div className="service-card">
        <div className="service-icon-box">🏠</div>

        <h4 className="font-display text-navy text-lg font-bold mb-2">
          Home Insurance
        </h4>

        <p className="text-gray-500 text-sm leading-relaxed">
          Protect your home and belongings with reliable insurance coverage for
          damage, theft, and other unexpected events.
        </p>
      </div>

    </div>
  </div>
)}



  
            
          {/* ── BUSINESS ── */}
         {tab === 'business' && (
  <div>
    <div className="section-tag">Business Tax</div>

    <h2 className="text-navy font-display text-3xl font-bold mb-2">
      Business Tax Services
    </h2>

    <p className="text-gray-600 text-sm leading-relaxed  mb-12">
      YogaTaxSolution provides Tax Filing and Planning Strategies for business
      enterprises of all types and sizes.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {BUSINESS_TYPES.map((b) => (
        <div key={b.t} className="service-card">
          <div className="service-icon-box">🏢</div>

          <h4 className="font-display text-navy text-lg font-bold mb-2">
            {b.t}
          </h4>

          <div className="text-gray-500 text-sm leading-relaxed">
            {b.d}
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          {/* ── ITIN ── */}
          {tab==='itin' && (
            <div>
              <div className="section-tag">ITIN Services</div>
              <h2 className="text-navy font-display text-3xl font-bold mb-2">Apply ITIN for Yourself, Spouse or Dependents</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                  <div className="why-card">
                    <div className="why-icon">🪪</div>
                    <div>
                      <h4 className="font-display text-navy font-bold mb-1.5">What is an ITIN?</h4>
                      <p>An ITIN is a nine-digit number issued by the IRS to individuals who require an identification number for federal tax purposes.</p>
                    </div>
                  </div>
                  <div className="why-card">
                    <div className="why-icon">👨‍👩‍👧</div>
                    <div>
                      <h4 className="font-display text-navy font-bold mb-1.5">Who Can Apply?</h4>
                      <p>Any individual (taxpayer, spouse, or dependents claimed on the tax return) who is not eligible to get the SSN can apply for ITIN. ITIN shall be used only for tax filing purposes.</p>
                    </div>
                  </div>
                  <div className="why-card">
                    <div className="why-icon">📝</div>
                    <div>
                      <h4 className="font-display text-navy font-bold mb-1.5">How to Apply</h4>
                      <p>An ITIN application (Form W7) shall be attached to the Federal Tax Return only. TaxYogaSolution provides a seamless and effortless procedure to obtain your ITIN.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <h4 className="font-display text-xl font-bold mb-4">ITIN Application Process</h4>
                  {['Submit your documents to UsTaxFiler','We prepare your Form W7 application','Application attached to your Federal Tax Return','ITIN issued by IRS (6–8 weeks)','Start filing your  taxes'].map((s,i)=>(
                    <div key={i} className="flex gap-4 mb-5 last:mb-0">
                      <div className="w-7 h-7 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</div>
                      <p className="text-white/75 text-sm">{s}</p>
                    </div>
                  ))}
                  <Link to="/contact" className="block text-center bg-gold text-navy font-bold py-3 rounded-xl hover:bg-gold-light transition-colors no-underline mt-8">Apply for ITIN</Link>
                </div>
              </div>
            </div>
          )}

          {/* ── FBAR / FATCA ── */}
          
{tab === 'fbar' && (
  <div>
    <div className="section-tag">Foreign Reporting</div>

    <h2 className="text-navy font-display text-3xl font-bold mb-10">
      FBAR & FATCA Services
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* FBAR */}
      <div className="service-card">
        <div className="service-icon-box">🏦</div>

        <h4 className="font-display text-navy text-xl font-bold mb-3">
          FBAR (Foreign Bank Account Reporting)
        </h4>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          All Citizens and Residents who have a financial interest in or
          signature authority over any financial account in a foreign country
          and if the aggregate value of these accounts together exceed $10,000
          at any time during the tax year, then it is mandatory to file FBAR
          (FinCEN Form 114) with IRS.
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          We provide FBAR filing support to help taxpayers meet their foreign
          financial account reporting requirements.
        </p>
      </div>

      {/* FATCA */}
      <div className="service-card">
        <div className="service-icon-box">🌎</div>

        <h4 className="font-display text-navy text-xl font-bold mb-3">
          FATCA (Foreign Account Tax Compliance Act)
        </h4>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Certain taxpayers must report specified foreign financial assets
          on IRS Form 8938 when applicable thresholds are met.
          Thresholds vary by filing status and residency.
        </p>

        <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span>
              Unmarried or Single
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span>
              Married Filing Jointly
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span>
              Married Filing Separately
            </span>
          </li>
        </ul>
      </div>

    </div>
  </div>
)}



{tab === 'transportation' && (
  <div>
    <div className="section-tag">Transportation</div>

    <h2 className="text-navy font-display text-3xl font-bold mb-3">
      Luxury Limousine Service
    </h2>

    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-6">
      Travel in <strong>comfort, style, and luxury</strong> for every
      occasion.
    </p>

    <div className="service-card max-w-2xl">
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        <strong>Airport Transfers</strong> • <strong>Weddings</strong> •{' '}
        <strong>Business Travel</strong> • <strong>Special Events</strong>
      </p>

      <h4 className="font-display text-navy text-lg font-bold mb-2">
        Reserve Your Ride Today!
      </h4>

      <p className="text-gray-600 text-sm">
        📞 <strong>469-231-9102</strong>
      </p>
    </div>
  </div>
)}




{/*  representation */}

{tab === 'representation' && (
  <div>
    <div className="section-tag">Representation Services</div>

    <h2 className="text-navy font-display text-3xl font-bold mb-10">
      Representation Services
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="service-card">
        <div className="service-icon-box">⚖️</div>

        <h4 className="font-display text-navy text-xl font-bold mb-3">
          Representation Services
        </h4>

        <p className="text-gray-600 text-sm leading-relaxed">
          YogaTax Solution provides professional support and representation for
          clients facing IRS audits, notices, and tax matters. With proper
          authorization through Form 2848 (Power of Attorney),
          eligible tax professionals may represent clients (appointing our
          Enrolled Agent or CPA to represent the case) before the IRS and assist
          with responding to tax inquiries and resolving tax issues.
        </p>
      </div>
    </div>
  </div>
)}




         

          {/* Bottom CTA */}
          <div className="mt-20 bg-slate-50 rounded-3xl p-12 text-center">
            <h3 className="font-display text-navy text-3xl font-bold mb-3">Have Questions About Our Services?</h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">Contact us today for a free consultation. Our tax experts are ready to help.</p>
            <Link to="/contact" className="btn-gold">Contact Us Now</Link>
          </div>

        </div>
      </section>

    </div>
  );
}
