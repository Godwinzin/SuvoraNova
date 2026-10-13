import { useParams, Link } from 'react-router-dom';
import { products } from '../data/product';
import StarRating from '../components/StarRating';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  
  // Find the product matching the URL parameter id
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Product Not Found</h2>
        <p className="text-slate-400 mb-8">The item you are looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition">
          Back to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <Link to="/shop" className="text-sm text-slate-400 hover:text-amber-400 transition mb-8 inline-block">
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
        {/* Product Image */}
        <div className="aspect-square bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
          <img 
            src={product.image} 
            alt={product.name}
            loading='lazy' 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Category Badge */}
          <div>
            <span className="text-xs uppercase tracking-widest bg-slate-800 text-amber-400 px-3 py-1 rounded-full font-semibold">
              {product.category}
            </span>
          </div>

          {/* Title & Star Rating Grouped Together */}
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold text-slate-100 tracking-tight">{product.name}</h1>
            <StarRating rating={product.rating} size="5" />
          </div>

          <p className="text-3xl font-black text-amber-400">${product.price.toFixed(2)}</p>
          <p className="text-slate-300 leading-relaxed">{product.description}</p>

          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2"
          >
            <span>🛒</span> Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}