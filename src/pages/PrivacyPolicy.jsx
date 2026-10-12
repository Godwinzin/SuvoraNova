import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <div>
        <Link to="/" className="text-purple-400 text-xs font-semibold uppercase tracking-wider hover:underline">
          ← Back to Store
        </Link>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-3">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: October 1, 2026
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed border-t border-slate-800 pt-8">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">1. Overview & Commitment</h2>
          <p className="text-slate-400">
            ShopSphere ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, store, process, and safeguard your information when you visit our website, purchase products, or interact with our customer support channels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">2. Information We Collect</h2>
          <p className="text-slate-400">
            We collect information that you directly provide to us or that is automatically generated during your store interactions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li><strong className="text-slate-200">Personal Contact Data:</strong> Name, billing address, shipping address, email address, and phone number provided at checkout or account registration.</li>
            <li><strong className="text-slate-200">Transactional Information:</strong> Payment confirmations, transaction reference IDs, items ordered, and order fulfillment history.</li>
            <li><strong className="text-slate-200">Device & Usage Data:</strong> IP address, browser type, operating system, pages visited, and local storage state utilized to keep track of your active shopping cart.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">3. How We Use Your Information</h2>
          <p className="text-slate-400">
            We use collected data solely for legitimate business operations, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Processing, fulfilling, and delivering your orders.</li>
            <li>Sending automated transactional confirmations, order status updates, and tracking links.</li>
            <li>Responding to customer support inquiries via email or WhatsApp.</li>
            <li>Detecting and preventing fraudulent transactions or unauthorized access.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">4. Payment Processing & Data Security</h2>
          <p className="text-slate-400">
            We prioritize industry-standard encryption protocols (SSL/TLS) across all transaction routes. Payment card details are never stored directly on our core servers; they are processed securely through PCI-DSS compliant payment gateways.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">5. Local Storage & Cookies</h2>
          <p className="text-slate-400">
            ShopSphere utilizes local browser storage (<code className="text-purple-400 bg-slate-900 px-1.5 py-0.5 rounded">localStorage</code>) to maintain session continuity, preserve your cart items, and render purchase history. You may clear your local store state at any time through your browser settings or via the Order History page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">6. Your Data Rights</h2>
          <p className="text-slate-400">
            Depending on your jurisdiction, you hold rights regarding your personal information, including the right to access, correct, or request deletion of stored account data. Contact our Privacy Desk at <a href="mailto:privacy@shopsphere.com" className="text-purple-400 hover:underline">privacy@shopsphere.com</a> for data requests.
          </p>
        </section>
      </div>
    </main>
  );
}