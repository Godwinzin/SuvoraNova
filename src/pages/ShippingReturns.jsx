import { Link } from 'react-router-dom';

export default function ShippingReturns() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <div>
        <Link to="/" className="text-purple-400 text-xs font-semibold uppercase tracking-wider hover:underline">
          ← Back to Store
        </Link>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-3">
          Shipping & Returns
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Everything you need to know about order delivery, tracking, and product returns.
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed border-t border-slate-800 pt-8">
        
        {/* Shipping Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-purple-400">01.</span> Shipping Policy
          </h2>
          <p className="text-slate-400">
            We offer international shipping across our designated delivery regions. Orders are processed Monday through Friday (excluding national holidays) within 24 to 48 hours of purchase.
          </p>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Supported Delivery Regions & Estimated Timelines
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              <li className="flex justify-between border-b border-slate-800/60 pb-1">
                <span>🇺🇸 United States</span>
                <span className="text-slate-200 font-medium">3–5 Business Days</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-1">
                <span>🇬🇧 United Kingdom</span>
                <span className="text-slate-200 font-medium">3–5 Business Days</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-1">
                <span>🇨🇦 Canada</span>
                <span className="text-slate-200 font-medium">4–6 Business Days</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-1">
                <span>🇰🇪 Kenya</span>
                <span className="text-slate-200 font-medium">2–4 Business Days</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-1">
                <span>🇳🇬 Nigeria</span>
                <span className="text-slate-200 font-medium">3–5 Business Days</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-1">
                <span>🇿🇦 South Africa</span>
                <span className="text-slate-200 font-medium">3–5 Business Days</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-1">
                <span>🇹🇿 Tanzania</span>
                <span className="text-slate-200 font-medium">2–4 Business Days</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Order Tracking Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-purple-400">02.</span> Order Tracking
          </h2>
          <p className="text-slate-400">
            Once your order dispatches, you will receive an update with a tracking reference. You can view real-time status changes anytime via our <Link to="/orders" className="text-purple-400 hover:underline">Track Orders</Link> portal.
          </p>
        </section>

        {/* Returns & Refunds Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-purple-400">03.</span> 30-Day Return Policy
          </h2>
          <p className="text-slate-400">
            If you are not completely satisfied with your purchase, you may return eligible items within 30 days of receipt for a full refund or exchange.
          </p>

          <div className="space-y-2 text-xs text-slate-400">
            <h3 className="font-semibold text-slate-200">Return Eligibility Criteria:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Items must be unworn, unwashed, and in original packaging.</li>
              <li>All original tags and labels must remain attached.</li>
              <li>Proof of purchase (Order ID) must be provided.</li>
            </ul>
          </div>
        </section>

        {/* Refund Process */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-purple-400">04.</span> Refunds & Processing Time
          </h2>
          <p className="text-slate-400">
            Once your returned package is received and inspected, we will send an email confirmation. Approved refunds are credited back to your original payment method within 5 to 7 business days.
          </p>
        </section>

      </div>
    </main>
  );
}