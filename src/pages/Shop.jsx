import { useState } from 'react';
import { products } from '../data/product';

export default function Shop({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h3 className="text-3xl font-bold tracking-tight mb-2">Shop Catalog</h3>
          <p className="text-slate-400 text-sm">Browse our full collection of premium products.</p>
        </div>
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          {["All", "Tech", "Fashion", "Home"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition group shadow-xl"
          >
            <div>
              <div className="w-full h-48 bg-slate-800 rounded-xl overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {product.category}
                </span>
                <span className="text-sm font-semibold text-slate-300">⭐ {product.rating}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-100 mb-2">{product.name}</h4>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>
            </div>

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
    </main>
  );
}