// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import registerServiceWorker from './registerServiceWorker';

// import './index.css';

// // import Tracklist from './components/tracklist';
// import Counter from './components/counter';


// начальное состоянение хранилища
const initialState = { count: 20 };

// редусер - функция для: 
    // обработки действий пользователя;
    // возврата нового состояния приложения; 
const reducer = (state, action) => {
    if (action.type === 'ADD_COUNT') {
        return Object.assign({}, state, { count: state.count + 1 });
    } else {
        return state;
    }
}; 

// создание нового хранилища, оно принимает несколько аргументов:
    // начальное состояния приложения;
    // функция обработки actions и возврата нового состояния;
const store = createStore(reducer, initialState);

// подписка на отслеживания состояния приложения,
// каждый раз когда будет создоваться новое состояние,
// будет вызываться функция указанная в подписке
// getState() позволяет получить данные которые лежат в хронилище
store.subscribe(() => console.log(store.getState()));


// позволет вызвать action
// диспетчеры вызывают редусеры для обработки действий пользователя
// и создания нового состояния приложения
store.dispatch({ type: 'ADD_COUNT' });


// ReactDOM.render(
//     <Provider store={ store }>
//         <Counter />
//     </Provider>,
//     document.getElementById('root'));
// registerServiceWorker();