import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer-bar">
					<div className="company-name">
						<span>Maekhong Bike</span>
						<br/><br/>
						<div className="company-details">
							<br/><br/>
							<span>Phone: 091-3874190</span>
							<br/>
							<span>Facebook: <a href="https://www.facebook.com/nut.intayot">Nut Intayot</a></span>
						</div>
					</div>

				</footer>
			</div>
		);
	}
}

Footer.defaultProps = {};

export default Footer;
