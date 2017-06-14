import React from 'react';


export default function(props) {
	return (
		<div style={{float: 'right', width: '200px'}}>
			Список комнат:
			<ul>
				{props.items.map((name, index) => {
					if (name === props.room)
						return <li key={index}>[ {name} ]</li>

					return <li key={index} onClick={() => props.onSelect(name)}>{name}</li>
				})}
			</ul>
		</div>
	);
}