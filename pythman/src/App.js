import React, { Component } from 'react';

import './App.css';



class App extends Component {
	submit() {
		console.log('submit', this.testInput.value);
	}
	render() {
		return (
			<main className='container'>
				<input type='text' placeholder='text' ref={(input) => this.testInput = input}/>
				<button onClick={this.submit.bind(this)}>Submit</button>
			</main>
		);
	}
}

export default App;
