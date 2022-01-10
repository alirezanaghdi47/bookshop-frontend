import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './stores/store';

//=================//
//===== style =====//
//=================//

import './styles/_global.scss'; // global


ReactDOM.render(
    <>
        {/* redux */}
        <Provider store={store}>

            {/* redux persist */}
            <PersistGate persistor={persistor}>

                {/* react router */}
                <BrowserRouter>

                    {/* app */}
                    <App/>

                </BrowserRouter>

            </PersistGate>

        </Provider>
    </>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
