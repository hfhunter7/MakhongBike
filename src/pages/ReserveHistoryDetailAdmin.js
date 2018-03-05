import React, { Component } from 'react';
import { Container, Row } from '../style-js/Grid.style'
import PropTypes from 'prop-types'
import Footer from "../components/Footer";
import NavBarFooter from '../components/NavBarFooter';
import {
    PurchaseContainer,
    PurchaseHeader,
    PurchaseTitlelift,
    PurchaseBox,
    PurchaseBoxHeader,
    PurchaseContent,
    PurchaseBoxHeaderMenu,
    Summary,
    PurchaseDetailBoxText, BillAddress, DetailOrderNumber,
    DetailDate, DetailPaidWith, ItemBoxHeader, ItemBoxDetail, ItemRent, ItemPrice, AdultText,
    ItemRentDetail, EquipmentText, PriceText, ChildNumber, EmptyRent, EmptyRentText, ButtonDelete,
    ButtonDeleteContain, TextRouteAdmin, RouteTextAdmin, ButtonEditAdult, ChildTextAdmin,
    ButtonEditChild, TextDetailAdmin
} from '../style-js/PurchaseHistory.style'
import { withRouter } from "react-router";

import { connect } from 'react-redux';
import { DeleteReserve, EditAdult, EditChild, getReservesDetail } from "../actions/actionCreators";
import { ContainLoader, Loader } from "../style-js/CertificateLayout.style";
import HeaderAdmin from "../components/HeaderAdmin";
import EditDialog from "../components/reserve-detail-admin/EditDialog";
import EditChildDialog from "../components/reserve-detail-admin/EditChildDialog";
import ConfirmDeleteReserve from "../components/reserve-detail-admin/ConfirmDeleteReserve";

class ReserveHistoryDetailAdmin extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            value: 1,
            showLoading: true,
            summary: 0,
            equipments: [],
            count: 0,
            open_adult_dialog: false,
            open_child_dialog: false,
            open_delete_dialog: false
        };
    }

    handleChange = ( event, index, value ) => this.setState({ value });

    componentWillMount() {
        this.props.getReservesDetail(this.props.match.params.id);
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        let summary = 0;
        if (nextProps.reserve_detail !== this.props.reserve_detail) {
            for (let equipment of nextProps.reserve_detail.equipments) {
                summary += parseFloat(equipment.price);
            }

            this.setState({
                showLoading: false,
                equipments: nextProps.reserve_detail.equipments,
                summary: summary,
                count: parseInt(nextProps.reserve_detail.child, 10) + parseInt(nextProps.reserve_detail.adult, 10)
            })
        }
    }

    openDialog = ( key ) => {
        return () => {
            this.setState({
                [key]: true
            })
        }
    };

    closeDialog = ( key ) => {
        return () => {
            this.setState({
                [key]: false
            })
        }
    };

    handleSaveAdult = ( data ) => {
        console.log(data)
        this.props.EditAdult(this.props.reserve_detail.id, data);
    };

    handleSaveChild = ( data ) => {
        console.log(data)
        this.props.EditChild(this.props.reserve_detail.id, data);
    };

    deleteReserve = (id) => {
        console.log(id)
        this.props.DeleteReserve(id);
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
                <HeaderAdmin purchasePage
                             showTitle
                             Title={this.props.reserve_detail.id}
                             {...this.props}/>
                <Row>
                    <PurchaseContainer>
                        <PurchaseHeader>
                            <DetailOrderNumber>{`หมายเลขการจอง: ${this.props.reserve_detail.reserve_number}`}</DetailOrderNumber><br/>
                            <ButtonDeleteContain>
                                <ButtonDelete onClick={this.openDialog('open_delete_dialog')}>
                                    DELETE
                                </ButtonDelete>
                            </ButtonDeleteContain>
                            <PurchaseTitlelift>{`ชื่อผู้จอง: ${this.props.reserve_detail.user.name}`}</PurchaseTitlelift><br/>
                            <BillAddress>{`อีเมล: ${this.props.reserve_detail.user.email}`}</BillAddress>
                            <DetailDate>{`วันที่จอง: ${this.props.reserve_detail.reserve_date}`}</DetailDate><br/>
                            <DetailPaidWith>{`เบอร์โทร: ${this.props.reserve_detail.user.phone_number}`}</DetailPaidWith>
                        </PurchaseHeader>
                        <PurchaseContent>
                            <PurchaseBox>
                                <PurchaseBoxHeader>
                                    <PurchaseBoxHeaderMenu>
                                        <TextRouteAdmin> เส้นทาง </TextRouteAdmin>
                                        <TextDetailAdmin> ผู้ใหญ่ </TextDetailAdmin>
                                        <ChildNumber> เด็ก </ChildNumber>
                                    </PurchaseBoxHeaderMenu>
                                </PurchaseBoxHeader>
                                <ItemBoxDetail>
                                    {
                                        Object.keys(this.props.reserve_detail).length !== 0 ?
                                            <PurchaseDetailBoxText key={this.props.reserve_detail.id}>
                                                <RouteTextAdmin>{this.props.reserve_detail.route}</RouteTextAdmin>
                                                <AdultText>{this.props.reserve_detail.adult}</AdultText>
                                                <ButtonEditAdult
                                                    onClick={this.openDialog('open_adult_dialog')}>แก้ไข</ButtonEditAdult>
                                                <ChildTextAdmin>{this.props.reserve_detail.child}</ChildTextAdmin>
                                                <ButtonEditChild
                                                    onClick={this.openDialog('open_child_dialog')}>แก้ไข</ButtonEditChild>
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
                                    {`ยอดรวมสุทธิ: ฿ ${(this.state.summary * this.state.count) + (this.state.count * 300)}`}
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
                <EditDialog open={this.state.open_adult_dialog}
                            handleRequestClose={this.closeDialog('open_adult_dialog')}
                            handleSaveData={this.handleSaveAdult}
                            headerText="แก้ไขจำนวนผู้ใหญ่"
                            adult={this.props.reserve_detail.adult}
                            {...this.props}/>

                <EditChildDialog open={this.state.open_child_dialog}
                                 handleRequestClose={this.closeDialog('open_child_dialog')}
                                 handleSaveData={this.handleSaveChild}
                                 headerText="แก้ไขจำนวนเด็ก"
                                 child={this.props.reserve_detail.child}
                                 {...this.props}/>


                <ConfirmDeleteReserve open={this.state.open_delete_dialog}
                                      handleRequestClose={this.closeDialog('open_delete_dialog')}
                                      handleDeleteReserve={this.deleteReserve}
                                      confirmText="ok"
                                      headerText="Delete Reserve"
                                      descriptionText={`Do you want to delete reserve number is ${this.props.reserve_detail.reserve_number}`}
                                      reserve_id={this.props.reserve_detail.id}
                />
            </Container>
        );
    }
}

ReserveHistoryDetailAdmin.propTypes = {
    getReservesDetail: PropTypes.func.isRequired,
    EditChild: PropTypes.func.isRequired,
    EditAdult: PropTypes.func.isRequired,
    DeleteReserve: PropTypes.func.isRequired
};

function mapStateToProps( state ) {
    return {
        reserve_detail: state.reserve_detail
    }
}

const mapDispatchToProps = {
    getReservesDetail: getReservesDetail,
    EditChild: EditChild,
    EditAdult: EditAdult,
    DeleteReserve: DeleteReserve
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReserveHistoryDetailAdmin));