export default function Topbar() {
  return (
    <div className="bg-navy-dark text-blue-200 text-xs py-1.5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center flex-wrap gap-2">
        <a href="mailto:contact@ustaxfiler.com" className="topbar-link flex items-center gap-1.5">
          ✉ yogataxchaudhary@gmail.com
        </a>
        <div className="flex items-center gap-5 flex-wrap">
          <span className="flex items-center gap-1.5">🇺🇸 <a href="tel:+14704448100" className="topbar-link">+1 (469) 231-9102</a></span>
          
         
          <span className="text-blue-300/30">|</span>
          
        </div>
      </div>
    </div>
  );
}
