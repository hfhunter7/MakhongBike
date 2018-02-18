import React, { Component } from 'react';
import { Container, Row } from '../style-js/Grid.style'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import Footer from "../components/Footer";
import NavBarFooter from '../components/NavBarFooter';
import {
    PurchaseContainer,
    PurchaseHeader,
    OrderDateTime,
    PurchaseTitlelift,
    PurchaseBox,
    PurchaseBoxHeader,
    PurchaseContent,
    PurchaseBoxHeaderMenu,
    Summary,
    PurchaseDetailBoxText, BillAddress, DetailOrderNumber,
    DetailDate, DetailPaidWith, ItemBoxHeader, ItemBoxDetail, ItemRent, ItemPrice, RouteText, AdultText, ChildText,
    ItemRentDetail, EquipmentText, PriceText, TextRoute, ChildNumber, EmptyRent, EmptyRentText
} from '../style-js/PurchaseHistory.style'
import { withRouter } from "react-router";

import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { getReservesDetail } from "../actions/actionCreators";

class ReserveHistoryDetail extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            value: 1,
            showLoading: true,
            summary: 0,
            equipments: [],
            count: 0
        };
    }

    handleChange = ( event, index, value ) => this.setState({ value });

    componentWillMount() {
        this.props.getReservesDetail(this.props.match.params.id);
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        let summary = 0;
        if (nextProps.reserve_detail !== this.props.reserve_detail) {
            for(let equipment of nextProps.reserve_detail.equipments){
                summary += parseFloat(equipment.price);
            }

            this.setState({
                showLoading: false,
                equipments: nextProps.reserve_detail.equipments,
                summary: summary,
                count: parseInt(nextProps.reserve_detail.child) + parseInt(nextProps.reserve_detail.adult)
            })
        }
    }

    render() {
        if (this.state.showLoading) return <Loading/>
        console.log(this.state.equipments)
        return (
            <Container>
                <Header purchasePage
                        showTitle
                        Title={this.props.reserve_detail.id}
                        {...this.props}/>
                <Row>
                    <PurchaseContainer>
                        <PurchaseHeader>
                            <DetailOrderNumber>{`หมายเลขการจอง: ${this.props.reserve_detail.id}`}</DetailOrderNumber><br/>
                            <PurchaseTitlelift>{`ชื่อผู้จอง: ${this.props.reserve_detail.user.name}`}</PurchaseTitlelift><br/>
                            <BillAddress>{`อีเมล: ${this.props.reserve_detail.user.email}`}</BillAddress>
                            <DetailDate>{`วันที่จอง: ${this.props.reserve_detail.reserve_date}`}</DetailDate><br/>
                            <DetailPaidWith>{`เบอร์โทร: ${this.props.reserve_detail.user.phone_number}`}</DetailPaidWith>
                        </PurchaseHeader>
                        <PurchaseContent>
                            <PurchaseBox>
                                <PurchaseBoxHeader>
                                    <PurchaseBoxHeaderMenu>
                                        <TextRoute> เส้นทาง </TextRoute>
                                        <OrderDateTime> ผู้ใหญ่ </OrderDateTime>
                                        <ChildNumber> เด็ก </ChildNumber>
                                    </PurchaseBoxHeaderMenu>
                                </PurchaseBoxHeader>
                                <ItemBoxDetail>
                                    {
                                        Object.keys(this.props.reserve_detail).length !== 0 ?
                                            <PurchaseDetailBoxText key={this.props.reserve_detail.id}>
                                                <RouteText>{this.props.reserve_detail.route}</RouteText>
                                                <AdultText>{this.props.reserve_detail.adult}</AdultText>
                                                <ChildText>{this.props.reserve_detail.child}</ChildText>

                                            </PurchaseDetailBoxText>
                                            :
                                            <div>No purchase</div>
                                    }
                                </ItemBoxDetail>

                                <ItemBoxHeader>
                                    <PurchaseBoxHeaderMenu>
                                        <ItemRent> อุปกรณ์ที่เช่า </ItemRent>
                                        <ItemPrice> Price </ItemPrice>
                                    </PurchaseBoxHeaderMenu>
                                </ItemBoxHeader>
                                {
                                    this.state.equipments.length > 0 ?
                                        this.state.equipments.map(( equipment, index ) => {
                                            return (
                                                <ItemRentDetail key={index}>
                                                    <EquipmentText>{equipment.name}</EquipmentText>
                                                    <PriceText>{equipment.price}</PriceText>
                                                </ItemRentDetail>)
                                        })
                                        :
                                        <EmptyRent>
                                            <EmptyRentText>ไม่มีการเช่าอุปกรณ์</EmptyRentText>
                                        </EmptyRent>
                                }

                            </PurchaseBox>
                        </PurchaseContent>
                        {
                            this.props.reserve_detail.rent_status === 'เช่าอุปกรณ์' ?
                                <Summary>
                                    {`ยอดรวมสุทธิ: ฿ ${this.state.summary * this.state.count}`}
                                </Summary>
                                :
                                <Summary>
                                    {`ยอดรวมสุทธิ: ฿ ${this.state.summary + (this.state.count * 300)}`}
                                </Summary>
                        }
                    </PurchaseContainer>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

ReserveHistoryDetail.propTypes = {
    getReservesDetail: PropTypes.func.isRequired
};

function mapStateToProps( state ) {
    return {
        reserve_detail: state.reserve_detail
    }
}

const mapDispatchToProps = {
    getReservesDetail: getReservesDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReserveHistoryDetail));