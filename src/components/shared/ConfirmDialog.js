import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,

} from 'material-ui/Dialog';
import styled from 'styled-components'
import { withStyles } from 'material-ui/styles';
import { reserveTrip } from "../../actions/actionCreators";
import {
    AdultText2,
    ChildNumber,ChildText2,
    EquipmentText,
    ItemBoxDetail,
    ItemBoxHeader,
    ItemDate,
    ItemRent,
    ItemRentDetail,
    OrderDateTime,
    PurchaseBox,
    PurchaseBoxHeader,
    PurchaseBoxHeaderMenu,
    PurchaseContent,
    PurchaseDetailBoxText,
    RouteText2,
    TextRoute
} from "../../style-js/PurchaseHistory.style";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const ConfirmDialogContainer = styled.div`
	z-index: 99999;
`;

const HeaderText = styled.div`
	font-size: 28px;
	font-weight: 500;
	margin-bottom: 15px;
	float: left;
`;

const DialogContainer = styled.div`
	text-align: center;
	display: flex;
	@media (max-width: 767px) {
		
	}
`;

const DialogContentStyle = styled(DialogContent)`
	width: 700px !important;
	margin-left: 23% !important;
	margin-top: 4% !important;
	@media (max-width: 1023px) {
		width: auto !important;
	}
`;

class ConfirmDialog extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            accessory: '',
            equipments: [],
            data_equipments: []
        }
    }

    handleClick = () => {
        this.props.handleRequestClose();
    };

    handleClickOk = () => {

        let data_equipment = [];

        for (let equipment of this.props.equipments) {
            let data_acc = {
                equipment_id: ''
            };
            if (equipment.name === this.props.acc_bike) {
                data_acc.equipment_id = equipment.id;
                data_equipment.push(data_acc)
            } else if (equipment.name === this.props.acc_hat) {
                data_acc.equipment_id = equipment.id;
                data_equipment.push(data_acc)
            } else if (equipment.name === this.props.acc_suit) {
                data_acc.equipment_id = equipment.id;
                data_equipment.push(data_acc)
            }
        }

        console.log(data_equipment)

        const data = {
            reserve_date: this.props.trip_date,
            route: this.props.trip,
            adult: this.props.adult,
            child: this.props.child,
            rent_status: this.props.item,
            reserveEquipments: data_equipment,
            status_payment:'ยังไม่ได้ชำระเงิน'
        };

        console.log(data)

        this.props.reserveTrip(data);
    };

    render() {
        return (
            <ConfirmDialogContainer>
                <Dialog fullScreen
                        open={this.props.open}
                        onClose={this.props.handleRequestClose}>
                    <DialogContentStyle>
                        <DialogContainer>
                            <HeaderText>{this.props.headerText}</HeaderText><br/>
                        </DialogContainer>

                        <div>
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
                                            <PurchaseDetailBoxText>
                                                <RouteText2>{this.props.trip}</RouteText2>
                                                <AdultText2>{this.props.adult}</AdultText2>
                                                <ChildText2>{this.props.child}</ChildText2>

                                            </PurchaseDetailBoxText>
                                        }
                                    </ItemBoxDetail>

                                    <ItemBoxHeader>
                                        <PurchaseBoxHeaderMenu>
                                            <ItemRent> อุปกรณ์ที่เช่า </ItemRent>
                                            <ItemDate> วันที่ {this.props.trip_date} </ItemDate>
                                        </PurchaseBoxHeaderMenu>
                                    </ItemBoxHeader>

                                    {
                                        this.props.item === 'นำอุปกรณ์มาเอง' ?
                                            <ItemRentDetail>
                                                <EquipmentText>ไม่มี</EquipmentText>
                                            </ItemRentDetail>
                                            :
                                            <ItemRentDetail>
                                                <EquipmentText>{`${this.props.acc_bike} ${this.props.acc_hat} ${this.props.acc_suit}`}</EquipmentText>
                                            </ItemRentDetail>
                                    }
                                </PurchaseBox>
                            </PurchaseContent>
                        </div>
                    </DialogContentStyle>
                    <DialogActions>
                        <Button onClick={this.handleClick} color="primary">
                            {this.props.requestCloseText || 'CANCEL'}
                        </Button>
                        <Button
                            color="primary"
                            autoFocus
                            onClick={this.handleClickOk}
                        >
                            {this.props.confirmText || 'OK'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </ConfirmDialogContainer>
        );
    }
}

ConfirmDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    reserveTrip: PropTypes.func.isRequired
};

function mapStateToProps( state ) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    reserveTrip: reserveTrip
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ConfirmDialog));