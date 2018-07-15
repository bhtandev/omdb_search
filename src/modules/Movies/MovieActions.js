export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_CONTINUE = 'FETCH_MOVIES_CONTINUE';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';


import { getPage } from './MovieReducer';
import callApi from '../../util/apiCaller';

export function fetchMovies(text, newSearch = true) {
    return (dispatch, getState) => {
        const state = getState();
        let page = getPage(state);

        if (newSearch === true) {
            dispatch(fetchMoviesBegin(text));
        } else {
            dispatch(fetchMoviesContinue());
            page = page + 1;
        }

        const queryString = `&s=${text}&page=${page}`;

        return callApi(queryString).then((res) => {
            const { Search, totalResults, Response } = res;

            console.log('res', res);

            if (Response == "False") {

                const errorMsg = ('Error' in res)? res.Error : 'Search not found';

                dispatch(fetchMoviesFailure(errorMsg));
            } else {
                dispatch(fetchMoviesSuccess(Search, totalResults, newSearch));
            }

        }).catch((error) => {
            dispatch(fetchMoviesFailure('Search failed'));
        });

    };
}

export const fetchMoviesContinue = () => {
    return {
        type: FETCH_MOVIES_CONTINUE,
    };
};


export const fetchMoviesBegin = (text) => {
    return {
        type: FETCH_MOVIES_BEGIN,
        payload: { text }
    };
};

export const fetchMoviesSuccess = (movies, totalResults, newSearch) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: { movies, totalResults, newSearch }
    }
};

export const fetchMoviesFailure = error => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: { error }
    };
};

