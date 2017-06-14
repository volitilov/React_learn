import React from 'react';


export default function(props) {
	return (
		<div>
			Ваше имя:
			<input type="text" id="login" defaultValue="гость" />
			<button onClick={() => props.onLogin(document.getElementById('login').value)}>
				Отправить
			</button>
		</div>
	)
}