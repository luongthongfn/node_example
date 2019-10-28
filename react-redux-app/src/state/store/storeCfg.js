import { createStore } from 'redux';
import reducers from '../reducers/index';
// const preloadState = [
//     {
//         id: 0,
//         text: 'td0',
//         isComplete: false,
//         childs: [1, 2, 5]
//     },
//     {
//         id: 1,
//         text: 'td1',
//         isComplete: false,
//         childs: []
//     },
//     {
//         id: 2,
//         text: 'td2',
//         isComplete: false,
//         childs: [3, 4]
//     },
//     {
//         id: 3,
//         text: 'td2-1',
//         isComplete: false,
//         childs: []
//     },
//     {
//         id: 4,
//         text: 'td2-2',
//         isComplete: false,
//         childs: []
//     },
//     {
//         id: 5,
//         text: 'td3',
//         isComplete: false,
//         childs: []
//     }
// ];
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(function(){
    console.log('Store: ', store.getState())
})



export default store;