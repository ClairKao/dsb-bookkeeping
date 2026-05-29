import {
  FaBookOpen,
  FaFileInvoiceDollar,
  FaChartBar,
  FaUsers,
  FaHistory,
  FaClipboardCheck,
} from 'react-icons/fa';

const services = [
  {
    icon: FaBookOpen,
    title: 'Monthly Bookkeeping',
    subtitle: 'Stay On Top Of Your Finances',
    description:
      'Keep your financial records accurate, organised, and up to date with ongoing bookkeeping support tailored to your business. We help you maintain clear financial visibility so you can focus on running and growing your business.',
  },
  {
    icon: FaUsers,
    title: 'Payroll Management',
    subtitle: 'Stress-Free Payroll & STP Reporting',
    description:
      "Ensure your employees are paid correctly and on time while staying compliant with payroll and Single Touch Payroll reporting requirements. We handle the details so you don't have to.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'BAS Preparation & Lodgement',
    subtitle: 'Stay Compliant With Confidence',
    description:
      "We help businesses stay on top of GST obligations and BAS preparation, ensuring your records are organised and ready when it's time to meet ATO requirements.",
  },
  {
    icon: FaChartBar,
    title: 'Financial Reporting',
    subtitle: 'Know Your Numbers',
    description:
      'Receive clear and easy-to-understand financial reports that provide insight into your business performance, helping you make informed decisions with confidence.',
  },
  {
    icon: FaHistory,
    title: 'Catch-Up Bookkeeping',
    subtitle: 'Get Back In Control',
    description:
      'Behind on your bookkeeping? We can help bring your records up to date, clean up historical transactions, and restore confidence in your financial information.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Bookkeeping Health Check',
    subtitle: 'Complimentary Business Review',
    description:
      'Our complimentary Bookkeeping Health Check identifies potential issues, inefficiencies, and opportunities for improvement within your bookkeeping systems. Perfect for businesses wanting a second opinion on their current setup.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-dark border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, subtitle, description }) => (
            <div
              key={title}
              className="flex flex-col gap-5 p-8 border border-dark-border bg-dark-card hover:border-gold/40 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors duration-300">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold text-lg leading-snug">{title}</h3>
                <p className="text-gold/70 text-sm">{subtitle}</p>
              </div>
              <p className="text-white/45 text-sm leading-relaxed border-t border-dark-border/60 pt-4">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
