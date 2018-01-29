import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';

const StandingBalance = styled.div`
    width: 100%;
	display: inline-block;
	border: 1px solid #ebebeb;
	//margin-left: 5%;
	box-sizing: border-box;
	cursor: pointer; 
	-webkit-animation: fadeinout 4s linear 1 forwards;
	animation: fadeinout 4s linear 1 forwards;
	
	@media (max-width: 767px) {
	    width: 100%;
	    display: inline-block;
	    border: 1px solid #ebebeb;
	    margin-left: 7%;
	    box-sizing: border-box;
	    max-width: 85%;
	    cursor: pointer;
	    -webkit-animation: fadeinout 4s linear 1 forwards;
	    animation: fadeinout 4s linear 1 forwards;
	}
`;

const StandingBalanceHeader = styled.span`
    font-size: 12px;
    font-weight: 600;
    margin-left: 6%;
    margin-top: 2%;
    display: flex;
`;

const StandingBalanceTotal = styled.span`
    display: block;
    font-size: 40px;
    color: green;
    text-align: center;
    font-weight: 500;
    margin-left: 2%;
    margin-top: 4%;
`;

const StandingBalanceWithdraw = styled.table`
    display: block;
    margin-left: 5%;
    margin-top: 4%;
    font-weight: 500;
`;

const StandingBalanceRow = styled.tr`
    font-size: 11px;
`;

const StandingBalanceColumn = styled.td`
    font-size: 12px;
`;

const StandingBalanceBody = styled.tbody`
    display: block;
`;

const StandingBalanceViewDetail = styled.a`
    font-weight: 600;
    font-size: 12px;
    display: block;
    margin-left: 6%;
    margin-top: 2%;
`;

const ButtonStyle = styled(Button)`
	background-color: #0088ff !important;
	color: #fff !important;
	width: 90% !important;
	margin-left: 5% !important;
	margin-bottom: 3% !important;
	margin-top: 3% !important;
`;

class OutStandBalance extends Component {
    render() {
        return (
            <div>
                <StandingBalance>
                    <StandingBalanceHeader>OutStanding balance</StandingBalanceHeader>
                    <StandingBalanceTotal>{`฿ 99,500.00`}</StandingBalanceTotal>
                    <StandingBalanceWithdraw>
                        <StandingBalanceBody>
                            <StandingBalanceRow>
                                <StandingBalanceColumn>Latest withdrawal:</StandingBalanceColumn>
                                <StandingBalanceColumn>31/10/2017 12:14 PM</StandingBalanceColumn>
                            </StandingBalanceRow>
                            <StandingBalanceRow>
                                <StandingBalanceColumn>Withdrawal amount:</StandingBalanceColumn>
                                <StandingBalanceColumn>฿ 3,500.00</StandingBalanceColumn>
                            </StandingBalanceRow>
                            <StandingBalanceRow>
                                <StandingBalanceColumn>Withdrawal status:</StandingBalanceColumn>
                                <StandingBalanceColumn>Inprogress</StandingBalanceColumn>
                            </StandingBalanceRow>
                        </StandingBalanceBody>
                    </StandingBalanceWithdraw>
                    <StandingBalanceViewDetail>View detail</StandingBalanceViewDetail>
                    <ButtonStyle>WITHDRAWAL</ButtonStyle>
                </StandingBalance>
            </div>
        );
    }
}

OutStandBalance.defaultProps = {};

export default OutStandBalance;
