import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <img
              src="/dsb-bookkeeping-logo-1.jpeg"
              alt="DSB Bookkeeping"
              className="h-14 w-auto object-contain object-left"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Accurate, reliable bookkeeping for Australian small businesses.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-8 md:col-span-1">
            <div>
              <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/#services"
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3 text-white/60 text-sm">
              {/* Placeholder — contact details to be provided by client */}
              <li>Email: —</li>
              <li>Phone: —</li>
              <li>Service Area: Australia</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center md:text-left leading-relaxed">
            DSB Bookkeeping is a Registered BAS Agent. Information on this website is general in nature and does not constitute financial advice.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-white/30 text-xs">
              © {new Date().getFullYear()} DSB Bookkeeping
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
