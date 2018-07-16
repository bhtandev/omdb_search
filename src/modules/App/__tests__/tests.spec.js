import test from 'ava';

import React from 'react';
import { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

import App from '../App';

test('App bar renders', (t) => {
    const wrapper = shallow(<App></App>);
    t.true(wrapper.hostNodes().find('#app-bar').length == 1);
});

test('App title renders', (t) => {
    const wrapper = shallow(<App></App>);
    t.true(wrapper.hostNodes().find('#app-title').length == 1);
});