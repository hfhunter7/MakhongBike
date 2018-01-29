import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { connect } from 'react-redux';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';


class EditProfileDialog extends Component{
    constructor(props) {
        super(props)
        this.state = {
            birthday: '',
            display_name: '',
            name: '',
            phone_number: '',
            company_name:'',
            title:'',
        };
    }

    checkEnableButton() {
        let disabled = true;
        if(this.props.user.id){
            if((this.props.user.birthday !== '' && this.props.user.display_name !== '')
                &&(this.props.user.name !== '' && this.props.user.phone_number !== '')){
                disabled = false;

            }else {
                disabled = true;
            }
        }
        if (this.state.birthday !== '' && this.state.display_name !== '' && this.state.name !== '' && this.state.phone_number !== ''){
            if((this.state.birthday !== '' && this.state.display_name !== '')
                && (this.state.name !== '' && this.state.phone_number !== '')){
                disabled = false;
            }else{
                disabled = true;
            }
        }
        return disabled
    }


    handleRequestClose=()=>{
        this.setState({
            birthday: "",
            display_name: "",
            name: "",
            phone_number: "",
            company_name:"",
            title:"",
        });
        this.props.handleRequestClose()
    };

    handleSaveProfile=()=> {
        let data = {
            "birthday": this.state.birthday === '' ? this.props.user.birthday : this.state.birthday,
            "displayName": this.state.display_name === '' ? this.props.user.display_name : this.state.display_name,
            "name": this.state.name === '' ? this.props.user.name : this.state.name,
            "phoneNumber": this.state.phone_number === '' ? this.props.user.phone_number : this.state.phone_number,
            "title": this.state.title === '' ? this.props.user.title : this.state.title,
            "companyName": this.state.company_name === '' ? this.props.user.company_name : this.state.company_name,
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
                <Dialog ignoreBackdropClick
                        ignoreEscapeKeyUp
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

                        <TextField margin="dense"
                                   required
                                   id="title"
                                   label="Title"
                                   placeholder="Please enter Title"
                                   defaultValue={this.props.user.title}
                                   onChange={this.handleChange('title')}
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
                        <TextField margin="dense"
                                   required
                                   id="company_name"
                                   label="Company Name"
                                   placeholder="Please enter Company Name"
                                   defaultValue={this.props.user.company_name}
                                   onChange={this.handleChange('company_name')}
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

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

EditProfileDialog.defaultProps={};




export default  connect(mapStateToProps,null)(EditProfileDialog)