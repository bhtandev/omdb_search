import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "./store";

import App from './modules/App/App';

const store = configureStore();
const mountApp = document.getElementById('root');

const Index = () => {
    return (
        <Provider store={store}>
            <App></App>
        </Provider>
    );
};

render(<Index/>, mountApp);


