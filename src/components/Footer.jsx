import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60 pt-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 no-underline">
              <span className="text-xl">🦅</span>
              <span className="font-display font-bold text-lg text-white">US<span className="text-gold">Tax</span>Filer</span>
            </Link>
            <p className="text-sm leading-7">
              UsTaxFiler is a dedicated US Tax Filing Company formed by professionals in the year 2009. We offer a wide range of services to Salaried, Self-Employed & High Net worth Individuals and Small Business Enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm list-none p-0">
              {[['Home','/'],['About Us','/about'],['Services','/services'],['Contact Us','/contact']].map(([l,p])=>(
                <li key={p}><Link to={p} className="hover:text-gold transition-colors no-underline text-white/60">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Resources</h4>
            <ul className="space-y-2.5 text-sm list-none p-0">
              <li><a href="#" className="hover:text-gold transition-colors no-underline text-white/60">Check Federal & State Refund Status</a></li>
              <li><a href="#" className="hover:text-gold transition-colors no-underline text-white/60">Pay Federal & State Taxes Online</a></li>
              <li><Link to="/services#itin" className="hover:text-gold transition-colors no-underline text-white/60">Apply ITIN for Yourself / Spouse</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors no-underline text-white/60">Record Keeping Management</a></li>
            </ul>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Head Office</h4>
            <address className="text-sm not-italic leading-7 text-white/60">
              US Tax Filer<br/>
              Hitech City - JNTU Road<br/>
              Manjeera Commercial<br/>
              Hyderabad, Telangana - 500072<br/><br/>
              📞 <a href="tel:+14704448100" className="text-gold hover:text-gold-light no-underline">(US) +1-470-444-8100</a><br/>
              📞 <a href="tel:+917207057471" className="text-gold hover:text-gold-light no-underline">(India) +91 7207057471</a><br/>
              ✉ <a href="mailto:contact@ustaxfiler.com" className="text-gold hover:text-gold-light no-underline">contact@ustaxfiler.com</a>
            </address>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/40">© {new Date().getFullYear()} US TAX FILER. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
