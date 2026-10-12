import { Link } from 'react-router-dom';

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold tracking-tight mb-8">Your Shopping Cart</h3>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-2xl">
          <p className="text-slate-400 text-lg mb-6">Your cart is currently empty.</p>
          <Link 
            to="/shop"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl divide-y divide-slate-800">
            {cart.map((item) => (
              <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl bg-slate-800" />
                  <div>
                    <h4 className="font-bold text-slate-100">{item.name}</h4>
                    <p className="text-amber-400 font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls & Total Price */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                  <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white transition font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-sm font-semibold text-slate-100">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white transition font-bold"
                    >
                      +
                    </button>
                  </div>

                  <span className="font-extrabold text-slate-100 w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-500 hover:text-red-400 transition p-2"
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Subtotal & Checkout Summary Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-sm text-slate-400">Total Items: {cart.reduce((acc, i) => acc + i.quantity, 0)}</span>
              <div className="text-3xl font-extrabold text-amber-400">${subtotal.toFixed(2)}</div>
            </div>
            <button 
              onClick={() => alert("Checkout flow coming soon!")}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}