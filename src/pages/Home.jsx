import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d19842_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/20 mb-6 uppercase tracking-widest">
        The Ultimate Department Store
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold max-w-3xl tracking-tight mb-6">
        Everything you need, delivered to your world.
      </h2>
      <p className="text-slate-400 max-w-xl text-base md:text-lg mb-8">
        Explore curated collections across tech, fashion, home goods, and more. Quality items handpicked for modern living.
      </p>
      <Link 
        to="/shop"
        className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5">
        Explore Collections
      </Link>
    </section>
  );
}