import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

// import css
import './css/style.css';
import * as firebase from 'firebase';
import 'material-design-lite/material.min';
// import 'getmdl-select/getmdl-select.min';

// import component
import App from './App';

const config = {
    apiKey: "AIzaSyA50K4u2ez1Q4X3apdN25ujXWUP4T1LoXQ",
    authDomain: "maekhongbike.firebaseapp.com",
    databaseURL: "https://maekhongbike.firebaseio.com",
    projectId: "maekhongbike",
    storageBucket: "maekhongbike.appspot.com",
    messagingSenderId: "636430870365"
};
firebase.initializeApp(config);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('root'),
    )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    })
}
registerServiceWorker();