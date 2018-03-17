import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('has an email field', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('Email address')).toBeTruthy();
});

it('has a password field', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('Password')).toBeTruthy();
});