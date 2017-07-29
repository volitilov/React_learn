import React, { Component } from 'react';
   

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            count: 0
        };
    }

    handleClick() {
        this.setState({
            date: new Date(),
            count: this.state.count + 1
        });
    }


    render() {
        let { title, subtitle, imgUrl } = this.props;
        let { count, date } = this.state;

        return (
            <div className="container">
                <div className="image-counter">
                    <div className="count">{ count }</div>
                    <img src={ imgUrl } 
                        alt="" 
                        onClick={ () => this.handleClick() }/>
                    <h5>{ date.toLocaleTimeString() }</h5>
                    <h3>{ title }</h3>
                    <p>{ subtitle }</p>
                </div>
            </div>
        );
    }
}

export default App;