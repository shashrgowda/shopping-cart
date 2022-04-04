import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Products from "./components/Products/Products";
import { connect } from "react-redux";

function App({ current }) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={ProductDetail} />
          )}
        </Switch>
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
