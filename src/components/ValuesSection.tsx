import { FaShieldAlt, FaStar, FaCertificate } from 'react-icons/fa';

const values = [
  {
    icon: FaShieldAlt,
    title: 'Fully Insured',
    description:
      'Professional Indemnity & Public Liability insurance so you can engage our services with complete confidence.',
  },
  {
    icon: FaStar,
    title: 'Reputable',
    description:
      'Australian Owned & Operated. Over 10 years of experience delivering trusted bookkeeping and BAS services.',
  },
  {
    icon: FaCertificate,
    title: 'Certified',
    description:
      'Registered BAS Agent with the Tax Practitioners Board. Fully compliant with ATO requirements.',
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="py-24 bg-dark-card border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 border border-dark-border hover:border-gold/40 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-dark border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3 tracking-wide">{title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
