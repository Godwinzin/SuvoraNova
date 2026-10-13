import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout({ cart, clearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = subtotal > 0 ? 5.00 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    // Create new order object
    const newOrder = {
      id: Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: cart,
      total: total,
      name: formData.name,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      zip: formData.zip
    };

    // Grab existing orders from localStorage (default to empty array if none)
    const existingOrders = JSON.parse(localStorage.getItem('shopsphere_orders') || '[]');
    
    // Prepend the new order and save back to localStorage
    localStorage.setItem('shopsphere_orders', JSON.stringify([newOrder, ...existingOrders]));

    // Simulate order placement & clear cart
    setIsSubmitted(true);
    clearCart(); 
  };
  if (isSubmitted) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">Order Placed Successfully!</h2>
          <p className="text-slate-400 text-sm mb-6">
            Thank you for shopping with ShopSphere. We've sent a confirmation email to <span className="text-amber-400">{formData.email}</span>.
          </p>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left mb-8 text-sm text-slate-300 max-w-md mx-auto">
            <p className="font-semibold text-amber-400 mb-1">Shipping To:</p>
            <p>{formData.name}</p>
            <p>{formData.address}, {formData.city} {formData.zip}</p>
          </div>
          <Link 
            to="/shop" 
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-3">Your cart is empty</h2>
        <p className="text-slate-400 text-sm mb-6">Add some products to your cart before checking out.</p>
        <Link 
          to="/shop" 
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition"
        >
          Return to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Shipping & Payment Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <h3 className="text-xl font-bold text-slate-100 border-b border-slate-800 pb-3">Shipping Information</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required
                value={formData.name} 
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required
                value={formData.email} 
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Street Address</label>
            <input 
              type="text" 
              name="address" 
              required
              value={formData.address} 
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
              placeholder="123 Main St"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">City</label>
              <input 
                type="text" 
                name="city" 
                required
                value={formData.city} 
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                placeholder="New York"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Postal Code</label>
              <input 
                type="text" 
                name="zip" 
                required
                value={formData.zip} 
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                placeholder="10001"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-100 border-b border-slate-800 pt-4 pb-3">Payment Details</h3>
          
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Card Number</label>
            <input 
              type="text" 
              name="cardNumber" 
              required
              inputMode="numeric"
              maxLength="19" 
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber} 
              onChange={(e) => {
                // Strip non-digits and cap at 16 digits max
                let value = e.target.value.replace(/\D/g, '').slice(0, 16);
                
                // Check if it starts with 34 or 37 (American Express identifiers)
                if (value.startsWith('34') || value.startsWith('37')) {
                  // Limit Amex to 15 digits and apply 4-6-5 spacing
                  value = value.slice(0, 15);
                  value = value.replace(/^(\d{4})(\d{0,6})(\d{0,5})/, (match, p1, p2, p3) => {
                    let res = p1;
                    if (p2) res += ' ' + p2;
                    if (p3) res += ' ' + p3;
                    return res;
                  });
                } else {
                  // Standard 4-4-4-4 spacing for Visa, Mastercard, Discover, etc.
                  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
                }

                handleChange({ target: { name: 'cardNumber', value } });
              }}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                Expiration Date
              </label>
              <input 
                type="text" 
                name="expDate" 
                required
                inputMode="numeric"
                maxLength="5"
                placeholder="MM/YY"
                value={formData.expDate} 
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ''); // Keep numbers only
                  
                  // Prevent entering invalid months starting with 2-9 without leading 0
                  if (value.length === 1 && parseInt(value) > 1) {
                    value = `0${value}`;
                  }

                  // Auto-insert slash after MM
                  if (value.length > 2) {
                    value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
                  }

                  // Update state
                  handleChange({ target: { name: 'expDate', value } });
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">CVV</label>
              <input 
                type="password" 
                name="cvv" 
                required
                inputMode="numeric"
                maxLength="4"
                value={formData.cvv} 
                onChange={(e) => {
                  // Strip out any non-digit characters (symbols, letters, spaces) and cap at 4 digits
                  const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                  handleChange({ target: { name: 'cvv', value } });
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                placeholder="123"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl transition shadow-lg mt-4"
          >
            Place Order (${total.toFixed(2)})
          </button>
        </form>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit space-y-4">
          <h3 className="text-xl font-bold text-slate-100 border-b border-slate-800 pb-3">Order Summary</h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg bg-slate-800" />
                  <div>
                    <p className="font-semibold text-slate-200 line-clamp-1">{item.name}</p>
                    <p className="text-xs text-slate-400">Qty: {item.quantity || 1}</p>
                  </div>
                </div>
                <span className="font-bold text-amber-400">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-4 space-y-2 text-sm text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-extrabold text-slate-100 border-t border-slate-800 pt-3">
              <span>Total</span>
              <span className="text-amber-400">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}