import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigate from "./components/Navigate";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
