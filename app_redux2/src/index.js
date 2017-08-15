import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Store from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<Store />, document.getElementById('root'));
registerServiceWorker();
