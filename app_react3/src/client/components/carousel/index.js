const { Component } = React;

const items = [
  {
    img_url: 'https://pp.userapi.com/c627621/v627621466/316cd/mOsgdvqbgmU.jpg',
    title: 'Hello world 1',
    description: '::::: Azaza, lalka ? Tru bro :::::'
  },
  {
    img_url: 'https://pp.userapi.com/c627621/v627621466/31199/B9kKnGdjSW4.jpg',
    title: 'Hello world 2',
    description: 'jshfbjhwfjwhfw jwefjw fwj fef wjefj wje '
  },
]

class CarouselItem extends Component {
  render() {
    const { img_url, title, description } = this.props.data;  
    
    return (
      <div className="carousel-item">
        <img src={ img_url }/>
        <div className="carousel-caption">
          <h3>{ title }</h3>
          <p>{ description }</p>
        </div>
      </div>
    );
  }
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_item: 0
    };
  }

  prevSlide() {
    this.setState({
      active_item: this.state.active_item - 1,
    });
    console.log(this.state);
  }
  
  nextSlide() {
    this.setState({
      active_item: this.state.active_item + 1,
    });
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="carousel">
        <div className="carousel-inner">
            <CarouselItem data={ items[this.state.active_item] }/>
        </div>
        <ul className="carousel-control">
          <li className="prev" onClick={ () => this.prevSlide() }>{ "<" }</li>
          <li className="next" onClick={ () => this.nextSlide() }>{ ">" }</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Carousel />,
  document.querySelector('.app'));
