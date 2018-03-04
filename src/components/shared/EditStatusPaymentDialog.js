import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { connect } from 'react-redux';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';


class EditStatusPaymentDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status_payment: props.status_payment || '',
            value: true,
        };
    }

    checkEnableButton() {
        let disabled = true;
        if (this.state.status_payment !== '') {
            disabled = false;
        } else {
            disabled = true;
        }
        return disabled
    }

    handleRequestClose = () => {
        this.setState({
            status_payment: this.props.status_payment || '',
        });
        this.props.handleRequestClose()
    };

    handleUpdateStatusPayment = () => {
        let data = {
            "status_payment": this.state.status_payment,
        };

        this.props.EditStatusPayment(data);

        this.setState({
            status_payment: this.props.status_payment || '',
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value ,
        });
    };

    render() {
        // console.log(this.state.checkedA);
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleRequestClose}>
                    <DialogTitle>แก้ไขสถานะ</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus
                                   required
                                   margin="dense"
                                   id="status_payment"
                                   name="status_payment"
                                   label="สถานะการจ่ายเงิน"
                                   placeholder="สถานะการจ่ายเงิน"
                                   defaultValue={this.state.status_payment || ''}
                                   onChange={this.handleChange('status_payment')}
                                   fullWidth
                                   multiline/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            ยกเลิก
                        </Button>
                        <Button raised onClick={this.handleUpdateStatusPayment}
                                disabled={this.checkEnableButton()}
                                color="primary">
                            แก้ไข
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

EditStatusPaymentDialog.defaultProps = {};

export default connect(mapStateToProps, null)(EditStatusPaymentDialog);
