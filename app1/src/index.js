import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app/App';

import './index.css';

import img_react from './img/react.png';
import img_angular from './img/angular.png';


let data = [
    {
        title: "React",
        subtitle: "Библиотека для создания пользовательских интерфейсов",
        imgUrl: img_react
    },
    {
        title: "Angular",
        subtitle: "Один фрамеворк",
        imgUrl: img_angular
    }
];


function Main() {
    return (
        <ul>
            {data.map((obj) => 
                <li key={obj.title} >
                    <App title = { obj.title }
                        subtitle = { obj.subtitle }
                        imgUrl = { obj.imgUrl } />
                </li>
            )}
        </ul>
    );
}


ReactDOM.render(
    <Main />,
    document.getElementById('root')
)


registerServiceWorker();
