import React, { Component } from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {
                props.movies.map(movie =>
                <MovieListItem
                    key={movie.imdbID + movie.Year}
                    {...movie}
                />)
            }
        </div>
    );
};



export default MovieList;