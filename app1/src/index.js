import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// import User from './components/user/User';
import App from './components/app/App';

import './index.css';

import img_react from './img/react.png';
import img_angular from './img/angular.png';


let user = {
    firstname: 'Sam',
    age: 34
}


function Main() {
    return (
        <div>
            {/* <User name={ user.firstname } /> */}
            <App count="0"
                title="React"
                subtitle="Библиотека для создания пользовательских интерфейсов"
                imgUrl={ img_react }
            />
            <App count="0"
                title="Angular2"
                subtitle="Один фрамеворк"
                imgUrl={ img_angular }
            />

        </div>
    );
}


ReactDOM.render(
    <Main />,
    document.getElementById('root')
)


registerServiceWorker();
