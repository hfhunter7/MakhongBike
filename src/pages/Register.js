import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';

import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import TextField from 'material-ui/TextField';
import Button from "material-ui/Button";

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
    display: flex;
    margin-bottom: 1%;
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
                            />
                            <TextInput
                                id="password"
                                label="Password"
                                placeholder="password"
                                type="password"
                            />
                            <TextInput
                                id="confirm-password"
                                label="Confirm Password"
                                placeholder="confirm password"
                                type="password"
                            />
                            <TextInput
                                id="name"
                                label="Name"
                                placeholder="Eden Hazard"
                            />
                            <TextInput
                                id="email"
                                label="Email"
                                placeholder="abc@abc.com"
                            />
                            <TextInput
                                id="tel"
                                label="Phone Number"
                                placeholder="xxx-xxx-xxxx"
                            />
                        </ContentForm>
                        <ButtonRegister raised color="primary">Register</ButtonRegister>
                    </Content>
                    <HRLineBTM/>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

Register.defaultProps = {};

function mapStateToProps( state ) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);