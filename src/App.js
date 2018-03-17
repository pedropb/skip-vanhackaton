import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import Login from './containers/Login';
import Cart from './components/Cart';
import StoreList from './components/StoreList';
import Store from './components/Store';
import ProductList from './components/ProductList';
import Product from './components/Product';
import OrderList from './components/OrderList';
import Order from './components/Order';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={applyMiddleware(reduxThunk)(createStore)(reducers)}>
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
              <li>
                <Link to="/stores">StoreList</Link>
              </li>
              <li>
                <Link to="/store/1">Store</Link>
              </li>
              <li>
                <Link to="/products/1">ProductList from store 1</Link>
              </li>
              <li>
                <Link to="/product/1">Product</Link>
              </li>
              <li>
                <Link to="/orders">OrderList</Link>
              </li>
              <li>
                <Link to="/order/1">Order</Link>
              </li>
            </ul>

            <hr />
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            <Route path="/products/:storeId" component={ProductList} />
            <Route path="/product/:productId" component={Product} />
            <Route path="/stores" component={StoreList} />
            <Route path="/store/:storeId" component={Store} />
            <Route path="/orders" component={OrderList} />
            <Route path="/order/:orderId" component={Order} />

            <Footer />
          </div>
        </Router>
      </Provider>


        );
      }
    }
      
export default App;