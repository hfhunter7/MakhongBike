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
    display: flex;
    
    @media (max-width: 767px) {
        display: block;
		width: 100%;
		margin: 0;
	}
`;

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>Your Dashboard</TitleDashBoard>
                    <HRLine/>
                    <Content>

                    </Content>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

Dashboard.defaultProps = {
    best_selling: [ {
        item_name: 'Google Analytices Certification Exam Training',
        type_name: 'Course',
        total_sold: 102
    },
        {
            item_name: 'microsoft Certification exam- Technology Literacy for Educators',
            type_name: 'Exam',
            total_sold: 101
        },
        {
            item_name: 'How to Earn More with Google Analysis',
            type_name: 'Course',
            total_sold: 30
        },
        {
            item_name: 'test',
            type_name: 'test',
            total_sold: 0
        }, {
            item_name: 'test',
            type_name: 'test',
            total_sold: 0
        },
        {
            item_name: 'test',
            type_name: 'test',
            total_sold: 0
        }, {
            item_name: 'test',
            type_name: 'test',
            total_sold: 0
        }, {
            item_name: 'test',
            type_name: 'test',
            total_sold: 0
        }
    ]
};

function mapStateToProps( state ) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);