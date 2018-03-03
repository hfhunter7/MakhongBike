import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from './history';

// import the root reducer
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {
    user: {},
    equipments: {},
    reserve: [],
    reserve_detail:{},
    trip:[],
    trip_detail: {}
};

const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(thunk)));

export const history = syncHistoryWithStore(createHistory, store);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;