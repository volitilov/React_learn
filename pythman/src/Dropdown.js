import React, { Component } from 'react';


class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {isOpened: false};
	}
	toggleState() {
		this.setState({isOpened: !this.state.isOpened});
	}
	render() {
		let dropdownText;

		if(this.state.isOpened) {
			dropdownText = <div>Hello world this block text.</div>;
		}
		return (
			<div className="Dropdown" onClick={this.toggleState.bind(this)}>
				<p>Dropdown</p>
				{dropdownText}
			</div>
		);
	}
}

export default Dropdown;
