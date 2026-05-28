import { InlineWidget } from 'react-calendly';

const CALENDLY_URL = 'https://calendly.com/dsbbookkeeping/30min';

export default function BookingSection() {
  return (
    <section id="contact" className="py-24 bg-dark-card border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            Book a Session
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
            Get a Free Bookkeeping Health Check
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto leading-relaxed">
            Not sure if your books are in good shape? Pick a time that works for
            you and we'll take a look — no obligation, no jargon.
          </p>
        </div>

        <div className="border border-dark-border overflow-hidden">
          <InlineWidget
            url={CALENDLY_URL}
            styles={{ height: '700px', minWidth: '320px' }}
            pageSettings={{
              backgroundColor: '1a1a1a',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'C9A84C',
              textColor: 'ffffff',
            }}
          />
        </div>
      </div>
    </section>
  );
}
