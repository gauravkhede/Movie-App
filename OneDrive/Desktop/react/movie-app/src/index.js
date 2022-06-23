import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './component/App';
import movies from './reducers/index';


const store=createStore(movies);
console.log(store,'Before state');
console.log(store.getState(),' store');
store.dispatch({
  type:'ADD_MOVIES',
  movies:[{name:'Superman'}]
});
console.log(store.getState(),'After state');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



