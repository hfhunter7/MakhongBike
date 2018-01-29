import React, { Component } from 'react';
import Slider from 'react-slick'

class Carousel extends Component {
	render() {
			const carousel = {
				dots: true,
				infinite: true,
				accessibility: true,
				centerMode: true,
				fade: true,
				touchMove: true,
				speed: 1000,
				slidesToShow: 1,
				slidesToScroll: 1
			};

			return (
			<div className="carousel-box">
				<Slider {...carousel}>
					<div><h3 style={{background: "#FAFAFA", height: "300px"}}>1</h3></div>
					<div><h3 style={{background: "#F5F5F5", height: "300px"}}>2</h3></div>
					<div><h3 style={{background: "#EEEEEE", height: "300px"}}>3</h3></div>
					<div><h3 style={{background: "#E0E0E0", height: "300px"}}>4</h3></div>
					<div><h3 style={{background: "#BDBDBD", height: "300px"}}>5</h3></div>
					<div><h3 style={{background: "#9E9E9E", height: "300px"}}>6</h3></div>
					<div><h3 style={{background: "#757575", height: "300px"}}>7</h3></div>
					<div><h3 style={{background: "#616161", height: "300px"}}>8</h3></div>
					<div><h3 style={{background: "#424242", height: "300px"}}>9</h3></div>
					<div><h3 style={{background: "#212121", height: "300px"}}>10</h3></div>
				</Slider>

			</div>
		);
	}
}

Carousel.defaultProps = {};

export default Carousel;
