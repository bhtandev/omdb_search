import React, { Component } from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {
                props.movies.map((movie, index) =>
                <MovieListItem
                    key={index}
                    {...movie}
                />)
            }
        </div>
    );
};



export default MovieList;