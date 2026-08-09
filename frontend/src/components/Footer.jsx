import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60 pt-14">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 no-underline">
              <span className="font-display font-bold text-lg text-white">Yoga<span className="text-gold">Tax</span>Solution</span>
            </Link>
            <p className="text-sm leading-7">
             YogaTax Solution provides professional tax and accounting services with a personalized approach. We specialize in tax preparation, financial reporting, and data-driven insights to help clients make smart financial decisions.
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

       

          {/* Head Office */}
          <div>
           
            <address className="text-sm not-italic leading-7 text-white/60">
             1333 Corporate Dr Suite 266 Irving, TX 75038
           <br/>
              📞 <a href="tel:+1 (469) 231-9102" className="text-gold hover:text-gold-light no-underline">+1 (469) 231-9102</a><br/>
              ✉ <a href="mailto:Taxyogchaudhary@gmail.com" className="text-gold hover:text-gold-light no-underline">Taxyogchaudhary@gmail.com</a>
            </address>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/40">© {new Date().getFullYear()} Yoga Tax Solution. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
