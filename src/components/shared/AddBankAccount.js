import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import styled from 'styled-components';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import PropTypes from 'prop-types';
import TMB from '../../image/icon/TMB.png';
import Bankok from '../../image/icon/Bankok.png';
import Kasikorn from '../../image/icon/Kasikorn.png';
import Kungsri from '../../image/icon/Krungsri.png';
import Kungthai from '../../image/icon/Krungthai.png';
import SCB from '../../image/icon/SCB.png';
import Tbank from '../../image/icon/Tbank.png';
import Abank from '../../image/icon/Abank.png';
import {
	Bankname,
} from  '../../style-js/Bank.style'


const SelectRespon = styled(Select)`
     display: flex !important;
     @media (max-width: 767px) {
		margin-top: 14em;
	}
 `;


const FormControlLabelRespon = styled(FormControlLabel)`
     @media (max-width: 767px) {
		margin-top:-17% !important;
	}
 `;
const RadioGroupRespon = styled(RadioGroup)`
     @media (max-width: 767px) {
		width: 100% !important;
	}
 `;
const FormLabelRespon = styled(FormLabel)`
      padding-top: 2% !important;
     @media (max-width: 767px) {
		max-width: 44% !important;
	}
 `;
const MenuItemRespon = styled(MenuItem)`
       display: flex;
       font-size: 14px;
       margin-top: 5px;
          @media only screen and  (max-width: 767px) {
      	  padding-left: 20px !important; 
    	  }
 `;

const FormControlRespon = styled(FormControl)`
       width:100% !important;
       margin-top: 5px;
          @media only screen and  (max-width: 767px) {
      	  width: 100% !important;
    	  }
 `;

const styles = theme => ({
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class AddBankAccount extends Component {

    constructor( props ) {
        super(props)
        this.state = {
            address: "",
            city: "",
            province: "",
            zip_code: "",
            age: '',
            bank_account:'',
            value: '',
            account_name:'',
            account_number:'',
            account_type:'',
            branch:'',
        };
    }

    checkEnableButton() {
        let disabled = true;
        if (this.state.bank_account !== ''  && this.state.account_name !=='' && this.state.account_number !=='' && this.state.branch !==''  && this.state.account_type !=='') {
            disabled = false;
        } else {
            disabled = true;
        }

        return disabled
    }

    handleSortChange = event => {
        this.setState({ bank_account :event.target.value });
    };
    handleChangeRadio = (event, value) => {
        this.setState({ value });
        this.setState({ account_type :event.target.value });
    };
    handleRequestClose = () => {
        this.setState({
            address: "",
            city: "",
            province: "",
            zip_code: "",
        });
        this.props.handleRequestClose()
    };

    handleSaveAddress = () => {
        let data = {
            "bankName":this.state.bank_account ,
            "holderName":this.state.account_name,
            "bankNumber":this.state.account_number,
            "bankType":this.state.account_type,
            "branch":this.state.branch
        };
        this.props.handleSaveAccount(data);
    };


    handleChange = name => event => {
        this.setState({
            [ name ]: event.target.value,
        });
    };


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Dialog ignoreBackdropClick
                        ignoreEscapeKeyUp
                        open={this.props.open}
                        onClose={this.props.handleRequestClose}>
                    <DialogTitle>Add Bank Account</DialogTitle>
                    <DialogContent>
                        <FormControlRespon >
                            <InputLabel>Bank</InputLabel>
                            <SelectRespon
                                name="bank_account"
                                id="bank_account"
                                value={this.state.bank_account}
                                onChange={this.handleSortChange}
                            >
                                <MenuItemRespon value="Bangkok">
                                    <img src={Bankok} alt="" width="23px" height="auto"/>
                                    <Bankname>Bangkok </Bankname>
                                </MenuItemRespon>
                                <MenuItemRespon value="Krungthai">
                                    <img src={Kungthai} alt="" width="23px" height="auto"/>
                                    <Bankname>Krungthai</Bankname>
                                </MenuItemRespon>
                                <MenuItemRespon value="Siam Commercial">
                                    <img src={SCB} alt="" width="23px" height="auto" />
                                    <Bankname>Siam Commercial</Bankname>
                                </MenuItemRespon>
                                <MenuItemRespon value="Kasikorn">
                                    <img src={Kasikorn} alt="" width="23px" height="auto" />
                                    <Bankname>Kasikorn</Bankname>
                                </MenuItemRespon>
                                <MenuItemRespon value="Krungsri">
                                    <img src={Kungsri} alt="" width="23px" height="auto"/>
                                    <Bankname>Krungsri</Bankname>
                                </MenuItemRespon>
                                <MenuItemRespon value="Thanachart">
                                    <img src={Tbank} alt="" width="23px" height="auto"/>
                                    <Bankname>Thanachart</Bankname>
                                </MenuItemRespon>
                                <MenuItemRespon value="Government Savings ">
                                    <img src={Abank} alt="" width="23px" height="auto"/>
                                    <Bankname>Government Savings</Bankname>
                                </MenuItemRespon>
                                <MenuItemRespon value="TMB">
                                    <img src={TMB} alt="" width="23px" height="auto"/>
                                    <Bankname>TMB</Bankname>
                                </MenuItemRespon>
                            </SelectRespon>
                        </FormControlRespon>
                        <TextField autoFocus
                                   required
                                   margin="dense"
                                   label="Account Number"
                                   placeholder="Bank account number"
                                   defaultValue=""
                                   id="account_number"
                                   name="account_number"
                                   onChange={this.handleChange('account_number')}
                                   fullWidth/>
                        <TextField margin="dense"
                                   required
                                   label="ชื่อบัญชี"
                                   placeholder="Enter account name"
                                   defaultValue=""
                                   id="account_name"
                                   name="account_name"
                                   onChange={this.handleChange('account_name')}
                                   fullWidth/>
                        <div>
                            <FormControl component="fieldset" required error className={classes.formControl}>
                                <FormLabelRespon component="legend">Account type</FormLabelRespon>
                                <RadioGroupRespon
                                    aria-label="gender"
                                    name="account_type"
                                    className={classes.group}
                                    value={this.state.value}
                                    onChange={this.handleChangeRadio}
                                >
                                    <FormControlLabelRespon value="ออมทรัพย์" control={<Radio />} label="ออมทรัพย์" />
                                    <FormControlLabelRespon value="กระแสรายวัน" control={<Radio />} label="กระแสรายวัน" />
                                </RadioGroupRespon>
                                <FormHelperText>You can display an error</FormHelperText>
                            </FormControl>
                        </div>
                        <TextField margin="dense"
                                   required
                                   label="สาขา"
                                   placeholder="ระบุสาขาที่เปิดบัญชี"
                                   defaultValue=""
                                   id="branch"
                                   name="branch"
                                   onChange={this.handleChange('branch')}
                                   fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            Cancel
                        </Button>
                        <Button raised disabled={this.checkEnableButton()} onClick={this.handleSaveAddress}  color="primary">
                            ADD BANK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { user: state.user, }
}

AddBankAccount.propTypes = {
    classes: PropTypes.object.isRequired,

};
AddBankAccount.defaultProps = {};
export default connect(mapStateToProps, null)(withStyles(styles)(AddBankAccount));