import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Card from './Card';
import App from './App';
import 'tachyons';//tachyon is css library so we can directly use css here
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <App/>
    </div>
    
  </React.StrictMode>
);


serviceWorkerRegistration.unregister();


reportWebVitals();
