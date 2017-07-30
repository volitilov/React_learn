import React, { Component } from 'react';
import { createStore } from 'redux';


class Tracklist extends Component {
    render() {
        return (

        );
    }
}

export default Tracklist;

function playList(state=[], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}

const store = createStore(playList);

store.subscribe(() => {
    console.log('Subscribe', store.getState());
});


store.dispatch({
    type: 'ADD_TRACK',
    payload: 'Hello Redux, wtf'
});

store.dispatch({
    type: 'ADD_TRACK',
    payload: 'Who is the patcha, YES Tiesto'
});