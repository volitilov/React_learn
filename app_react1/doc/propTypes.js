React.createClass({
	propTypes: {
	
		// Вы можете указать, каким примитивом должно быть свойство
		optionalArray: React.PropTypes.array,
		optionalBool: React.PropTypes.bool,
		optionalFunc: React.PropTypes.func,
		optionalNumber: React.PropTypes.number,
		optionalObject: React.PropTypes.object,
		optionalString: React.PropTypes.string,
		
		// Вы может указать, что свойство можеть быть одни из ...
		optionalUnion: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number,
			React.PropTypes.instanceOf(Message)
		]),
		
		// Вы можете указать, конкретную структуру объекта свойства
		optionalObjectWithShape: React.PropTypes.shape({
			color: React.PropTypes.string,
			fontSize: React.PropTypes.number
		}),
		
		// Вы можете указать, что свойство ОБЯЗАТЕЛЬНО
		requiredFunc: React.PropTypes.func.isRequired,
		
		// Если нужно указать, что свойство просто обязательно, и может быть 
		// любым примитивом
		requiredAny: React.PropTypes.any.isRequired,
	}
});