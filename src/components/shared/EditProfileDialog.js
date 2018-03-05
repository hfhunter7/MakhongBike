import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { connect } from 'react-redux';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';


class EditProfileDialog extends Component {
    constructor( props ) {
        super(props)
        this.state = {
            birthday: props.user.birthday || '',
            display_name: props.user.display_name || '',
            name: props.user.name || '',
            phone_number: props.user.phone_number || '',
            company_name: '',
            title: '',
        };
    }

    checkEnableButton() {
        let disabled = true;

        if (this.state.birthday !== '' && this.state.display_name !== '' && this.state.name !== '' && this.state.phone_number !== '') {
            disabled = false;
        }
        return disabled
    }


    handleRequestClose = () => {
        this.setState({
            birthday: "",
            display_name: "",
            name: "",
            phone_number: "",
            company_name: "",
            title: "",
        });
        this.props.handleRequestClose()
    };

    handleSaveProfile = () => {
        let data = {
            "birthday": this.state.birthday === '' ? this.props.user.birthday : this.state.birthday,
            "display_name": this.state.display_name === '' ? this.props.user.display_name : this.state.display_name,
            "name": this.state.name === '' ? this.props.user.name : this.state.name,
            "phone_number": this.state.phone_number === '' ? this.props.user.phone_number : this.state.phone_number,
        }
        this.props.handleSaveProfile(data)

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleRequestClose}>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus
                                   required
                                   margin="dense"
                                   id="display_name"
                                   label="Display Name"
                                   placeholder="Please enter Display Name"
                                   defaultValue={this.props.user.display_name}
                                   onChange={this.handleChange('display_name')}
                                   fullWidth/>
                        <TextField margin="dense"
                                   required
                                   id="full_name"
                                   label="Full Name"
                                   placeholder="Please enter Full Name"
                                   defaultValue={this.props.user.name}
                                   onChange={this.handleChange('name')}
                                   fullWidth/>

                        <TextField
                            required
                            type="date"
                            id="date-local"
                            label="birthday"
                            defaultValue={this.props.user.birthday}
                            onChange={this.handleChange('birthday')}
                            InputLabelProps={{
                                shrink: true,

                            }}
                        />
                        <TextField margin="dense"
                                   required
                                   id="phone_number"
                                   label="Phone Number"
                                   placeholder="Please enter Your Phone Number"
                                   defaultValue={this.props.user.phone_number}
                                   onChange={this.handleChange('phone_number')}
                                   fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            Cancel
                        </Button>
                        <Button raised onClick={this.handleSaveProfile}
                                disabled={this.checkEnableButton()}
                                color="primary">
                            Edit Profile
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user,
    }
}

EditProfileDialog.defaultProps = {};

export default connect(mapStateToProps, null)(EditProfileDialog)