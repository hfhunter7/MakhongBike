import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';
import OutStandBalance from "../components/outstand/OutStandBalance";
import BestSellingItem from "../components/BestSellingItem";
import OutStandStat from "../components/outstand/OutStandStat";
import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";

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

// const TotalExtens =styled(table)`
//
// `;
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

const LeftRow = styled.div`
    display: inline-block;
    width: calc(25% - 5px);
    
    @media (max-width: 767px) {
		width: 100%;
	}
`;

const RightRow = styled.div`
    display: inline-block;
    width: calc(75% - 5px);
    margin-left: 2%;
    
    @media (max-width: 767px) {
		width: auto;
		margin: 40px 0 20px 0;
		
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
                        <LeftRow>
                            <OutStandBalance/>
                            <OutStandStat icon_color="#56d1c1"
                                          icon_name="shopping_cart"
                                          count_item="888"
                                          item_name="Orders"/>

                            <OutStandStat icon_color="#f76161"
                                          icon_name="supervisor_account"
                                          count_item="77"
                                          item_name="Buyer"/>

                            <OutStandStat icon_color="#62a9f9"
                                          icon_name="search"
                                          count_item="6666"
                                          item_name="Visits"/>
                        </LeftRow>
                        <RightRow>
                            <BestSellingItem sellings={this.props.best_selling}/>
                        </RightRow>
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