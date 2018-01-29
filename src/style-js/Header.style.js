import { IconSpan } from "./Icon.style";
import styled from 'styled-components';

export const LogoIcon = styled(IconSpan)`
	color: #fff;
	font-size: 50px;
`;

export const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
`;

export const HeaderRow = styled.div`
	height: 56px;
	padding: 0 16px;
	flex-direction: row;
	display: flex;
	background-color: #549635;
	box-shadow: 0 5px 10px -3px ${props => props.shadowColor ? props.shadowColor : '#ccc'};
	align-items: center;
`;
export const Logo = styled.div`
	display: flex;
	flex-direction: row;
	cursor: pointer;
	
`;

export const LogoText = styled.div`
	padding-top: 13px; 
	padding-left: 10px;
	font-size: larger;
	font-weight: 500;
	color: ghostwhite;
	@media (max-width: 767px) {
		display: none;
	}
`;

export const SearchBox = styled.div`
	flex: 1;
	padding-left: 10px;
	justify-content: flex-start;
`;

export const RightBox = styled.div`
	justify-content: flex-end;
	display: flex;
	float: right;
	
	@media (max-width: 767px) {
		display: none;
	}
	
	@media only screen 
	and (min-device-width: 768px) 
	and (max-device-width: 1024px) 
	and (-webkit-min-device-pixel-ratio: 1) {
		width: 300px;
	}
`;


