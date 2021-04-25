import React from 'react';
import ReactDOM from 'react-dom';//. The ReactDOM library is rendering the App component at the root element in the HTML.
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//reactDom renders this content into root div in the html file
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // targeting root div in index.html file
);

//strictMode is for testing/highlighing problems

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
