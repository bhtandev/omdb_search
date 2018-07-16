import test from 'ava';
import { actionTest } from 'redux-ava';

import { FETCH_MOVIES_BEGIN, fetchMoviesBegin } from '../MovieActions';

test('should return the correct type for addPost', actionTest(
    fetchMoviesBegin,
    'terminator',
    { type: FETCH_MOVIES_BEGIN, payload: { text: 'terminator' } },
));
