export default function Topbar() {
  return (
    <div className="bg-navy-dark text-blue-200 text-xs py-1.5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center flex-wrap gap-2">
        <a href="mailto:contact@ustaxfiler.com" className="topbar-link flex items-center gap-1.5">
          ✉ contact@ustaxfiler.com
        </a>
        <div className="flex items-center gap-5 flex-wrap">
          <span className="flex items-center gap-1.5">🇺🇸 <a href="tel:+14704448100" className="topbar-link">+1-470-444-8100</a></span>
          <span className="flex items-center gap-1.5">🇮🇳 <a href="tel:+917207057471" className="topbar-link">+91 7207057471</a></span>
          <a href="https://wa.me/+919121157586" target="_blank" rel="noreferrer" className="topbar-link flex items-center gap-1">💬 +91 9121157586</a>
          <span className="text-blue-300/30">|</span>
          <a href="#" className="topbar-link">Login</a>
          <span className="text-blue-300/30">|</span>
          <a href="#" className="topbar-link">Register</a>
        </div>
      </div>
    </div>
  );
}
