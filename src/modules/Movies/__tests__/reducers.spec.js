import test from 'ava';
import {reducerTest} from 'redux-ava';
import movieReducer, {getMovies} from '../MovieReducer';
import {fetchMoviesBegin, fetchMoviesFailure, fetchMoviesSuccess} from '../MovieActions';

test('action for FETCH_MOVIES_BEGIN is working', reducerTest(
    movieReducer,
    {
        loading: false,
        error: 'bla',
        movies: ['bla'],
        searchText: 'bla',
        searchTotal: 1,
        page: 1,
    },
    fetchMoviesBegin('terminator'),
    {
        loading: true,
        error: null,
        movies: [],
        searchText: 'terminator',
        searchTotal: 0,
        page: 1,
    },
));

test('action for FETCH_MOVIES_SUCCESS is working for new search', reducerTest(
    movieReducer,
    {
        loading: true,
        error: null,
        movies: ['bla'],
        searchText: 'terminator',
        searchTotal: 10,
        page: 1,
    },
    fetchMoviesSuccess(['terminator', 'die hard'], 100, true),
    {
        loading: false,
        error: null,
        searchText: 'terminator',
        movies: ['terminator', 'die hard'],
        searchTotal: 100,
        page: 2,
    },
));

test('action for FETCH_MOVIES_SUCCESS is working for continued search', reducerTest(
    movieReducer,
    {
        loading: true,
        error: null,
        movies: ['terminator', 'die hard'],
        searchTotal: 100,
        page: 2,
    },
    fetchMoviesSuccess(['terminator 2'], 100, false),
    {
        loading: false,
        error: null,
        movies: ['terminator', 'die hard', 'terminator 2'],
        searchTotal: 100,
        page: 3,
    },
));

test('action for FETCH_MOVIES_FAILURE is working', reducerTest(
    movieReducer,
    {
        loading: false,
        error: null,
        movies: ['bla'],
        searchText: 'bla',
        searchTotal: 10,
        page: 1,
    },
    fetchMoviesFailure('No movies!'),
    {
        loading: false,
        error: 'No movies!',
        movies: [],
        searchTotal: 0,
        searchText: '',
        page: 1,
    },
));

test('getMovies selector', t => {
    t.deepEqual(
        getMovies({
            movies: { movies: [{ Poster: 'foo', Title: 'bar' }] },
        }),
        [{ Poster: 'foo', Title: 'bar' }]
    );
});
