import styled from 'styled-components';
import { Icon, IconSpan } from './Icon.style';
import { greenHue, text_logo } from './variables.style'

export const SignInContainer = styled.div`
	background: #eceff4;
	height: 100vh;
`;

export const SignInBlockWrapper = styled.div`
	background: #fff;
	display: inline-block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 460px;
    //height: 395px;
    height: 460px;
    margin: auto;
    box-shadow: 0px 5px 10px #eceff4, 0px 5px 10px #888888;
    cursor: default;
    
    @media (max-width: 767px) {
		width: auto;
		height: auto;
	}
	
	@media only screen 
	and (min-device-width: 768px) 
	and (max-device-width: 1024px) 
	and (-webkit-min-device-pixel-ratio: 1) {
		width: auto;
		height: auto;
	}
`;

export const SignInTapTop = styled.div`
	background: ${props => props.color || greenHue};
	height: 10px;
`;

export const SignInRow = styled.div`
	width: ${props => props.full ? '100%' : undefined};
	text-align: ${props => props.center ? 'center' : undefined};
	margin-top: ${props => props.marginTop};
	margin-left: ${props => props.marginLeft};
	margin-right: ${props => props.marginRight};
	margin-bottom: ${props => props.marginBottom};
	
	@media (max-width: 767px) {
		top: ${props => props.mobile ? 0 : undefined};
		bottom: ${props => props.mobile ? 0 : undefined};
		left: ${props => props.mobile ? 0 : undefined};
		right: ${props => props.mobile ? 0 : undefined};
		height: ${props => props.mobile ? '395px' : undefined};
		margin: ${props => props.mobile ? 'auto' : undefined};
		display: ${props => props.mobile ? 'inline-block' : undefined};
		position: ${props => props.mobile ? 'fixed' : undefined};
	}
	
	@media only screen 
	and (min-device-width: 768px) 
	and (max-device-width: 1024px) 
	and (-webkit-min-device-pixel-ratio: 1) {
		top: ${props => props.mobile ? 0 : undefined};
		bottom: ${props => props.mobile ? 0 : undefined};
		left: ${props => props.mobile ? 0 : undefined};
		right: ${props => props.mobile ? 0 : undefined};
		height: ${props => props.mobile ? '395px' : undefined};
		margin: ${props => props.mobile ? 'auto' : undefined};
		display: ${props => props.mobile ? 'inline-block' : undefined};
		position: ${props => props.mobile ? 'fixed' : undefined};
	}
`;

export const SignInLogo = styled(Icon)`
	color: ${props => props.color || greenHue};
	font-size: 80px;
	padding-top: 45px;
	
	@media only screen 
	and (min-device-width: 768px) 
	and (max-device-width: 1024px) 
	and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 100px;
	}
`;

export const SignInTextLogo = styled.h1`
	color: ${text_logo};

	@media only screen 
	and (min-device-width: 768px) 
	and (max-device-width: 1024px) 
	and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 36px;
	}
`;

export const SignInTextDescription = styled.p`
	font-size: 14px;
	color: ${text_logo};
	padding-left: 50px;
	padding-right: 50px;

	@media only screen 
	and (min-device-width: 768px) 
	and (max-device-width: 1024px) 
	and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 20px;
	}
`;

export const SignInIcon = styled(IconSpan)`
	color: ${props => props.color};
	font-size: 36px;
	padding-right: 10px;

	@media only screen 
	and (min-device-width: 768px) 
	and (max-device-width: 1024px) 
	and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 50px;
	}
`;