import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';
import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import PropTypes from 'prop-types';
import ContactImg from "../image/contact.jpg";
import ContactUs from "../image/contact-us.jpg";

const TitleDashBoard = styled.div`
    font-size: 20px;
    padding-left: 5%;
	padding-right: 120px;
	padding-top: 30px;
	text-align: center;
	
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
    margin-bottom: -7%;
    display: flex;
    
    @media (max-width: 767px) {
        display: block;
		width: 100%;
		margin: 0;
	}
`;

const PhoneText = styled.p`
    font-weight: 500;
    font-size: 20px;
    text-align: center;
`;

const FacebookText = styled.p`
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin-bottom: 1%;
`;

const ContentImage = styled.div`
    margin-left: auto;
	margin-right: auto;
	display: block;
	margin-bottom: 0;
`;

class Contact extends Component {
    render() {

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>
                        <img src={ContactUs} alt=""/>
                    </TitleDashBoard>
                    <HRLine/>
                    <PhoneText>Tel: 091-3874190</PhoneText>
                    <FacebookText>Facebook: <a href="https://www.facebook.com/nut.intayot">Nut Inatayot</a></FacebookText>
                    <Content>
                        <ContentImage>
                            <img src={ContactImg} alt=""/>
                        </ContentImage>
                    </Content>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {};

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
