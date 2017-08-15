

const { createStore } = require('redux');

// Flux Standart action:
// { type: 'INCREESE_COUNTER', payload: ..., error: false }

let initialState = { 
    issues: [],
    repository: '',
    counter: 0
}

function reducer(initialState, action) {
    switch (action.type) {
        case 'INCREESE_COUNTER':
            return { ...initialState, ...{counter: (initialState.counter += 1)} };
            break;
        case 'RESET_COUNTER':
            return { ...initialState, ...{counter: 0} };
            break;
    
        default:
            return initialState;
    }
}



const store = createStore(reducer, initialState);

export default store;