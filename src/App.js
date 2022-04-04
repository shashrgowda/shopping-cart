import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/CartItem/CartItem";
import Header from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Products from "./components/Products/Products";
import { connect } from "react-redux";

function App({ current }) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {!current ? (
            <Route path="/" />
          ) : (
            <Route path="/product/:id" element={<ProductDetail />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
