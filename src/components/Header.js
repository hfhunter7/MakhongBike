import React, { Component } from 'react';
import {
    ButtonLogin,
    HeaderContainer,
    HeaderRow,
    Logo,
    RightBox,
    SearchBox
} from "../style-js/Header.style";
import Button from 'material-ui/Button';

import Popover from 'material-ui/Popover';
import Profile from "./Profile";
import { MenuItem } from "material-ui/Menu";
import { findDOMNode } from 'react-dom';
import { connect } from "react-redux";
import { loginUserFromAuthToken, logoutUserFromAuthToken } from "../actions/actionCreators";
import { current_user_storage, isLoggedIn_storage } from "../helpers/sessionHelper";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import LogoImage from '../image/maekhongbike_logo.png'

const LogoStyle = styled.img`
	background-color: #fff;
	height: 45px;
	border-radius: 5px;
`

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showLoading: false,
			ShowMenu: null,
			open: false,
			open_closeQuiz: false,
			anchorEl: null,
			anchorOriginVertical: 'top',
			anchorOriginHorizontal: 'right',
			transformOriginVertical: 'top',
			transformOriginHorizontal: 'right',
			positionTop: 200, // Just so the popover can be spotted more easily
			positionLeft: 400, // Same as above
			anchorReference: 'anchorEl',
		}
		this.handleClickProfile = this.handleClickProfile.bind(this)
	}

	handleClickProfile(event) {
		this.setState({ open: true, ShowMenu: event.currentTarget, anchorEl: findDOMNode(this.button) });
	};

	handleClickMyProfile() {
		this.props.history.push('/profile')
	};

    handleClickLogin = () => {
        this.props.history.push('/login')
    }

	handleLogout = () => {
		this.setState({ open: false, showLoading: true });
		this.props.logoutUserFromAuthToken();
	};

	handleClick(url) {
		this.props.history.push(url)
	}

	handleRequestClose = () => {
		this.setState({ open: false })
	};

	componentDidMount() {
		if (isLoggedIn_storage()) {
			const user = this.props.user;
			const user_storage = current_user_storage();
			const auth_token = user_storage.auth_token;

			if (Object.keys(user).length === 0 && user.constructor === Object) {
				this.props.loginUserFromAuthToken(auth_token);
			}
		}
	}

	render() {
		return (
			<HeaderContainer>
				<HeaderRow>
					{
						<Logo onClick={this.handleClick.bind(this, "/")}>
							<LogoStyle src={LogoImage} alt="logo"/>
						</Logo>
					}
					<SearchBox/>
					{
                        Object.keys(this.props.user).length !== 0 ?
							<RightBox>
								<Button onClick={this.handleClick.bind(this, "/")}>
                                    Homepage
								</Button>
								<Button onClick={this.handleClick.bind(this, "/about-us")}>
                                    About us
								</Button>
								<Button onClick={this.handleClick.bind(this, "/booking")}>
									Booking
								</Button>
								<Button onClick={this.handleClick.bind(this, "/contact")}>
									Contact
								</Button>
								<Profile handleClickProfile={this.handleClickProfile}{...this.props}
										 image_url={this.props.user.image_url}/>
								<Popover
									open={this.state.open}
									anchorEl={this.state.anchorEl}
									anchorReference={this.state.anchorReference}
									onClose={this.handleRequestClose}
									anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
									transformOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
								>
									<MenuItem style={{ fontSize: "14px", letterSpacing: "0.5px" }}
											  onClick={this.handleClickMyProfile.bind(this)}>
										<i className="material-icons"
										   style={{ fontSize: "22px", paddingRight: "15px" }}>
											person_outline</i>My Profile
									</MenuItem>
									<div style={{
                                        borderTopStyle: "solid",
                                        borderTopWidth: "thin",
                                        borderTopColor: "#bdc3c7"
                                    }}>
										<MenuItem style={{ color: "red", fontSize: "14px", letterSpacing: "0.5px" }}
												  onClick={this.handleLogout.bind(this)}>
											<i className="material-icons"
											   style={{ fontSize: "22px", paddingRight: "15px" }}>
												exit_to_app</i>Sign Out
										</MenuItem>
									</div>
								</Popover>

							</RightBox>
                            :
							<RightBox>
								<Button onClick={this.handleClick.bind(this, "/")}>
									Homepage
								</Button>
								<Button onClick={this.handleClick.bind(this, "/about-us")}>
									About us
								</Button>
								<Button onClick={this.handleClick.bind(this, "/booking")}>
									Booking
								</Button>
								<Button onClick={this.handleClick.bind(this, "/contact")}>
									Contact
								</Button>
								<Button onClick={this.handleClick.bind(this, "/register")}>
									Register
								</Button>
								<ButtonLogin raised onClick={this.handleClickLogin}>
									Sign in
								</ButtonLogin>
							</RightBox>

					}
				</HeaderRow>
			</HeaderContainer>
		);
	}
}

Header.defaultProps = {};

function mapStateToProps(state) {
	return {
		language: state.language,
		user: state.user,
	}
}

const mapDispatchToProps = {
	loginUserFromAuthToken: loginUserFromAuthToken,
	logoutUserFromAuthToken: logoutUserFromAuthToken
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));