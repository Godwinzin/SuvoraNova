import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
      <div className="flex flex-col items-start text-left space-y-8">
        
        {/* Simple Store Tag */}
        <span className="text-purple-400 font-medium text-sm tracking-wide uppercase">
          Welcome to ShopSphere
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-white max-w-2xl leading-none">
          Everything you need. Nothing you don't.
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-lg leading-relaxed">
          Discover quality goods, straightforward pricing, and a seamless checkout experience from start to finish.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            to="/shop"
            className="bg-white hover:bg-slate-200 text-slate-950 font-semibold px-6 py-3 rounded-xl transition"
          >
            Browse Store
          </Link>
          <Link
            to="/orders"
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold px-6 py-3 rounded-xl border border-slate-800 transition"
          >
            View Orders
          </Link>
        </div>

      </div>
    </main>
  );
}