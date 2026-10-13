import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/product';
import StarRating from '../components/StarRating';
import searchIcon from '../assets/searchIcon.webp';

export default function Shop({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); 
  const [sortBy, setSortBy] = useState("default");
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Reference to track the scroll animation frame
  const animRef = useRef(null);

  // Track scroll position to fade the button in/out
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom smooth scroll 
  const scrollToTop = () => {
    // Cancel any previous animation if it's running
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }

    const scrollStep = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > 1) {
        window.scrollTo(0, currentScroll - currentScroll / 8);
        animRef.current = requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, 0);
        animRef.current = null;
      }
    };

    // If you scroll or touch the page while it's moving up, cancel the auto-scroll instantly
    const cancelAutoScroll = () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }
      window.removeEventListener('wheel', cancelAutoScroll);
      window.removeEventListener('touchstart', cancelAutoScroll);
    };

    window.addEventListener('wheel', cancelAutoScroll, { passive: true });
    window.addEventListener('touchstart', cancelAutoScroll, { passive: true });

    scrollStep();
  };

  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 relative">
      
      {/* STICKY CONTROL BAR */}
      <div 
        style={{ top: '64px' }} 
        className="sticky z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Shop Catalog</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
               <img src={searchIcon} alt="Search" className="w-4 h-4 object-contain brightness-0 invert opacity-70" />
              </span>
              <input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-60 bg-slate-900 border border-slate-800 text-slate-100 pl-10 pr-4 py-2 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-2 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition cursor-pointer"
            >
              <option value="default">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {["All", "Tech", "Fashion", "Home"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    selectedCategory === cat 
                      ? "bg-amber-500 text-slate-950 shadow font-semibold" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 pt-8">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-24 bg-slate-900/50 border border-slate-800/80 rounded-3xl">
            <p className="text-4xl mb-3">🔍</p>
            <h4 className="text-lg font-bold text-slate-200 mb-1">No products found</h4>
            <p className="text-slate-400 text-sm mb-6">Try searching for something else or clearing your filters.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSortBy("default"); }}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2 rounded-xl text-sm transition border border-slate-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition group shadow-xl"
              >
                <Link to={`/shop/${product.id}`} className="block">
                  <div className="w-full h-48 bg-slate-800 rounded-xl overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      loading='lazy'
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  
                  {/* Card Header: Category & Reusable Star Rating */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                      {product.category}
                    </span>
                    
                    {/* Reusable Star Rating Component (Compact size for grid cards) */}
                    <StarRating rating={product.rating} size="3.5" />
                  </div>

                  <h4 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition">{product.name}</h4>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                </Link>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <span className="text-2xl font-extrabold text-amber-400">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-semibold px-4 py-2.5 rounded-xl transition border border-slate-700 hover:border-amber-500 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FLOATING RETURN TO TOP BUTTON */}
      {showScrollTop && (
       <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 hover:border-amber-500 p-3.5 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center group ${
          showScrollTop 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Return to top"
      >
        <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      )}

    </div>
  );
}