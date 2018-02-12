import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';

import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import ImageSlide from "../components/ImageSlide";

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

    render() {
        const images = [
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/pic1.jpg?alt=media&token=079885c9-643e-4344-9748-7739c4500e08' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/pic2.jpg?alt=media&token=f3790c70-5f91-47c9-b56e-60063d6f3a31' },
        ];

        const image_show = [
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/pic1.jpg?alt=media&token=079885c9-643e-4344-9748-7739c4500e08' },
        ];

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard></TitleDashBoard>
                    <HRLine/>
                    <Content>
                        <ImageSlide light_box_image={images} show_image={image_show}/>
                    </Content>
                    <HRLine/>
                    <ContentTextWelcome>
                        <WelcomeText>ยินดีต้อนรับสู่เว็บไซต์ MAEKHONG BIKEE</WelcomeText>
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