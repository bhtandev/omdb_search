import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_CONTINUE, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE} from "./MovieActions";

const initialState = {
    loading: false,
    movies: [],
    searchText: '',
    searchTotal: 0,
    error: null,
    page: 1,
};

export default function moviesReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case FETCH_MOVIES_BEGIN:
            const { text }= payload;
            return {
                ...state,
                loading: true,
                error: null,
                item: [],
                searchText: text,
                searchTotal: 0,
                page: 1,
            };
        case FETCH_MOVIES_CONTINUE:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_MOVIES_SUCCESS:
            const { movies, totalResults, newSearch }= payload;
            return {
                ...state,
                loading: false,
                movies: newSearch? [...movies] : [...state.movies, ...movies],
                searchTotal: totalResults,
                page: state.page + 1,
            };
        case FETCH_MOVIES_FAILURE:
            const { error } = payload;
            return {
                ...state,
                loading: false,
                error,
                items: [],
                searchTotal: 0,
                searchText: '',
                page: 1,
            };
        default:
            return state;
    }
}

export const getMovies = state => state.movies.movies;
export const getSearchText = state => state.movies.searchText;
export const getSearchTotal = state => state.movies.searchTotal;
export const getPage = state => state.movies.page;
export const getLoading = state => state.movies.loading;
export const getError = state => state.movies.error;

