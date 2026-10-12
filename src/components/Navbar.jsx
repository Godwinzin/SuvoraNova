import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo.webp';

export default function Navbar({ totalCartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Logo Icon + Brand Name */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3 group">
          <img 
            src={logoIcon} 
            alt="ShopSphere Icon" 
            className="h-7 w-auto sm:h-8 object-contain group-hover:scale-105 transition"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition">
            Shop<span className="text-purple-500">Sphere</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-slate-300 hover:text-white transition">
            Home
          </Link>
          <Link to="/shop" className="text-slate-300 hover:text-white transition">
            Shop
          </Link>
          <Link to="/orders" className="text-slate-300 hover:text-amber-400 transition">
            Orders
          </Link>
        </div>

        {/* Right Side: Cart Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Cart Icon & Badge */}
          <Link 
            to="/cart" 
            onClick={closeMenu}
            className="relative bg-slate-800 hover:bg-slate-700 text-slate-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-700 transition flex items-center gap-2 text-sm"
          >
            <span>🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {totalCartItems > 0 && (
              <span className="bg-purple-500 text-white font-extrabold text-xs px-2 py-0.5 rounded-full animate-pulse">
                {totalCartItems}
              </span>
            )}
          </Link>

          {/* Hamburger Button (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2 rounded-xl bg-slate-800 border border-slate-700"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close "X" icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Three-line Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Compact Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full right-0 mt-3 w-52 bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-1 shadow-2xl z-50">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block text-slate-300 hover:text-white font-medium text-sm transition py-2 px-3 rounded-xl hover:bg-slate-800/80"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              onClick={closeMenu}
              className="block text-slate-300 hover:text-white font-medium text-sm transition py-2 px-3 rounded-xl hover:bg-slate-800/80"
            >
              Shop
            </Link>
            <Link 
              to="/orders" 
              onClick={closeMenu}
              className="block text-slate-300 hover:text-amber-400 font-medium text-sm transition py-2 px-3 rounded-xl hover:bg-slate-800/80"
            >
              Orders
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}