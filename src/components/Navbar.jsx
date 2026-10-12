import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo.webp';

export default function Navbar({ totalCartItems }) {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Icon + Brand Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoIcon} 
            alt="ShopSphere Icon" 
            className="h-8 w-auto object-contain group-hover:scale-105 transition"
          />
          
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition">
            Shop<span className="text-purple-500">Sphere</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link 
            to="/" 
            className="text-slate-300 hover:text-white transition"
          >
            Home
          </Link>
          
          <Link 
            to="/shop" 
            className="text-slate-300 hover:text-white transition"
          >
            Shop
          </Link>

          {/* Cart Icon & Badge */}
          <Link 
            to="/cart" 
            className="relative bg-slate-800 hover:bg-slate-700 text-slate-100 px-4 py-2 rounded-xl border border-slate-700 transition flex items-center gap-2"
          >
            <span>🛒</span>
            <span>Cart</span>
            {totalCartItems > 0 && (
              <span className="bg-purple-500 text-white font-extrabold text-xs px-2 py-0.5 rounded-full animate-pulse">
                {totalCartItems}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}