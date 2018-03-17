import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StoreList.css';
import stores from '../data/Stores';
import couisines from '../data/Cousine';

class StoreList extends Component {
  renderStoreCard(store) {
    return (
      <div className="col-md-4" key={store.id}>
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" alt="Thumbnail [100%x225]" src="http://via.placeholder.com/280x225" data-holder-rendered="true" />
          <div className="card-body">
            <h5 className="card-title">{store.name}</h5>
            <p className="card-text">{store.address}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={`/products/${store.id}`}>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Menu</button>
                </Link>
              </div>
              {/* TODO: refactor following filter to an Api function getCousineById() */}
              <small className="text-muted">{couisines.filter(({ id }) => id === store.cousineId)[0].name}</small>
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
            {stores.map(store => this.renderStoreCard(store))}
          </div>
        </div>
      </div>
    );
  }
}


export default StoreList;