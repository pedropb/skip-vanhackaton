
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StoreList } from './StoreList';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        loadCousines: jest.fn(),
        loadStores: jest.fn(),
        cuisines: [],
        stores: [],
        storesLoadingError: '',
        storesLoaded: true,
        cousinesLoadingError: '',
        cousinesLoaded: true
    };
  
    const enzymeWrapper = mount(<StoreList {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
  }


const storeActions = {
    loadCuisines: () => [],
    loadStores: () => []
};

it('renders without crashing', () => {
    const { enzymeWrapper } = setup();
});

