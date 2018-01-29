import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components'

class Profile extends Component {
    constructor( props ) {
        super(props)
        this.state = {
            ShowMenu: null,
            open: false,
        }
    }

    handleClickProfile = event => {
        this.setState({ open: true, ShowMenu: event.currentTarget,});
    };

    handleRequestClose = () => {
        this.setState({ open: false});
    };

    handleClickMyProfile() {
        this.props.history.push('/profile')
    };
    handleClickPaymentMethod() {
        this.props.history.push('/payment')
    };
    handleClickPurchaseHistory() {
        this.props.history.push('/purchase')
    };

    render() {
        return (
            <div>
                <AvatarStyle
                    src={this.props.image_url}
                    onClick={this.props.handleClickProfile}
                />
            </div>
        );
    }
}

const AvatarStyle = styled(Avatar)`
		margin-left: 20px !important;
		cursor: pointer !important;
`;

export default Profile;
