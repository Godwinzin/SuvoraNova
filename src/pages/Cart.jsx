import { Link } from 'react-router-dom';

export default function Cart({ cart }) {
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
              <div key={item.id} className="p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl bg-slate-800" />
                  <div>
                    <h4 className="font-bold text-slate-100">{item.name}</h4>
                    <p className="text-amber-400 font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-slate-400">Qty: {item.quantity}</span>
                  <p className="font-extrabold text-slate-100">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex justify-between items-center">
            <span className="text-lg font-medium text-slate-300">Subtotal</span>
            <span className="text-3xl font-extrabold text-amber-400">${subtotal.toFixed(2)}</span>
          </div>
        </div>
      )}
    </main>
  );
}