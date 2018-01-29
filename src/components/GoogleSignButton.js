import React, { Component } from 'react';
import styled from 'styled-components';
import GIcon from '../image/icon/g-icon.svg';

export const GoogleSignButtonContainer = styled.div`
	background-color: #4285f4;
	color: #ffffff;
	height: 50px;
	width: 350px;
	border: none;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
	font-size: 16px;
	line-height: 48px;
	display: block;
	border-radius: 1px;
	transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
	font-family: Roboto, arial, sans-serif;
	cursor: pointer;
	margin: auto;
	
	&:hover {
		box-shadow: #9fc1f9 0px 0px 2px 2px;
	}
`;
export const GoogleSignIcon = styled.div`
	width: 48px;
	height: 48px; 
	text-align: center; 
	display: block; 
	margin-top: 1px; 
	margin-left: 1px; 
	float: left; 
	background-color: #ffffff; 
	border-radius: 1px; 
	white-space: nowrap;
`;

export const GoogleSignLabel = styled.span`
	text-transform: ${props => props.textTransform};
`;

export const GoogleIcon = styled.img`
	width: 35px;
	padding-top: 5px;
`;

class GoogleSignButton extends Component {
	render() {
		return (
			<GoogleSignButtonContainer id={this.props.id}>
				<GoogleSignIcon>
					<GoogleIcon src={GIcon}/>
				</GoogleSignIcon>
				<GoogleSignLabel textTransform={this.props.textTransform}>{this.props.label}</GoogleSignLabel>
			</GoogleSignButtonContainer>
		);
	}
}

GoogleSignButton.defaultProps = {
	label: "Sign in with Google",
};

export default GoogleSignButton;
