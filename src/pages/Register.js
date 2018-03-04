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
import { registerUser } from "../actions/actionCreators";

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
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
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
    margin-top: 2%;
    margin-bottom: -7%;
`;

class Register extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            name: '',
            email: '',
            phone_number: ''
        }
    }

    updateStateByKeyHandler = (key) => {
        return (e) => {
            this.setState({
                [key]: e.target.value
            })
        }
    };

    enabledButton = () => {
        let enabled = true;

        if(this.state.username !== '' && this.state.password !== '' && this.state.confirm_password !== ''
            && this.state.name !== '' && this.state.phone_number !== '' && this.state.email !== '')
        {
            enabled = false
        }

        return enabled;
    };

    handleClickRegister = () => {
        let pass;

        if(this.state.confirm_password === this.state.password){
            pass = this.state.password;
        }

        const data = {
            username: this.state.username,
            password: pass,
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone_number
        };
        console.log(data);

        this.props.registerUser(data);
        alert('Register Success');
    };

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>สมัครสมาชิก</TitleDashBoard>
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
                            <TextInput
                                id="confirm-password"
                                label="Confirm Password"
                                placeholder="confirm password"
                                type="password"
                                onChange={this.updateStateByKeyHandler('confirm_password')}
                            />
                            <TextInput
                                id="name"
                                label="Name"
                                placeholder="Eden Hazard"
                                onChange={this.updateStateByKeyHandler('name')}
                            />
                            <TextInput
                                id="email"
                                label="Email"
                                placeholder="abc@abc.com"
                                onChange={this.updateStateByKeyHandler('email')}
                            />
                            <TextInput
                                id="tel"
                                label="Phone Number"
                                placeholder="xxx-xxx-xxxx"
                                onChange={this.updateStateByKeyHandler('phone_number')}
                            />
                        </ContentForm>
                        <ButtonRegister
                            raised
                            color="primary"
                            onClick={this.handleClickRegister}
                            disabled={this.enabledButton()}
                        >
                            Register
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

function mapStateToProps( state ) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    registerUser: registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);