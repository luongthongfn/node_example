import { createStore } from 'redux';
import reducers from '../reducers/index';
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



function logStore() {
    console.log('Store: ', store.getState())
}

store.subscribe(logStore)


export default store;