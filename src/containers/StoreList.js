import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './StoreList.css';
import Spinner from '../components/Spinner';
import { loadStores } from '../actions/StoreActions';
import { loadCousines } from '../actions/CousineActions';

class StoreList extends Component {
  componentWillMount() {
    this.props.loadStores();
    this.props.loadCousines();
  }

  isLoading() {
    return !this.props.storesLoaded || !this.props.cousinesLoaded;
  }

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
              <small className="text-muted">{this.props.cousines.filter(({ id }) => id === store.cousineId)[0].name}</small>
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
            {this.isLoading() && (<Spinner />)}
            {!this.isLoading() && this.props.stores.map(store => this.renderStoreCard(store))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cousinesLoadingError, cousinesLoaded, cousines } = state.cousines;
  const { storesLoadingError, storesLoaded, stores } = state.stores;

  return {
    storesLoadingError,
    storesLoaded,
    stores,
    cousinesLoadingError,
    cousinesLoaded,
    cousines
  };
}

export default connect(mapStateToProps, {loadStores, loadCousines})(StoreList);
