import React, { Component } from 'react';
import './ProductList.css';
import { getProductsByStoreId } from '../data/Product.js';

class ProductList extends Component {
  formatPrice(price) {
    return price.toString().slice(-2)[0] === "." ? price + "0" : price.toString();
  }

  // http://lorempixel.com/280/225/food
  // TODO: idea - add "loading" state for slow traffic, like lorempixel

  renderProductCard(product) {
    return (
      <div className="col-md-4" key={product.id}>
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" alt="Thumbnail [100%x225]" src={`http://lorempixel.com/280/225/food/${product.id}`} data-holder-rendered="true" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">Add to cart</button>
              </div>
              <small className="text-muted">$ {this.formatPrice(product.price)}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="album py-5">
        <div className="container">
          <div className="row">
            {getProductsByStoreId(this.props.match.params.storeId).map(product => this.renderProductCard(product))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;