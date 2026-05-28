import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/dsb-bookkeeping-logo-1.jpeg" alt="DSB Bookkeeping" className="h-16 w-auto" />
        </div>
        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-sm tracking-wider text-white/80 hover:text-gold transition-colors duration-200 uppercase"
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
