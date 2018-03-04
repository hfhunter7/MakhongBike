import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';

import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import { ImageContain, ImgContainer } from "../style-js/CourseDetail.style";

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

const ContentTextWelcome = styled.div`
    text-align: center;
`;

const WelcomeText = styled.h1`
    font-family: "Times New Roman", Times, serif;
    margin-bottom: -7%;
    margin-top: 3%;
`;

class Dashboard extends Component {

    render() {
        const images = [
            'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/pic1.jpg?alt=media&token=079885c9-643e-4344-9748-7739c4500e08',
            'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/homepage2.jpg?alt=media&token=b3351cc1-2658-41f1-9319-eb4cd84cbde0',
        ];

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard></TitleDashBoard>
                    <HRLine/>
                    <ImgContainer>
                        <ImageContain
                            images={images}
                            duration={5000}
                            transitionDuration={1000}
                        />
                    </ImgContainer>

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