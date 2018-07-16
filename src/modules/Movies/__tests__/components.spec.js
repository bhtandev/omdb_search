import test from 'ava';

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

import { MoviePage } from '../pages/MoviePage';
import MovieList from '../components/MovieList';


test('Page title renders', (t) => {
    const wrapper = shallow(<MoviePage></MoviePage>);
    t.true(wrapper.hostNodes().find('#page-title').length == 1);

});

test('Searchbox renders', (t) => {
    const wrapper = shallow(<MoviePage></MoviePage>);
    t.true(wrapper.hostNodes().find('#search-box').length == 1);
});


const movies = [
    { Title: 'Terminator', Year: '1984', Poster: 'N/A' },
    { Title: 'Terminator 2', Year: '1997', Poster: 'N/A' },
];

test('Renders the movie list', t => {
    const wrapper = mount(<MovieList movies={movies}></MovieList>);

    t.is(wrapper.find('#movie-list-item').length, 2);
});

//
// test('simulate click event', t => {
//     const wrapper = mount(<MoviePage></MoviePage>);
//
//     const component = wrapper.instance();
//
//     wrapper.debug();
//
//     let doSearchStub = sinon.stub(component, 'doSearch').callsFake(() => { });
//     // let doSearchStub = sinon.stub(component, 'doSearch', () => { });
//     wrapper.find('#search-box-button').simulate('click');
//
//     t.true(doSearchStub.callCount == 1, 'Save button clicked once');
// });