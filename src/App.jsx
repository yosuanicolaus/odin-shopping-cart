import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigate from "./components/Navigate";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import useCart from "./components/Cart";

function App() {
  const [cart, size, add, reset] = useCart();
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Router basename="shopping-cart">
        <Navigate cartSize={size} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop cart={cart} add={add} />} />
          <Route
            path="/cart"
            element={<CartPage cart={cart} reset={reset} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
