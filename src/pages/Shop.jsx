import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/product';
import searchIcon from '../assets/searchIcon.webp';

export default function Shop({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); 

  // Filter products by category AND search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h3 className="text-3xl font-bold tracking-tight mb-2">Shop Catalog</h3>
          <p className="text-slate-400 text-sm">Browse our full collection of premium products.</p>
        </div>
        
        {/* Search Bar & Category Filters Container */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          
          {/*  Search Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
             <img 
                src={searchIcon} 
                alt="Search" 
                className="w-4 h-4 object-contain brightness-0 invert opacity-70" 
              />
            </span>
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 bg-slate-900 border border-slate-800 text-slate-100 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition shadow-inner"
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

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {["All", "Tech", "Fashion", "Home"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition ${
                  selectedCategory === cat 
                    ? "bg-amber-500 text-slate-950 shadow" 
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 bg-slate-900/50 border border-slate-800/80 rounded-3xl">
          <p className="text-4xl mb-3">🔍</p>
          <h4 className="text-lg font-bold text-slate-200 mb-1">No products found</h4>
          <p className="text-slate-400 text-sm mb-6">Try searching for something else or clearing your filters.</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2 rounded-xl text-sm transition border border-slate-700"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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
                
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {product.category}
                  </span>
                  <span className="text-sm font-semibold text-slate-300">⭐ {product.rating}</span>
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
  );
}