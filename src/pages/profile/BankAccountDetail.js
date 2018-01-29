import React, { Component } from 'react';
import styled from 'styled-components';
// import Button from 'material-ui/Button'
// import { connect } from 'react-redux';
import {
    CustomerBankAccountBox, CustomerBankName, CustomerBankNumber,
    CustomerBankAccountDetail, CustomerBankHolder, ButtonProfile,
    CustomerBankBranch, CustomerButtonEdit, CustomerButtonDelete,
    EditButtonBank, RemoveButtonBank, CustomerBankImge
} from '../../style-js/Profile.style';
import ConfirmDeleteAccount from "../../components/shared/ConfirmDeleteAccount";
import EditBankAccount from "../../components/shared/EditBankAccount";
import { connect } from "react-redux";
import { addBank, updateAccount, updateProfileTrainer } from "../../actions/actionCreators";
import PropTypes from "prop-types";

import TMB from '../../image/icon/TMB.png';
import Bangkok from '../../image/icon/Bankok.png';
import Kasikorn from '../../image/icon/Kasikorn.png';
import Krungsri from '../../image/icon/Krungsri.png';
import Krungthai from '../../image/icon/Krungthai.png';
import SCB from '../../image/icon/SCB.png';
import Tbank from '../../image/icon/Tbank.png';
import Abank from '../../image/icon/Abank.png';

class BankAccountDetail extends Component {

    constructor( props ) {
        super(props)
        this.state = {
            openDialog: false,
            open_edit_dialog: false
        }
    }

    handleClickDeleteAccount = () => {
        this.setState({ openDialog: true, });
    }
    handleRequestCloseDialog = () => {
        this.setState({ openDialog: false, });
    }
    handleClickEditAccount = () => {
        this.setState({ open_edit_dialog: true, });
    }
    handleRequestCloseEditDialog = () => {
        this.setState({ open_edit_dialog: false, });
    }
    handleSaveAccount = ( data ) => {
        this.props.addBank(data);
        this.setState({ open_edit_dialog: false });
    };

    handleEditAccount = ( data ) => {
        console.log(this.props.id);
        console.log("Stop");
        this.props.updateAccount(this.props.id, data);
        this.setState({ open_edit_dialog: false });
    };

    handleImage = () => {
        let bank_image = this.props.bank_name;

        switch (bank_image) {
            case "TNV" :
                return TMB;
            case "Bangkok" :
                return Bangkok;
            case "Kasikorn" :
                return Kasikorn;
            case "Krungsri" :
                return Krungsri;
            case "Krungthai" :
                return Krungthai;
            case "Siam Commercial" :
                return SCB;
            case "Thanachart" :
                return Tbank;
            case "Government Savings " :
                return Abank;
            default :
                return null;
        }
    };

    render() {
        const bank = this.props;
        return (
            <CustomerBankAccountBox>
                <CustomerBankAccountDetail>
                    <CustomerBankImge>
                        <img src={this.handleImage()} alt="" width="20px" height="20px"/>&nbsp;
                    </CustomerBankImge>
                    <CustomerBankName>
                        {bank.bank_name}
                    </CustomerBankName>
                    <CustomerBankNumber>
                        {`${bank.bank_number} (${bank.bank_type})`}
                    </CustomerBankNumber>
                    <CustomerBankHolder>
                        {bank.bank_holder}
                    </CustomerBankHolder>
                    <CustomerBankBranch>
                        {bank.bank_branch}
                    </CustomerBankBranch>
                    <ButtonProfile>
                        <CustomerButtonEdit>
                            <EditButtonBank onClick={this.handleClickEditAccount}>EDIT</EditButtonBank>
                            <EditBankAccount open={this.state.open_edit_dialog}
                                             handleRequestClose={this.handleRequestCloseEditDialog}
                                             handleEditAccount={this.handleEditAccount}
                                             user={this.props.user}
                                             bank={bank}
                                             {...this.props}/>
                        </CustomerButtonEdit>
                        <CustomerButtonDelete>
                            <RemoveButtonBank onClick={this.handleClickDeleteAccount}>DELETE</RemoveButtonBank>
                            <ConfirmDeleteAccount open={this.state.openDialog}
                                                  handleRequestClose={this.handleRequestCloseDialog}
                                                  confirmText="ok"
                                                  headerText="Delete Account"
                                                  descriptionText={`Do you want to delete ${bank.bank_number}`}
                                                  bank_id={bank.id}

                            />
                        </CustomerButtonDelete>
                    </ButtonProfile>
                </CustomerBankAccountDetail>
            </CustomerBankAccountBox>
        );
    }
}


BankAccountDetail.defaultProps = {};

function mapStateToProps( state ) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    updateAccount: updateAccount
};
BankAccountDetail.propTypes = {
    updateAccount: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BankAccountDetail);
