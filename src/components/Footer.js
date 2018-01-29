import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer-bar">
					<div className="company-name">
						<span>Training Center (Head Office)</span>
						<br/><br/>
						<div className="company-details">
							<span>1215 Phaholyothin Road, Kwaeng Sam Sean Nai, Phayathai,</span>
							<br/>
							<span>Bangkok, 10400</span>
							<br/><br/>
							<span>Phone: 02 279 2880</span>
							<br/>
							<span>Email: contact@9pi.co.th</span>
						</div>
					</div>
					<div className="support">
						<span>Support</span>
						<br/>
						<ul className="support-detail">
							<li>Help Center</li>
							<li>Team & Conditions</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div className="relate-product">
						<span>Related Products</span>
						<ul className="relate-product-detail">
							<li>Test Hero</li>
							<li>Test Center</li>
							<li>Teacher Hero</li>
							<li>Attendance</li>
							<li>Report Card</li>
							<li>Textbook</li>
							<li>Timetable</li>
						</ul>
					</div>

				</footer>
			</div>
		);
	}
}

Footer.defaultProps = {};

export default Footer;
