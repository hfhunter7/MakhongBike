import React, { Component } from 'react';
import { Container, Row } from '../style-js/Grid.style'
import PropTypes from 'prop-types'
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
    PurchaseContent,
    PurchaseBoxHeaderMenuHistory,
    PurchaseBoxDetail,
    PurchaseDetailBoxText,
    NumberHistoryAdmin,
    OrderDateTimeAdmin,
    OrderNumberAdmin,
    PaidWithAdmin,
    OrderTotalAdmin,
    ReserveStatus,
    ButtonEditStatusPayment, NumberHistoryAdmin2, PaidWithAdmin2, OrderTotalAdmin2, OrderDateTimeAdmin2,
    OrderNumberAdmin2, ReserveStatus2,
} from '../style-js/PurchaseHistory.style'

import { withRouter } from "react-router";

import { connect } from 'react-redux';
import { EditStatusPayment, getAllReserves } from "../actions/actionCreators";
import { ContainLoader, Loader } from "../style-js/CertificateLayout.style";
import EditStatusPaymentDialog from "../components/shared/EditStatusPaymentDialog";
import HeaderAdmin from "../components/HeaderAdmin";

class ReserveHistoryAdmin extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            open: false,
            value: 1,
            showLoading: true,
            openEditDialog: false,
            status_payment: '',
            reserve_id: ''
        };

    }

    handleChange = ( event, index, value ) => this.setState({ value });

    componentWillMount() {
        this.props.getAllReserves();
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        if (nextProps.reserve_all !== this.props.reserve_all) {
            this.setState({
                showLoading: false
            })
        }
    }

    openDialog = ( key, reserve_id, status_payment ) => {
        return () => {
            this.setState({
                [key]: true,
                reserve_id: reserve_id,
                status_payment: status_payment
            })
        }
    };

    closeDialog = ( key ) => {
        return () => {
            this.setState({
                [key]: false,
                reserve_id: '',
                status_payment: ''
            })
        }
    };

    updateStatusPayment = ( data ) => {
        console.log(data)

        this.props.EditStatusPayment(this.state.reserve_id, data);

        this.setState({
            openEditDialog: false
        })
    };

    handleClickReserveDetail = (e) => {
        const id = e.currentTarget.dataset.id;
        this.props.history.push(`/reserve-history-admin/${id}`);
    };

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
                <HeaderAdmin {...this.props}/>
                <Row>
                    {
                        this.props.reserve_all.length > 0 ?
                            <PurchaseContainer>
                                <PurchaseHeaderHistory>
                                    <PurchaseTitleliftHistory>{`ประวัติการจอง (${this.props.reserve_all.length})`}</PurchaseTitleliftHistory>
                                </PurchaseHeaderHistory>
                                <PurchaseContent>
                                    <PurchaseBox>
                                        <PurchaseBoxHeaderHistory>
                                            <PurchaseBoxHeaderMenuHistory>
                                                <NumberHistoryAdmin2> # </NumberHistoryAdmin2>
                                                <OrderDateTimeAdmin> ผู้จอง</OrderDateTimeAdmin>
                                                <OrderNumberAdmin> วันที่จอง (ปี/เดือน/วัน) </OrderNumberAdmin>
                                                <PaidWithAdmin> เส้นทาง</PaidWithAdmin>
                                                <OrderTotalAdmin> สถานะการเช่าอุปกรณ์</OrderTotalAdmin>
                                                <ReserveStatus> สถานะการจ่ายเงิน </ReserveStatus>
                                            </PurchaseBoxHeaderMenuHistory>
                                        </PurchaseBoxHeaderHistory>
                                        <PurchaseBoxDetail>
                                            {
                                                this.props.reserve_all.length > 0 ?
                                                    this.props.reserve_all.map(( reserve, index ) => {
                                                        return (<div key={index}>
                                                            <PurchaseDetailBoxText key={index}
                                                                                   data-id={reserve.id}
                                                                                   onClick={this.handleClickReserveDetail}
                                                            >
                                                                <NumberHistoryAdmin>{index + 1}</NumberHistoryAdmin>
                                                                <OrderDateTimeAdmin2>{reserve.create_by}</OrderDateTimeAdmin2>
                                                                <OrderNumberAdmin2>{reserve.reserve_date}</OrderNumberAdmin2>
                                                                <PaidWithAdmin2>{reserve.route}</PaidWithAdmin2>
                                                                <OrderTotalAdmin2>{reserve.rent_status}</OrderTotalAdmin2>
                                                                <ReserveStatus2>{reserve.status_payment}</ReserveStatus2>

                                                            </PurchaseDetailBoxText>
                                                                <ButtonEditStatusPayment
                                                                    color="primary"
                                                                    onClick={this.openDialog('openEditDialog', reserve.id, reserve.status_payment)}
                                                                >
                                                                    แก้ไข
                                                                </ButtonEditStatusPayment></div>

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
                            < PurchaseEmpty>
                                < IconEmpty name="history"/>
                                <PurchaseSubtitle>No Reserve History</PurchaseSubtitle>
                            </PurchaseEmpty>
                    }
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
                <EditStatusPaymentDialog open={this.state.openEditDialog}
                                         EditStatusPayment={this.updateStatusPayment}
                                         handleRequestClose={this.closeDialog('openEditDialog')}
                                         status_payment={this.state.status_payment}
                />
            </Container>

        );
    }
}

ReserveHistoryAdmin.propTypes = {
    getAllReserves: PropTypes.func.isRequired,
    EditStatusPayment: PropTypes.func.isRequired
};

function mapStateToProps( state ) {
    return {
        reserve_all: state.reserve_all
    }
}

const mapDispatchToProps = {
    getAllReserves: getAllReserves,
    EditStatusPayment: EditStatusPayment
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReserveHistoryAdmin));