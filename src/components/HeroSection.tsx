export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end md:flex-row md:items-center mt-[var(--navbar-h)] min-h-[calc(100vh-var(--navbar-h))] overflow-hidden"
    >
      <img
        src="/dsb-bookkeeping-hero.jpeg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute left-0 right-0 w-full object-cover [object-position:85%_0%] h-[100%] -top-[8%] md:top-0 md:h-full md:[object-position:68%_50%]"
      />

      {/* Desktop: left-to-right gradient */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-dark/90 via-dark/65 to-dark/15" />

      {/* Mobile: bottom-up gradient, only covers lower portion */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-dark/95 via-dark/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-10 md:px-10 md:py-0">
        <div className="max-w-xl">
          <span className="text-gold text-xs md:text-sm tracking-[0.25em] uppercase font-medium">
            Professional Bookkeeping Services
          </span>

          <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Expert <span className="text-gold">Bookkeeping</span>
            <br />
            You Can Trust
          </h1>

          <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-md">
            At DSB Bookkeeping, we help Australian business owners take control of their finances
            through accurate bookkeeping, payroll support, reconciliations, and financial reporting.
            Our goal is to provide clarity, reduce stress, and give you confidence that your books
            are up to date and working for your business.
          </p>

          <div className="mt-7 flex flex-col md:flex-row gap-4">
            <a
              href="#contact"
              className="text-center w-full md:w-64 py-3 bg-gold text-dark font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors duration-200"
            >
              BOOK A FREE HEALTH CHECK
            </a>
            <a
              href="#services"
              className="text-center w-full md:w-64 py-3 border border-gold text-gold font-semibold text-sm tracking-wider uppercase hover:bg-gold hover:text-dark transition-colors duration-200"
            >
              HOW WE CAN HELP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
