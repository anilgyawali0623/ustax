import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const active = (path) => pathname === path ? 'nav-link nav-link-active' : 'nav-link';
  const close = () => { setMenuOpen(false); setServicesOpen(false); };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[70px] relative">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline" onClick={close}>
          <span className="text-2xl">🦅</span>
          <span className="font-display font-bold text-xl text-navy">
            US<span className="text-gold">Tax</span>Filer
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-navy mb-1.5 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-navy mb-1.5 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-navy rounded transition-all" />
        </button>

        {/* Links */}
        <ul className={`
          flex-col lg:flex-row lg:flex lg:items-center lg:gap-1 list-none m-0 p-0
          ${menuOpen ? 'flex absolute top-[70px] left-0 right-0 bg-white shadow-card-lg p-4 gap-1 z-50' : 'hidden lg:flex'}
        `}>
          <li><Link to="/" className={active('/')} onClick={close}>Home</Link></li>
          <li><Link to="/about" className={active('/about')} onClick={close}>About Us</Link></li>

          {/* Services dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/services" className={active('/services')} onClick={close}>
              Services <span className="text-xs opacity-70">▾</span>
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-xl shadow-card-lg min-w-[220px] py-2 z-50 animate-[fadeDown_0.15s_ease]">
                <Link to="/services#individual" className="dropdown-link" onClick={close}>US Individual Tax Services</Link>
                <Link to="/services#business" className="dropdown-link" onClick={close}>US Business Tax Services</Link>
                <Link to="/services#india" className="dropdown-link" onClick={close}>Indian Tax Services</Link>
              </div>
            )}
          </li>

          <li><Link to="/contact" className={active('/contact')} onClick={close}>Contact Us</Link></li>

          <li className="lg:ml-2">
            <Link to="/contact" className="nav-cta" onClick={close}>Get Started</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
