// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import registerServiceWorker from './registerServiceWorker';

// import './index.css';

// // import Tracklist from './components/tracklist';
// import Counter from './components/counter';


const initialState = { count: 20 };

const reducer = (state, action) => {
    if (action.type === 'ADD_COUNT') {
        return Object.assign({}, state, { count: state.count + 1 });
    } else {
        return state;
    }
}; 

const store = createStore(reducer, initialState);

store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: 'ADD_COUNT' });


// ReactDOM.render(
//     <Provider store={ store }>
//         <Counter />
//     </Provider>,
//     document.getElementById('root'));
// registerServiceWorker();