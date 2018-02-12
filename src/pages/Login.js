import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import TextField from 'material-ui/TextField';
import Button from "material-ui/Button";
import { loginUsernameFromAuthToken, loginWithUsername } from "../actions/actionCreators";

const TitleDashBoard = styled.div`
    font-size: 20px;
    padding-left: 5%;
	padding-right: 120px;
	padding-top: 40px;
	
	@media (max-width: 767px) {
		padding-left: 4%;
		padding-right: 10px;
		padding-top: 20px;
	}
`;

const HRLine = styled.hr`
    margin-left: 5%;
    max-width: 90%;
    color: ghostwhite;
    
   @media (max-width: 767px) {
		margin-left: 5%;
        max-width: 90%;
        color: ghostwhite;
	}
`;

const Content = styled.div`
    margin-right: 5%;
    width: 100%;
    margin-top: 5%;
    @media (max-width: 767px) {
        display: block;
		width: 100%;
		margin: 0;
	}
`;

const ContentForm = styled.form`
    margin-left: 36%;
`;

const TextInput = styled(TextField)`
    width: 45%;
    margin-bottom: 1%;
    display: flex !important;
    margin-top: 1% !important;
`;

const ButtonRegister = styled(Button)`
    margin-left: 47%;
    margin-top: 2%;
`;

const HRLineBTM = styled.hr`
    margin-left: 5%;
    max-width: 90%;
    color: ghostwhite;
    margin-top: 5%;
    margin-bottom: -7%;
`;

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
        }
    }

    updateStateByKeyHandler = (key) => {
        return (e) => {
            this.setState({
                [key]: e.target.value
            })
        }
    };

    handleClickLogin = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(data);

        this.props.loginWithUsername(data);
        //this.props.history.push('/');
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.user !== nextProps.user) {
            //console.log('login page :: user is login success redirect to home page')
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>เข้าสู่ระบบ</TitleDashBoard>
                    <HRLine/>
                    <Content>
                        <ContentForm noValidate autoComplete="off">
                            <TextInput
                                id="username"
                                label="Username"
                                placeholder="username"
                                onChange={this.updateStateByKeyHandler('username')}
                            />
                            <TextInput
                                id="password"
                                label="Password"
                                placeholder="password"
                                type="password"
                                onChange={this.updateStateByKeyHandler('password')}
                            />
                        </ContentForm>
                        <ButtonRegister
                            raised
                            color="primary"
                            onClick={this.handleClickLogin}
                        >
                            Login
                        </ButtonRegister>
                    </Content>
                    <HRLineBTM/>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

Login.propTypes = {
    loginWithUsername: PropTypes.func.isRequired,
    loginUsernameFromAuthToken: PropTypes.func.isRequired
};

function mapStateToProps( state ) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    loginWithUsername: loginWithUsername,
    loginUsernameFromAuthToken: loginUsernameFromAuthToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);