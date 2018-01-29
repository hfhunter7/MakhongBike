import styled from 'styled-components'
import { IconSpan } from './Icon.style'
import Button from 'material-ui/Button';

export const NavBarFooterContainer = styled.div`
	display: none;
	
	@media (max-width: 767px) {
		display: block;
		position: fixed;
		width: 100%;
		z-index: 999;
		background-color: #fff;
		bottom: 0;
		height: 50px;
	}
`;

export const ButtonLogin = styled(Button)`
      width: 250px !important;
      background-color: #4285f4 !important;
`;

export const NavBarFooterRowNoLogin = styled.div`
	text-align: center;
	align-items: center;
	vertical-align: middle;
	margin-top: 6px;
`;
export const NavBarFooterRow = styled.div`
	height: 56px;
	padding: 0 16px;
	flex-direction: row;
	display: flex;
	background-color: #fff;
	box-shadow: 0 -5px 5px -5px #ccc;
	align-items: center;
	width: 100%;
`;

export const NavIcon = styled(IconSpan)`
	font-size: ${props => props.active ? '32px' : undefined};
`;

export const NavItem = styled.div`
	width: 25%;
	text-align: center;
	color: ${props => props.active ? '#0088FF' : undefined};
`;