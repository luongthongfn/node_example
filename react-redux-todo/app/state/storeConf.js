import reducers from './reducers/index';
import {createStore, compose} from 'redux';

let store = createStore(reducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__ () : false))
export default store;