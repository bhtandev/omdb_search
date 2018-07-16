import  React , { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovies } from '../MovieActions';
import { getMovies, getLoading, getSearchTotal, getSearchText, getError } from '../MovieReducer';

import SubTitle from '../../../components/SubTitle';
import InfiniteScroll from 'react-infinite-scroller';

import SearchBox from '../../../components/SearchBox';
import Footer from '../../../components/Footer';

import MovieList from '../components/MovieList';

export class MoviePage extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        movies: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
            status: {
                text: '',
                type: 'notification'
            }
        }
    }

    loadMoreItems = () => {

        const text = this.props.searchText;

        console.log('load more items');

        this.loadItems(text, false);
    };

    loadItems = (text, newSearch = true) => {
        const { dispatch } = this.props;
        dispatch(fetchMovies(text, newSearch));
    };

    doSearch = (text) => {
        const { dispatch } = this.props;

        if (text.length < 3) {
            const errorStatus = {
                text: 'Minimum 3 characters required!',
                type: 'error'
            };

            this.setState({ status: errorStatus});
        } else {
            dispatch(fetchMovies(text, true));
        }
    };

    render() {
        const { movies, searchTotal, loading, error } = this.props;
        const hasMoreItems = movies? (movies.length < searchTotal) : false;

        let footerStatus;
        if (error !== null) {
            footerStatus = error;
        } else if (loading) {
            footerStatus = 'Loading...';
        }

        return (
            <div>
                <div>
                    <SubTitle id="page-title" fontSize="14px">Movie Search:</SubTitle>
                    <SearchBox id="search-box" doSearch={this.doSearch} status={this.state.status}
                     placeholder="Search movies..."></SearchBox>
                </div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMoreItems}
                    hasMore={hasMoreItems}
                    >
                    <MovieList movies={movies}></MovieList>
                </InfiniteScroll>
                <Footer>
                    <p>{footerStatus}</p>
                </Footer>
            </div>
        )
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        movies: getMovies(state), //TODO: reselect,
        searchText: getSearchText(state),
        searchTotal: getSearchTotal(state),
        loading: getLoading(state),
        error: getError(state),
    };
}

export default connect(mapStateToProps)(MoviePage);

