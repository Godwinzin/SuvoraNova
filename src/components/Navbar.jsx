import { Link } from 'react-router-dom';

export default function Navbar({ totalCartItems }) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/85 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
        ShopSphere
      </Link>
      
      <nav className="flex items-center gap-6">
        <Link to="/" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition">
          Home
        </Link>
        <Link to="/shop" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition">
          Shop
        </Link>
        
        <Link to="/cart" className="relative bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 text-sm flex items-center gap-2 cursor-pointer hover:border-amber-500/50 transition">
          <span>🛒 Cart</span>
          <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded-full text-xs">
            {totalCartItems}
          </span>
        </Link>
      </nav>
    </header>
  );
}