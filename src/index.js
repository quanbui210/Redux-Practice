import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
// import store from './store/index';
import store from './vanillaStore/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>); //should use provider in highest order
