import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const INDIVIDUAL_LIST = [
  'Strategic Tax Planning For Individuals',
  'Federal, State and Local Income Tax Return Preparation',
  'Tax Planning and Preparation of US Expatriate Returns',
  'ITIN (Form W7) Services',
  'E-Filing / Paper Filing',
  'Alternative Minimum Tax Planning',
  'Multi-state Tax Planning',
  'Amendment Tax Returns',
  'Double Taxation Advisory Services',
  'Extension of Federal and State Returns',
];

const BUSINESS_TYPES = [
  { t: 'Sole Proprietors', d: 'Minimize your tax liabilities by making the best of your business losses. The owner & the business are same legally — all business expenses, revenue, income, assets and liabilities are assumed by the owner.' },
  { t: 'General Partnerships', d: 'Taxes are paid according to the percentage with which the business holders own the business. Form 1065 shall be filed by the Partnerships and the Partnership shall issue Schedule K-1s to its partners.' },
  { t: 'S Corporations', d: "An S-Corp enables its owners to pass corporate income, deductions, losses, and credits to their shareholders. An S-Corp shall file Form 1120S with the IRS and issue Schedule K-1s to all its shareholders." },
  { t: 'C Corporations', d: 'Unlike S Corps, C Corps are different taxable entities as they file and pay taxes at the corporate level. UsTaxFiler, by invoking the relevant tax laws, tries to minimize the tax bill. These entities shall file Form 1120 with the IRS.' },
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
  { id: 'individual', label: '👤 US Individual Tax' },
  { id: 'business',   label: '🏢 US Business Tax' },
  { id: 'itin',       label: '🪪 ITIN Services' },
  { id: 'fbar',       label: '📊 FBAR / FATCA' },
  { id: 'india',      label: '🇮🇳 Indian Tax' },
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
                <h2 className="text-navy font-display text-3xl font-bold mb-2">US Individual Tax Services</h2>
                <h3 className="text-navy-light font-display text-xl mb-4">Federal, State And Local Tax Filing Services</h3>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6">
                  <p>UsTaxFiler® is a dedicated tax filing company, a registered Electronic Return Originator (ERO) with the IRS and governed by Circular 230 of IRS Rules.</p>
                  <p>The main distinct of UsTaxFiler®, when compared to other tax consultants in the industry, is to carry out the preparation and filing only by the Tax Professionals and the tax returns are thoroughly studied and conducts multi-level accuracy reviews before they actually get filed.</p>
                  <p>We assure 100% accuracy in the tax preparation as all the tax returns are prepared only by the qualified professionals.</p>
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
                  <Link to="/contact" className="block text-center bg-gold text-navy font-bold py-3 rounded-xl hover:bg-gold-light transition-colors no-underline">Get Free Quote</Link>
                </div>
              </div>
            </div>
          )}

          {/* ── BUSINESS ── */}
          {tab==='business' && (
            <div>
              <div className="section-tag">Business Tax</div>
              <h2 className="text-navy font-display text-3xl font-bold mb-2">US Business Tax Services</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-12">UsTaxFiler provide Tax Filing and Planning Strategies for business enterprises of all types and sizes.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BUSINESS_TYPES.map(b=>(
                  <div key={b.t} className="service-card">
                    <div className="service-icon-box">🏢</div>
                    <h4 className="font-display text-navy text-lg font-bold mb-2">{b.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.d}</p>
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
                      <p>An ITIN application (Form W7) shall be attached to the Federal Tax Return only. UsTaxFiler provides a seamless and effortless procedure to obtain your ITIN.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <h4 className="font-display text-xl font-bold mb-4">ITIN Application Process</h4>
                  {['Submit your documents to UsTaxFiler','We prepare your Form W7 application','Application attached to your Federal Tax Return','ITIN issued by IRS (6–8 weeks)','Start filing your US taxes'].map((s,i)=>(
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
          {tab==='fbar' && (
            <div>
              <div className="section-tag">Foreign Reporting</div>
              <h2 className="text-navy font-display text-3xl font-bold mb-10">FBAR & FATCA Services</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="service-card">
                  <div className="service-icon-box">🏦</div>
                  <h4 className="font-display text-navy text-xl font-bold mb-3">FBAR (Foreign Bank Account Reporting)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">All US Citizens and Residents who have a financial interest in or signature authority over any financial account in a foreign country and if the aggregate value of these accounts together exceed <strong>$10,000</strong> at any time during the tax year, then it is mandatory to file FBAR with IRS.</p>
                  <div className="bg-gold-pale rounded-xl p-4">
                    <p className="text-yellow-800 text-xs font-semibold">Filed using: FinCEN Form 114</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon-box">🌐</div>
                  <h4 className="font-display text-navy text-xl font-bold mb-3">FATCA (Foreign Account Tax Compliance Act)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Under FATCA, certain U.S. taxpayers holding financial assets outside the United States must report those assets to the IRS on <strong>Form 8938</strong>. Thresholds:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><span className="text-gold">✓</span> Unmarried: &gt; $50,000 on last day or $75,000 any time</li>
                    <li className="flex gap-2"><span className="text-gold">✓</span> Married filing jointly: &gt; $100,000 / $150,000</li>
                    <li className="flex gap-2"><span className="text-gold">✓</span> Married filing separately: &gt; $50,000 / $75,000</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 service-card">
                <div className="service-icon-box">⚖️</div>
                <h4 className="font-display text-navy text-xl font-bold mb-3">Representation Services</h4>
                <p className="text-gray-600 text-sm leading-relaxed">The IRS has three years from the due date of the tax return to assess any additional taxes. UsTaxFiler® provides representation services if the taxpayer receives any audit notice from the IRS. The taxpayer can write a Power of Attorney (Form 2848) appointing our Enrolled Agent or CPA to represent the case before the IRS.</p>
              </div>
            </div>
          )}

          {/* ── INDIA ── */}
          {tab==='india' && (
            <div>
              <div className="section-tag">Indian Tax</div>
              <h2 className="text-navy font-display text-3xl font-bold mb-2">Indian Tax Filing Services</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-10">UsTaxFiler®, with a processing center established in India, also files Indian Tax Returns for its US tax clients who are required to file tax returns in India. An individual taxpayer who is either a full year non-resident / part year resident of India during the tax year may still need to file.</p>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                  <h4 className="text-navy font-semibold mb-4 font-body">Situations that require filing tax returns in India:</h4>
                  <ul className="space-y-0 list-none p-0">
                    {INDIA_LIST.map(s=>(
                      <li key={s} className="flex items-start gap-3 py-3.5 border-b border-gray-100 text-sm text-gray-700">
                        <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 text-white">
                    <div className="text-4xl mb-4">🇮🇳</div>
                    <h4 className="font-display text-xl font-bold mb-3">NRI Tax Experts</h4>
                    <p className="text-white/65 text-sm leading-relaxed mb-6">Our team specializes in handling dual-country tax obligations for US-based Indians, ensuring full compliance in both countries.</p>
                    <Link to="/contact" className="block text-center bg-gold text-navy font-bold py-3 rounded-xl hover:bg-gold-light transition-colors no-underline">Get Started</Link>
                  </div>
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
