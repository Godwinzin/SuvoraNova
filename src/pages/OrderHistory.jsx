import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrderHistory() {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('shopsphere_orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // State to control our custom modal visibility
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleClearHistory = () => {
    localStorage.removeItem('shopsphere_orders');
    setOrders([]);
    setShowConfirmModal(false);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 relative">
      {/* Header and Clear Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h3 className="text-3xl font-bold tracking-tight">Order History</h3>
        
        {orders.length > 0 && (
          <button
            onClick={() => setShowConfirmModal(true)}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-xl text-sm font-semibold transition"
          >
            Clear History
          </button>
        )}
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-2xl">
          <p className="text-slate-400 text-lg mb-6">You haven't placed any orders yet.</p>
          <Link 
            to="/shop"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={order.id || index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 gap-2">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 mr-3">
                    Order #{order.id}
                  </span>
                  <span className="text-slate-400 text-sm">{order.date}</span>
                </div>
                <span className="text-lg font-extrabold text-amber-400">${Number(order.total).toFixed(2)}</span>
              </div>

              {/* Shipping Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-slate-400 mb-1">Shipping Address:</p>
                  <p>{order.name}</p>
                  <p>{order.address}, {order.city} {order.zip}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-400 mb-1">Confirmation Email:</p>
                  <p className="text-amber-400">{order.email}</p>
                </div>
              </div>

              {/* Purchased Items List */}
              <div className="border-t border-slate-800 pt-4">
                <p className="text-xs font-semibold text-slate-400 uppercase mb-3">Items Purchased:</p>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm bg-slate-950 p-3 rounded-xl border border-slate-800/60">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-lg bg-slate-800" />
                        <div>
                          <p className="font-semibold text-slate-200 line-clamp-1">{item.name}</p>
                          <p className="text-xs text-slate-400">Qty: {item.quantity || 1}</p>
                        </div>
                      </div>
                      <span className="font-bold text-amber-400">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <h4 className="text-xl font-bold text-slate-100">Clear Order History?</h4>
            <p className="text-slate-400 text-sm">
              This action cannot be undone. All your saved past orders and receipts will be permanently removed from local storage.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-4 py-2 rounded-xl text-sm transition"
              >
                Cancel
              </button>
              <button
                onClick={handleClearHistory}
                className="bg-red-500 hover:bg-red-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition"
              >
                Yes, Clear History
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}