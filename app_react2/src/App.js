import React, { Component } from 'react';

import Header from './components/header'
// import Dropdown from './components/dropdown';
import RegistrationForm from './components/registrationForm';


const menu = [
    {
        link: '/',
        label: 'Home'
    },
    {
        link: '/about',
        label: 'About'
    },
    {
        link: '/portfolio',
        label: 'Portfolio'
    },
    {
        link: '/contacts',
        label: 'Conatacts'
    }
]

class App extends Component {
    render() {
        return (
            <div>
                <Header data={ menu } />
                 {/* <Dropdown />  */}
                <RegistrationForm />
            </div>
        ); 
    }
}

export default App;