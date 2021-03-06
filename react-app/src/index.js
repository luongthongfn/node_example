import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import TodoApp from './components/TodoApp';
import * as serviceWorker from './serviceWorker';

import './scss/style.scss';

ReactDOM.render(<TodoApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
