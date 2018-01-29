import React, { Component } from 'react';
import styled from 'styled-components';

const OrderContainer = styled.div`
    width: 100%;
	display: flex;
	border: 1px solid #ebebeb;
	//margin-left: 5%;
	margin-top: 2%;
	height: 55px;
    padding: 8px;
	box-sizing: border-box;
	cursor: pointer;
	-webkit-animation: fadeinout 4s linear 1 forwards;
	animation: fadeinout 4s linear 1 forwards;
	
	@media (max-width: 767px) {
	    width: 100%;
	    margin-top: 3%;
	    //display: inline-block;
	    //border: 1px solid #ebebeb;
	    //margin-left: 7%;
	    //box-sizing: border-box;
	    //max-width: 85%;
	    //cursor: pointer;
	    //-webkit-animation: fadeinout 4s linear 1 forwards;
	    //animation: fadeinout 4s linear 1 forwards;
	    
	    
	}
`;

const ContainerIcon = styled.div`
    display: inline-block;
    background-color: ${props => props.icon_color};
    width: 24px;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 2%;
    
    @media (max-width: 767px) {
        //padding-left: 1.5%;
        //padding-right: 1.5%;
        //padding-top: 2%;
    }
`;

const OrderNumber = styled.p`
    font-weight: 500;
    font-size: 20px;
    
    @media (max-width: 767px) {
        //margin-top: -20%;
        //margin-left: 18%;
    }
`;

const OrderText = styled.p`
    font-size: 11px;
`;

const IconOrder = styled.i`
    color: #fff;
`;

const ContentDetail = styled.div`
    margin-left: 5%;
`;

const Content = styled.div`
    width: 100%;
    
    @media (max-width: 767px) {
        margin-right: 8%;
        margin-left: 7%;
        width: 85%;
    }
`;

class OutStandStat extends Component {
    render() {
        return (
            <Content>
                <OrderContainer>
                    <ContainerIcon icon_color={this.props.icon_color}>
                        <IconOrder className="material-icons">{this.props.icon_name}</IconOrder>
                    </ContainerIcon>
                    <ContentDetail>
                        <OrderNumber>{this.props.count_item}</OrderNumber>
                        <OrderText>{this.props.item_name}</OrderText>
                    </ContentDetail>
                </OrderContainer>
            </Content>
        );
    }
}

OutStandStat.defaultProps = {};

export default OutStandStat;
