import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/60 mt-auto pt-12 pb-8 px-6 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-3">
          <span className="text-lg font-bold text-white tracking-tight">
            Shop<span className="text-purple-500">Sphere</span>
          </span>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
            Simple, reliable, and straightforward modern storefront.
          </p>
        </div>

        {/* Need Help? */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
            Need Help?
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-emerald-400 transition inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                WhatsApp Support
              </a>
            </li>
            <li>
              <a href="mailto:support@shopsphere.com" className="hover:text-white transition">
                Email Support
              </a>
            </li>
            <li>
              <Link to="/orders" className="hover:text-white transition">
                Track Order Status
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-white transition">
                Shipping & Returns
            </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition">
                FAQs
            </Link>
            </li>
          </ul>
        </div>

        {/* Join Us On */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
            Join Us On
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.56-1.25 2.55.07.96.72 1.82 1.64 2.11.96.31 2.08.07 2.79-.62.53-.53.81-1.26.81-2.01V.02z"/>
                </svg>
                TikTok
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 text-slate-400" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Countries We Are In */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
            Countries We're In
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Shipping across global regions:
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-300">
            <span className="bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg">🇺🇸 United States</span>
            <span className="bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg">🇬🇧 United Kingdom</span>
            <span className="bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg">🇨🇦 Canada</span>
            <span className="bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg">🇰🇪 Kenya</span>
            <span className="bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg">🇳🇬 Nigeria</span>
            <span className="bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg">🇿🇦 South Africa</span>
            <span className="bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-lg">🇹🇿 Tanzania</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
  <Link to="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}