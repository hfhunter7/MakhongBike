import React, { Component } from 'react';
import styled from 'styled-components'
// import { svgPath } from '../helpers/generalHelper';

// class Loading extends Component {
// 	render() {
// 		return (
// 			<Container>
// 				<svg className="loading">
// 					<g>
// 						<path className="ld-l" fill="#39C0C4" d={svgPath["l"]}/>
// 						<path className="ld-o" fill="#39C0C4" d={svgPath["o"]}/>
// 						<path className="ld-a" fill="#39C0C4" d={svgPath["a"]}/>
// 						<path className="ld-d" fill="#39C0C4" d={svgPath["d"]}/>
// 						<path className="ld-i" fill="#39C0C4" d={svgPath["i"]}/>
// 						<path className="ld-n" fill="#39C0C4" d={svgPath["n"]}/>
// 						<path className="ld-g" fill="#39C0C4" d={svgPath["g"]}/>
// 					</g>
// 				</svg>
// 				<svg width='182px' height='182px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ripple">
// 					<rect x="0" y="0" width="100" height="100" fill="none"/>
// 					<g>
// 						<animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"/>
// 						<circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" strokeWidth="2" strokeLinecap="round">
// 							<animate attributeName="r" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"/>
// 						</circle>
// 					</g>
// 					<g>
// 						<animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="1;1;0"/>
// 						<circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" strokeWidth="2" strokeLinecap="round">
// 							<animate attributeName="r" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="0;22;44"/>
// 						</circle>
// 					</g>
// 				</svg>
// 			</Container>
// 		);
// 	}
// }

class Loading extends Component {
	render() {
		return (
			<Container>
				<div>
					<svg width="1000" height="500" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" version="1.1">
						<g transform="translate(500,500)">
							<rect className="rotate-45 rotate-back" x={-5} y={-5} width={10} height={10} stroke="black" strokeWidth={20} fill="none"/>
							<rect className="rotate-45 rotate" x={-50} y={-50} width={100} height={100} stroke="black" strokeWidth={20} strokeLinejoin="bevel" fill="none"/>
							<g transform="translate(-50,0) rotate(-45)">
								<polyline className="left" points="40,-40 50,-50 -40,-50 -50,-40 -50,50 -40,40" stroke="black" strokeWidth={20} fill="none"/>
							</g>
							<g transform="translate(50,0) rotate(135)">
								<polyline className="right" points="40,-40 50,-50 -40,-50 -50,-40 -50,50 -40,40" stroke="black" strokeWidth={20} fill="none"/>
							</g>
							<text y={-140} textAnchor="middle" fontWeight="bold" fontSize="3em" fontFamily="sans-serif">
								loading...
							</text>
						</g>
					</svg>
				</div>
			</Container>
		)
	}
}

const Container = styled.div`
	margin: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
	background: white;
`;

export default Loading;