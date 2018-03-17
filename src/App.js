import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Product from './components/Product';
import OrderList from './components/OrderList';
import Order from './components/Order';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>

          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/orders" component={OrderList} />
          <Route path="/order/:orderId" component={Order} />
        </div>
      </Router>


    );
  }
}

export default App;
