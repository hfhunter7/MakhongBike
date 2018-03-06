import React, { Component } from 'react';
import { Container, Row } from '../style-js/Grid.style'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import Footer from "../components/Footer";
import NavBarFooter from '../components/NavBarFooter';
import {
    PurchaseContainer,
    PurchaseHeaderHistory,
    PurchaseTitleliftHistory,
    PurchaseEmpty,
    IconEmpty,
    PurchaseSubtitle,
    PurchaseBox,
    PurchaseBoxHeaderHistory,
    NumberHistory,
    PurchaseContent,
    OrderNumber,
    OrderDateTime,
    PaidWith,
    OrderTotal,
    PurchaseBoxHeaderMenuHistory,
    PurchaseBoxDetail,
    PurchaseDetailOrderNumber,
    PurchaseDetailBoxText2,
} from '../style-js/PurchaseHistory.style'

import { withRouter } from "react-router";

import { connect } from 'react-redux';
import { getReserves } from "../actions/actionCreators";
import { ContainLoader, Loader } from "../style-js/CertificateLayout.style";

class ReserveHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 1,
            showLoading: true
        };

        this.handleClickOrderDetail = this.handleClickOrderDetail.bind(this);
    }

    handleChange = (event, index, value) => this.setState({value});

    componentWillMount() {
        this.props.getReserves();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.reserve !== this.props.reserve) {
            this.setState({
                showLoading: false
            })
        }
    }

    handleClickOrderDetail(e){
        const id = e.currentTarget.dataset.id;
        this.props.history.push(`/reserve-history/${id}`);
    }

    render() {
        if (this.state.showLoading)
            return <ContainLoader>
                <Loader
                    color={'#0088ff'}
                    size={75}
                />
            </ContainLoader>;
        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    {
                        this.props.reserve.length > 0 ?
                            <PurchaseContainer>
                                <PurchaseHeaderHistory>
                                    <PurchaseTitleliftHistory>{`ประวัติการจอง (${this.props.reserve.length})`}</PurchaseTitleliftHistory>
                                </PurchaseHeaderHistory>
                                <PurchaseContent>
                                    <PurchaseBox>
                                        <PurchaseBoxHeaderHistory>
                                            <PurchaseBoxHeaderMenuHistory>
                                                <NumberHistory> # </NumberHistory>
                                                <OrderDateTime> ผู้จอง</OrderDateTime>
                                                <OrderNumber> วันที่จอง (ปี/เดือน/วัน) </OrderNumber>
                                                <PaidWith> เส้นทาง</PaidWith>
                                                <OrderTotal> สถานะการเช่าอุปกรณ์</OrderTotal>
                                            </PurchaseBoxHeaderMenuHistory>
                                        </PurchaseBoxHeaderHistory>
                                        <PurchaseBoxDetail>
                                            {
                                                this.props.reserve.length > 0 ?
                                                    this.props.reserve.map(( reserve, index ) => {
                                                        return (
                                                            <PurchaseDetailBoxText2 key={index}
                                                                                   onClick={this.handleClickOrderDetail}
                                                                                   data-id={reserve.id}>
                                                                <NumberHistory>{index + 1}</NumberHistory>
                                                                <OrderDateTime>{reserve.create_by}</OrderDateTime>
                                                                <PurchaseDetailOrderNumber>{reserve.reserve_date}</PurchaseDetailOrderNumber>
                                                                <PaidWith>{reserve.route}</PaidWith>
                                                                <OrderTotal>{reserve.rent_status}</OrderTotal>
                                                            </PurchaseDetailBoxText2>
                                                        )
                                                    })
                                                    :
                                                    <div>No purchase</div>
                                            }
                                        </PurchaseBoxDetail>
                                    </PurchaseBox>
                                </PurchaseContent>
                            </PurchaseContainer>
                            :
                            < PurchaseEmpty >
                                < IconEmpty name="history"/>
                                <PurchaseSubtitle>No Reserve History</PurchaseSubtitle>
                            </PurchaseEmpty>
                    }
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>

        );
    }
}

ReserveHistory.propTypes = {
    getReserves: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        reserve: state.reserve
    }
}

const mapDispatchToProps = {
    getReserves: getReserves
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReserveHistory));