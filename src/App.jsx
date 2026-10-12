import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetails';
import Toast from './components/Toast';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';
import ShippingReturns from './pages/ShippingReturns';

export default function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopsphere_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopsphere_cart", JSON.stringify(cart));
  }, [cart]);

  const [toastMessage, setToastMessage] = useState(null);

  // Helper function to show toast temporarily
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000); // Disappears after 3 seconds
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    triggerToast(`Added ${product.name} to your cart!`);
  };

  // Function to increase or decrease quantity (+ / -)
  const updateQuantity = (id, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean); // Removes any items that turned into null (quantity <= 0)
    });
  };

  

  // Function to remove an item entirely
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
        <Navbar totalCartItems={totalCartItems} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/cart" element={
            <Cart 
              cart={cart} 
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
            />
          } />
          <Route path="/shop/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={() => setCart([])} />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<ShippingReturns />} />
        </Routes>
        <Toast message={toastMessage} show={Boolean(toastMessage)} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}