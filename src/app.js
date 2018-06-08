import React from 'React';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers';
import { Header } from './components/common/Header';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={(createStore(reducers))} >
            <View>
                <Header headerText='Tech stack' />
                <LibraryList />
            </View>
        </Provider >
    );
};

export default App;