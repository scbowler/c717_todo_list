import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import reduxPromise from 'redux-promise';
import promise from './middleware/promise'
import logger from './middleware/logger';
import rootReducer from './reducers';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(logger, promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
