import React, { Component } from 'react';


export default class Chat extends Component {
	send() {
		var el = document.getElementById('msgtext');

		this.props.onSend(this.props.user, el.value);
		el.value = '';
	}
	render() {
		return (
			<div style={{overflowY: 'auto', height: '300px'}}>
				<ul>
					{this.props.items.map((msg, index) => <p key={index}>{msg.from}: {msg.msg}</p>)}
					</ul>
				<div>
					<button onClick={() => this.props.onLogout()}>{this.props.user}</button>
					<input type="text" id="msgtext" />
					<button type="submit" onClick={() => this.send()}>Send</button>
				</div>
			</div>
		);
	}
}