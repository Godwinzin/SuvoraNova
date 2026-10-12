import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "Which countries do you deliver to?",
        a: "We currently ship across select global regions: United States, United Kingdom, Canada, Kenya, Nigeria, South Africa, and Tanzania."
      },
      {
        q: "How long will my order take to arrive?",
        a: "Standard shipping typically takes 3 to 7 business days depending on your destination region and local customs processing."
      }
    ]
  },
  {
    category: "Orders & Returns",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns on unused items in original packaging within 30 days of delivery. Refunds are processed back to your original payment method."
      },
      {
        q: "How do I track my order status?",
        a: "You can track your active orders anytime through our Orders page using your order confirmation ID."
      }
    ]
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (id) => setOpenIdx(openIdx === id ? null : id);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <div>
        <Link to="/" className="text-purple-400 text-xs font-semibold uppercase tracking-wider hover:underline">
          ← Back to Store
        </Link>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-3">
          Frequently Asked Questions
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Find quick answers to common questions about shipping, orders, and returns.
        </p>
      </div>

      <div className="space-y-8 border-t border-slate-800 pt-8">
        {faqs.map((section, sIdx) => (
          <div key={sIdx} className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-400">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.questions.map((item, qIdx) => {
                const id = `${sIdx}-${qIdx}`;
                const isOpen = openIdx === id;
                return (
                  <div key={qIdx} className="border border-slate-800 rounded-xl bg-slate-900/50 overflow-hidden">
                    <button
                      onClick={() => toggle(id)}
                      className="w-full text-left p-4 font-medium text-slate-200 hover:text-white flex justify-between items-center transition"
                    >
                      <span>{item.q}</span>
                      <span className="text-purple-400 font-mono text-lg">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}