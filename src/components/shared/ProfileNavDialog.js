import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button'
import Dialog, {
    DialogContent,
    withMobileDialog,
} from 'material-ui/Dialog';
import styled from 'styled-components'
import { IconSpan } from '../../style-js/Icon.style'
import { logoutUserFromAuthToken } from '../../actions/actionCreators';
import { connect } from 'react-redux';

const ConfirmDialogContainer = styled.div`
	z-index: 99999;
`;
const HeaderText = styled.div`
	font-size: 30px;
	font-weight: bold;
	margin-bottom: 30px;
`;
const DialogContainer = styled.div`
	text-align: left;
	@media (max-width: 767px) {
		margin-top: 30px;
	}
`;
export const MenuBox = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const MenuBoxCloseMenu = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: right;
`;

export const TextIconCloseMenu = styled.span`
    font-size: 20px;
    color: white;
`;

export const IconSpanItem = styled(IconSpan)`
	 font-size: 70px;
`;

export const IconSpanExitItem = styled(IconSpan)`
	 font-size: 70px;
	 color: red;
`;

export const TextIcon = styled.span`
    font-size: 20px;
    color: black;
     vertical-align: 26px
`;

export const TextExitIcon = styled.span`
    font-size: 20px;
    color: red;
     vertical-align: 26px
`;

const DescriptionBlock = styled.div`
	color: #000000;
`;

class ProfileNavDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
        };
    }

    handleClickProfile=()=>{
        this.setState({
            url: '/profile',
        });
        this.props.handleProfileClick('/profile')
        // this.props.handleProfileClick(this.state.url)
        this.props.handleRequestClose()
    };

    handleClickPayment=()=>{
        this.setState({
            url: '/payment',
        });
        this.props.handleProfileClick('/payment')
        // this.props.handleProfileClick(this.state.url)
        this.props.handleRequestClose()
    };

    handleClickPurchase=()=>{
        this.setState({
            url: '/purchase',
        });
        this.props.handleProfileClick('/purchase')
        // this.props.handleProfileClick(this.state.url)
        this.props.handleRequestClose()
    };

    handleLogout = () => {
        this.props.logoutUserFromAuthToken();
    };

    render() {
        const { fullScreen } = this.props;
        return (
            <ConfirmDialogContainer>
                <Dialog
                        fullScreen={fullScreen}
                        open={this.props.open}
                        onClose={this.props.handleRequestClose}>
                    <DialogContent>
                        <DialogContainer>
                            <HeaderText>{this.props.headerText}</HeaderText>
                            <DescriptionBlock>
                                <MenuBox onClick={this.handleClickProfile} ><IconSpanItem name="account_circle"/><TextIcon>Profile</TextIcon></MenuBox>
                                {/*<MenuBox onClick={this.handleClickPayment} ><IconSpanItem name="payment"/><TextIcon>Payment Method</TextIcon></MenuBox>*/}
                                {/*<MenuBox onClick={this.handleClickPurchase}><IconSpanItem name="history"/><TextIcon>Purchase History</TextIcon></MenuBox>*/}
                                <hr/>
                                <MenuBox onClick={this.handleLogout}><IconSpanExitItem name="exit_to_app"/><TextExitIcon>Sign Out</TextExitIcon></MenuBox>
                            </DescriptionBlock><br/>
                            <MenuBoxCloseMenu onClick={this.props.handleRequestClose}><Button raised color="accent"><TextIconCloseMenu>Close Menu</TextIconCloseMenu></Button></MenuBoxCloseMenu>
                        </DialogContainer>
                    </DialogContent>
                </Dialog>
            </ConfirmDialogContainer>
        );
    }
}

ProfileNavDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
    logoutUserFromAuthToken: logoutUserFromAuthToken
};

export default connect(null, mapDispatchToProps)(withMobileDialog()(ProfileNavDialog));
