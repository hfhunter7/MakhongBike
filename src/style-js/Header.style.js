import { IconSpan } from "./Icon.style";
import styled from 'styled-components';
import Button from 'material-ui/Button';

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
	height: 66px;
	padding: 0 16px;
	flex-direction: row;
	display: flex;
	background-color: #272727;
	box-shadow: 0 5px 10px -3px ${props => props.shadowColor ? props.shadowColor : '#ccc'};
	align-items: center;
`;
export const Logo = styled.div`
	display: flex;
	flex-direction: row;
	cursor: pointer;
	margin-left: 1%;
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

export const ButtonLogin = styled(Button)`
	  width: 150px !important;
	  margin-left: 10px;
      background-color: #DCDCDC !important;
       @media (max-width: 767px){
          display: none !important;
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

export const ButtonHeader = styled(Button)`
    color: white !important;
`;


