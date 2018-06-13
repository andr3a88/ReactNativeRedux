import React, { Component } from 'React';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';
import FirebaseConfiguration from '../Configuration';

// middleware
import ReduxThunk from 'redux-thunk';

class App extends Component {

    constructor() {
        super();

        firebase.initializeApp(FirebaseConfiguration);
    }

    render() {
        // Parameters of create store:
        // + reducers
        // + initial state
        // + store enhancer
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;