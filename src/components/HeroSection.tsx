export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end md:flex-row md:items-center mt-20 min-h-[calc(100vh-5rem)] overflow-hidden"
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
            Helping Australian small businesses stay on top of their finances with accurate,
            reliable, and stress-free bookkeeping solutions.
          </p>

          <div className="mt-7 flex gap-4">
            <a
              href="#contact"
              className="px-4 md:px-12 py-3 bg-gold text-dark font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="px-4 md:px-12 py-3 border border-gold text-gold font-semibold text-sm tracking-wider uppercase hover:bg-gold hover:text-dark transition-colors duration-200"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
