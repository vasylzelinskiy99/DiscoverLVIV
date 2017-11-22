import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './store';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDJ3juiEpQYskiFVqIHmkMhSt5G8iSD45k",
    authDomain: "discoverlviv-de929.firebaseapp.com",
    databaseURL: "https://discoverlviv-de929.firebaseio.com",
    projectId: "discoverlviv-de929",
    storageBucket: "discoverlviv-de929.appspot.com",
    messagingSenderId: "232143107068"
  };
  firebase.initializeApp(config);

let store = configureStore()


ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
