import React, { Component } from 'react';
import {
    ButtonHeader,
    ButtonLogin,
    HeaderContainer,
    HeaderRow,
    Logo,
    RightBox,
    SearchBox
} from "../style-js/Header.style";

import Popover from 'material-ui/Popover';
import Profile from "./Profile";
import { MenuItem } from "material-ui/Menu";
import { findDOMNode } from 'react-dom';
import { connect } from "react-redux";
import { loginUsernameFromAuthToken, logoutUserFromAuthToken } from "../actions/actionCreators";
import { current_user_storage, isLoggedIn_storage } from "../helpers/sessionHelper";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import LogoImage from '../image/maekhongbike_logo.png'

const LogoStyle = styled.img`
	height: 45px;
	border-radius: 5px;
	background: transparent;
`;

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showLoading: true,
			ShowMenu: null,
			ShowMenuLogin: null,
			open: false,
			openLogin: false,
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

    handleClickSignIn(key) {
        return (event) => {
            this.setState({ [key]: true, [key]: event.currentTarget, anchorEl: findDOMNode(this.button) });
		}
    };

	handleClickMyProfile() {
		this.props.history.push('/profile')
	};

    handleClickLogin = () => {
        this.props.history.push('/login')
    };

	handleLogout = () => {
		this.setState({ open: false, showLoading: true });
		this.props.logoutUserFromAuthToken();
	};

	handleClick(url) {
		this.props.history.push(url)
	}

	handleRequestClose = (key) => {
		return () => {
            this.setState({ [key]: false })
		}
	};

    handleClickLoginWithUsername = () => {
        this.props.history.push('/loginWithUsername')
	};

	componentDidMount() {
		if (isLoggedIn_storage()) {
			const user = this.props.user;
			const user_storage = current_user_storage();
			const auth_token = user_storage.auth_token;

			if (Object.keys(user).length === 0 && user.constructor === Object) {
				this.props.loginUsernameFromAuthToken(auth_token);
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
								<ButtonHeader onClick={this.handleClick.bind(this, "/")}>
                                    หน้าแรก
								</ButtonHeader>
								<ButtonHeader onClick={this.handleClick.bind(this, "/about-us")}>
                                    ทีมของเรา
								</ButtonHeader>
								<ButtonHeader onClick={this.handleClick.bind(this, "/booking")}>
									จองทริป
								</ButtonHeader>
								<ButtonHeader onClick={this.handleClick.bind(this, "/contact")}>
									ติดต่อเรา
								</ButtonHeader>
								<Profile handleClickProfile={this.handleClickProfile}{...this.props}
										 image_url="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png"/>
								<Popover
									open={this.state.open}
									anchorEl={this.state.anchorEl}
									anchorReference={this.state.anchorReference}
									onClose={this.handleRequestClose('open')}
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
											  onClick={this.handleClick.bind(this, "/profile")}>
										<i className="material-icons"
										   style={{ fontSize: "22px", paddingRight: "15px" }}>
											person_outline</i>ข้อมูลส่วนตัว
									</MenuItem>
									<MenuItem style={{ fontSize: "14px", letterSpacing: "0.5px" }}
											  onClick={this.handleClick.bind(this, "/reserve-history")}>
										<i className="material-icons"
										   style={{ fontSize: "22px", paddingRight: "15px" }}>
											history</i>ประวัติการจอง
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
												exit_to_app</i>ออกจากระบบ
										</MenuItem>
									</div>
								</Popover>

							</RightBox>
                            :
							<RightBox>
								<ButtonHeader onClick={this.handleClick.bind(this, "/")}>
									หน้าแรก
								</ButtonHeader>
								<ButtonHeader onClick={this.handleClick.bind(this, "/about-us")}>
									ทีมของเรา
								</ButtonHeader>
								<ButtonHeader onClick={this.handleClick.bind(this, "/contact")}>
									ติดต่อเรา
								</ButtonHeader>
								<ButtonHeader onClick={this.handleClick.bind(this, "/register")}>
									สมัครสมาชิก
								</ButtonHeader>
								<ButtonLogin raised onClick={this.handleClickLoginWithUsername}>
									เข้าสู่ระบบ
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
    loginUsernameFromAuthToken: loginUsernameFromAuthToken,
	logoutUserFromAuthToken: logoutUserFromAuthToken
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));