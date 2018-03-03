import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogTitle,
    DialogActions,
    DialogContent,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class AddNewTrip extends Component {
    constructor( props ) {
        super(props)
        this.state = {
            trip_name: '',
            description: ''
        }
    }

    handleRequestClose = () => {
        this.props.handleRequestClose()
    };

    handleCreateTrip = () => {
        let data = {
            "trip_name": this.state.trip_name,
            "description": this.state.description
        };
        this.props.createTrip(data)
        this.props.handleRequestClose()
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <Dialog open={this.props.open}>
                    <DialogTitle>สร้างทริปของคุณ</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus
                                   required
                                   margin="dense"
                                   id="trip_name"
                                   name="trip_name"
                                   placeholder="ระบุชื่อทริป"
                                   onChange={this.handleChange('trip_name')}
                                   fullWidth/>
                        <TextField required
                                   margin="dense"
                                   id="description"
                                   name="description"
                                   placeholder="ระบุรายละเอียดการเดินทางของทริป"
                                   onChange={this.handleChange('description')}
                                   fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            Cancel
                        </Button>
                        <Button onClick={this.handleCreateTrip}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default AddNewTrip;