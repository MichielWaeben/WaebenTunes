import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCBZ4szBMfcry6Fea82YaMeNzgA7yk5-Os",
  authDomain: "waebentunes.firebaseapp.com",
  projectId: "waebentunes",
  storageBucket: "waebentunes.appspot.com",
  messagingSenderId: "777059933603",
  appId: "1:777059933603:web:b1b4053893fecf75584e16",
  measurementId: "G-FBJSVNBDNL"
};
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
