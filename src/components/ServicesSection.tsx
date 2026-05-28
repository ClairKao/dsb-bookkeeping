import {
  FaBookOpen,
  FaFileInvoiceDollar,
  FaChartBar,
  FaUsers,
  FaHandshake,
  FaCalculator,
} from 'react-icons/fa';

const services = [
  {
    icon: FaBookOpen,
    title: 'Transaction Categorisation',
    description:
      'Accurate classification of all income and expenses to keep your books organised and tax-ready throughout the year.',
  },
  {
    icon: FaCalculator,
    title: 'Bank Reconciliation',
    description:
      'Regular reconciliation of your bank and credit card accounts to ensure your records match your actual transactions.',
  },
  {
    icon: FaChartBar,
    title: 'Financial Reporting',
    description:
      'Clear and timely Profit & Loss statements and Balance Sheets so you always know where your business stands.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'BAS Preparation & Lodgement',
    description:
      'Preparation and lodgement of your Business Activity Statements, including GST and PAYG withholding obligations.',
  },
  {
    icon: FaUsers,
    title: 'Payroll Processing',
    description:
      'End-to-end payroll management including superannuation, leave entitlements, and Single Touch Payroll (STP) reporting.',
  },
  {
    icon: FaHandshake,
    title: 'Accounts Payable & Receivable',
    description:
      "Tracking of what you owe and what you're owed, so your cash flow stays healthy and nothing slips through the cracks.",
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
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-8 border border-dark-border bg-dark-card hover:border-gold/40 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors duration-300">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
