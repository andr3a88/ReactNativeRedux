import React, { Component } from 'React';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

// middleware
import ReduxThunk from 'redux-thunk';

class App extends Component {

    constructor() {
        super();

        // Firebase config
        const config = {
            apiKey: 'AIzaSyC3q29WIKS8cKUThM3wswWpSU0XanOwr8Y',
            authDomain: 'manager-92082.firebaseapp.com',
            databaseURL: 'https://manager-92082.firebaseio.com',
            projectId: 'manager-92082',
            storageBucket: '',
            messagingSenderId: '395536676680'
        };
        firebase.initializeApp(config);
    }

    render() {
        // Parameters of create store:
        // reducers
        // initial state
        // store enhancer
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;