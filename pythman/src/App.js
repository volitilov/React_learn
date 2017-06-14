import React, { Component } from 'react';

import Roms from './Rums';
import Chat from './Chat';
import Login from './Login';


const Server = require('server');




class App extends Component {
	// constructor ::::::::::::::::::::::::::::::::::::::::::::::::::::
	constructor(props) {
		super(props);
		this.state = {
			user: 'Bob',
			room: 'Обший чат',
			rooms: [
				'Обший чат',
				'Новости',
				'Домашние животные'
			],
			messages: []
		};
	}

	// selectRoom :::::::::::::::::::::::::::::::::::::::::::::::::::::
	selectRoom(room) {
		this.setState({
			room,
			messages: []
		});
		this.server.get(room, (messages) => this.setState({messages}));
	}

	// send :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	send(from, msg) {
		this.server.post(from, this.state.room, msg);
	}

	// componentDidMount ::::::::::::::::::::::::::::::::::::::::::::::
	componentDidMount() {
		this.server = new Server();
		this.server.onMessage=(f, c, m) => this.handleMessage(f, c, m);
		this.server.onListChats=(l) => this.handleList(l);
	}

	// handleList :::::::::::::::::::::::::::::::::::::::::::::::::::::
	handleList(rooms) {
		this.setState({rooms});
		this.selectRoom(rooms[0]);
	}


	// handleMessage ::::::::::::::::::::::::::::::::::::::::::::::::::
	handleMessage(from, room, msg) {
		if (room !== this.state.room) {
			return;
		}
		var messages = this.state.messages;
		messages.push({from, msg});

		this.setState({messages});
	}

	// login ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	login(user) {
		this.setState({user});
	}

	render() {
		if (this.state.user == null) {
			return <Login onLogin={(n) => this.login(n)} />
		}
		return (
			<div>
				<Roms 	room={this.state.room} 
						items={this.state.rooms} 
						onSelect={(r) => this.selectRoom(r)} />
				<Chat 	items={this.state.messages}  
						user={this.state.user} 
						onSend={(f, m) => this.send(f, m)}
						onLogout={() => this.login(null)} />
			</div>
		)
	}
}

export default App;