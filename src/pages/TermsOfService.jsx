import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <div>
        <Link to="/" className="text-purple-400 text-xs font-semibold uppercase tracking-wider hover:underline">
          ← Back to Store
        </Link>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-3">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: October 1, 2026
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed border-t border-slate-800 pt-8">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">1. Agreement to Terms</h2>
          <p className="text-slate-400">
            By accessing or placing an order through SuvoraNova ("Store"), you agree to be bound by these Terms of Service and all applicable local and international laws. If you do not accept these terms, please do not use this platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">2. Ordering & Payment Terms</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li><strong className="text-slate-200">Order Acceptance:</strong> All orders are subject to acceptance and product availability. We reserve the right to cancel or limit quantity on any order prior to dispatch.</li>
            <li><strong className="text-slate-200">Pricing & Currency:</strong> Listed prices are shown in USD ($) unless otherwise indicated. Applicable taxes and shipping fees are calculated during checkout prior to final order confirmation.</li>
            <li><strong className="text-slate-200">Payment Authorization:</strong> You represent and warrant that you are authorized to use any payment method provided during checkout.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">3. Shipping & Global Delivery</h2>
          <p className="text-slate-400">
            We fulfill orders across our designated shipping regions (United States, United Kingdom, Canada, Kenya, Nigeria, South Africa, Tanzania). Estimated delivery windows are provided at checkout. International customers are responsible for any applicable local customs duties, taxes, or import clearance fees.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">4. Returns & Refund Policy</h2>
          <p className="text-slate-400">
            Items in unused condition with original packaging may be returned within 30 days of delivery. Approved refunds will be issued to the original payment method within 5–7 business days following item inspection.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">5. Intellectual Property Rights</h2>
          <p className="text-slate-400">
            All original media, graphics, site layouts, brand trademarks, and design code on SuvoraNova are the exclusive property of SuvoraNova and protected under global copyright laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">6. Limitation of Liability</h2>
          <p className="text-slate-400">
            SuvoraNova shall not be liable for indirect, incidental, or consequential damages resulting from the use of, or inability to use, our services or products beyond the purchase price of the item in question.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">7. Governing Law & Contact</h2>
          <p className="text-slate-400">
            These terms are governed by commercial retail laws. For inquiries concerning legal terms, email us at <a href="mailto:legal@suvoranova.com" className="text-purple-400 hover:underline">legal@suvoranova.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}