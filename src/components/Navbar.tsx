import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={handleHomeClick}>
          <img src="/dsb-bookkeeping-logo-1.jpeg" alt="DSB Bookkeeping" className="h-16 md:h-24 w-auto" />
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-sm tracking-wider text-white/80 hover:text-gold transition-colors duration-200 uppercase"
              onClick={handleHomeClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-sm tracking-wider text-white/80 hover:text-gold transition-colors duration-200 uppercase"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
