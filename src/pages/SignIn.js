/*global gapi*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    SignInContainer,
    SignInBlockWrapper,
    SignInTapTop,
    SignInRow,
    SignInLogo,
    SignInTextLogo,
    SignInTextDescription,
    SignInIcon
} from '../style-js/SignIn.style';

import GoogleSignButton from '../components/GoogleSignButton';

import { attachSignin } from '../helpers/sessionHelper';
import { googleAppID } from '../helpers/tokenHelper';

import { connect } from 'react-redux';
import { loginGoogle, loginUserFromAuthToken } from '../actions/actionCreators'
import { isLoggedIn_storage, current_user_storage } from '../helpers/sessionHelper';

class SignIn extends Component {
    componentDidMount() {
        const props = this.props;
        gapi.load('auth2', () => {

            this.auth2 = gapi.auth2.init({
                client_id: googleAppID[process.env.NODE_ENV],
                cookiepolicy: 'single_host_origin',
                scope: 'profile'
            });
            attachSignin(this.auth2, document.getElementById('signup-with-google-button'), props);
        });

        if (this.isAuthenticated()) {
            //console.log('login page :: user is login')
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.user !== nextProps.user) {
            //console.log('login page :: user is login success redirect to home page')
            this.props.history.push('/');
        }
    }

    isAuthenticated() {
        if (isLoggedIn_storage()) {
            const user = this.props.user;
            const user_storage = current_user_storage();
            const auth_token = user_storage.auth_token;

            if(Object.keys(user).length === 0 && user.constructor === Object){
                this.props.loginUserFromAuthToken(auth_token);
            }
            return true
        } else {
            return false;
        }
    }

    render() {
        return (
            <SignInContainer>
                <SignInBlockWrapper>
                    <SignInTapTop />
                    <SignInRow mobile full center>
                        <SignInLogo name="account_balance"/>
                        <SignInTextLogo>Training Center</SignInTextLogo>
                        <SignInTextDescription>Online training courses with certificates that can help you build your skills and advance your career!</SignInTextDescription>

                        <SignInRow marginBottom="10px">
                            <SignInIcon name="play_circle_filled" color="#ccc"/>
                            <SignInIcon name="description" color="#ccc"/>
                            <SignInIcon name="help_outline" color="#ccc"/>
                        </SignInRow>
                        <GoogleSignButton id="signup-with-google-button" textTransform="uppercase"/>
                    </SignInRow>
                </SignInBlockWrapper>
            </SignInContainer>
        );
    }
}

SignIn.propTypes = {
    loginGoogle: PropTypes.func.isRequired,
    loginUserFromAuthToken: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    loginGoogle: loginGoogle,
    loginUserFromAuthToken: loginUserFromAuthToken
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);