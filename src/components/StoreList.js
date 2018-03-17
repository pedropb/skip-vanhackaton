import React, { Component } from 'react';
import './StoreList.css';
import stores from '../data/Stores';
import couisines from '../data/Cousine';

class StoreList extends Component {
  renderStoreCard(store) {
    return (
      <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" alt="Thumbnail [100%x225]" src="http://via.placeholder.com/280x225" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">{store.name}</h5>
            <p class="card-text">{store.address}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Menu</button>
              </div>
              {/* TODO: refactor following filter to an Api function getCousineById() */}
              <small class="text-muted">{couisines.filter(({id}) => id === store.cousineId)[0].name}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="album py-5">
        <div class="container">
          <div class="row">
              {stores.map(store => this.renderStoreCard(store))}
          </div>
        </div>
      </div>
    );
  }
}


export default StoreList;