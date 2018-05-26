import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./core/reducers";
import { routerReducer, routerMiddleware } from 'react-router-redux';

import App from './containers/App/index';

const history = createHistory();
const middleware = composeWithDevTools(applyMiddleware(reduxThunk, routerMiddleware(history)));
const store = middleware(createStore)(combineReducers({ rootReducer, routerReducer}));

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./core/reducers', () => {
        const nextRootReducer = require('./core/reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route component={App} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();