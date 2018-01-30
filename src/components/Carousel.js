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
					<div><h3 style={{background: "#FAFAFA", height: "300px"}}>1111</h3></div>
					<div><h3 style={{background: "#F5F5F5", height: "300px"}}>22222</h3></div>
					<div><h3 style={{background: "#EEEEEE", height: "300px"}}>33333</h3></div>
					<div><h3 style={{background: "#E0E0E0", height: "300px"}}>44444</h3></div>
					<div><h3 style={{background: "#BDBDBD", height: "300px"}}>55555</h3></div>
					<div><h3 style={{background: "#9E9E9E", height: "300px"}}>66666</h3></div>
					<div><h3 style={{background: "#757575", height: "300px"}}>77777</h3></div>
					<div><h3 style={{background: "#616161", height: "300px"}}>88888</h3></div>
					<div><h3 style={{background: "#424242", height: "300px"}}>99999</h3></div>
					<div><h3 style={{background: "#212121", height: "300px"}}>109999</h3></div>
				</Slider>

			</div>
		);
	}
}

Carousel.defaultProps = {};

export default Carousel;
