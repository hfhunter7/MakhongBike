import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';

import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import ImageSlide from "../components/ImageSlide";
import Loading from "../components/Loading";


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
    display: block;
    width: 90%;
    @media (max-width: 767px) {
        display: block;
		width: 100%;
		margin: 0;
	}
`;

const ContentTextWelcome = styled.div`
    text-align: center;
`;

const WelcomeText = styled.h1`
    font-family: "Times New Roman", Times, serif;
    margin-bottom: -7%;
    margin-top: 3%;
`;

class Dashboard extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard></TitleDashBoard>
                    <HRLine/>
                    <Content>
                        <ImageSlide />
                    </Content>
                    <HRLine/>
                    <ContentTextWelcome>
                        <WelcomeText>ยินดีต้อนรับสู่เว็บไซต์ MAEKHONG BIKE</WelcomeText>
                    </ContentTextWelcome>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

Dashboard.defaultProps = {};

function mapStateToProps( state ) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);