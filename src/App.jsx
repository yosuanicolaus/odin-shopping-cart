import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigate from "./components/Navigate";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Router>
        <Navigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
