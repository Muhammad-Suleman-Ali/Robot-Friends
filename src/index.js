import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CardArray from './CardArray';

ReactDOM.render(<CardArray/>,document.getElementById('root'));
serviceWorker.unregister();
