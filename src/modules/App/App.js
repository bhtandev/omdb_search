import React, { Component } from 'react';

import ResponsiveContainer from '../../components/ResponsiveContainer';
import FixedHeader from '../../components/FixedHeader';
import Title from '../../components/Title';

import MoviePage from '../Movies/pages/MoviePage';

const App = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <FixedHeader id="app-bar">
                <Title id="app-title">BananaMDB</Title>
            </FixedHeader>
            <ResponsiveContainer>
                <MoviePage></MoviePage>
            </ResponsiveContainer>
        </div>
    )
};

export default App;
