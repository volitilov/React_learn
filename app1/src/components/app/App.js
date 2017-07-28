import React, { Component } from 'react';

function handleClick() {
    console.log("Click");
}

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="image-counter">
                    <div className="count ">{ this.props.count }</div>
                    <img src={ this.props.imgUrl } alt="" />
                    <h3>{ this.props.title }</h3>
                    <p>{ this.props.subtitle }</p>
                </div>
            </div>
        );
    }
}

export default App;