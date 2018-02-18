import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,

} from 'material-ui/Dialog';
import styled from 'styled-components'
import { withMobileDialog, } from 'material-ui/Dialog';
import { reserveTrip } from "../../actions/actionCreators";

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
	width: 300px !important;
	@media (max-width: 1023px) {
		width: auto !important;
	}
`;

const TextTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 5%;
    margin-left: 1px;
`;

const TextResult = styled.p`
	font-size: 16px;
	font-weight: 400;	
	margin-top: 5.5%;
    margin-left: 10%;
    float: right;
`;

const ContentText = styled.div`
	display: flex;
`;

class ConfirmDialog extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            accessory: '',
            equipments: []
        }
    }

    handleClick = () => {
        this.props.handleRequestClose();
    };

    handleClickOk = () => {

        let data_equipment = [];

        for(let equipment of this.props.equipments){
            let data_acc = {
                equipment_id: ''
            }
            if(equipment.name === this.props.acc_bike){
                data_acc.equipment_id = equipment.id;
                data_equipment.push(data_acc)
            }else if(equipment.name === this.props.acc_hat){
                data_acc.equipment_id = equipment.id;
                data_equipment.push(data_acc)
            }else if(equipment.name === this.props.acc_suit){
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
            reserveEquipments: data_equipment
        }

        console.log(data)

        this.props.reserveTrip(data);
    };

    render() {
        const { fullScreen } = this.props;

        return (
            <ConfirmDialogContainer>
                <Dialog fullScreen={fullScreen}
                        open={this.props.open}
                        onClose={this.props.handleRequestClose}>
                    <DialogContentStyle>
                        <DialogContainer>
                            <HeaderText>{this.props.headerText}</HeaderText><br/>
                        </DialogContainer>

                        <ContentText>
                            <TextTitle>เส้นทาง</TextTitle>
                            <TextResult>{this.props.trip}</TextResult>
                        </ContentText>

                        <ContentText>
                            <TextTitle>วันที่</TextTitle>
                            <TextResult>{this.props.trip_date}</TextResult>
                        </ContentText>

                        <ContentText>
                            <TextTitle>ผู้ใหญ่</TextTitle>
                            <TextResult>{this.props.adult}</TextResult>
                        </ContentText>

                        <ContentText>
                            <TextTitle>เด็ก</TextTitle>
                            <TextResult>{this.props.child}</TextResult>
                        </ContentText>

                        <ContentText>
                            <TextTitle>การจองอุปกรณ์</TextTitle>
                            <TextResult>{this.props.item}</TextResult>
                        </ContentText>

                        {
                            this.props.item === 'นำอุปกรณ์มาเอง' ?
                                <ContentText>
                                    <TextTitle>อุปกรณ์ที่เช่า</TextTitle>
                                    <TextResult>ไม่มี</TextResult>
                                </ContentText>
                                :
                                <ContentText>
                                    <TextTitle>อุปกรณ์ที่เช่า</TextTitle>
                                    <TextResult>{this.props.acc_bike + ' ' + this.props.acc_hat + ' ' + this.props.acc_suit}</TextResult>
                                </ContentText>
                        }

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
    reserveTrip:reserveTrip
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withMobileDialog()(ConfirmDialog)));