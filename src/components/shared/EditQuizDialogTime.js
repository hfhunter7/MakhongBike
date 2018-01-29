import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogTitle,
    DialogActions,
    DialogContent,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class EditQuizDialogTime extends Component {
    constructor(props){
        super(props)
        this.state ={
            edit_title:'',
            time_limit:'',
        }
    }
    handleRequestClose = () => {
        this.props.handleRequestClose()
    };

    handleSaveQuizeTime=()=> {
        let data = {
            "title": this.state.quiz_name === undefined || '' ? this.props.title : this.state.quiz_name,
            "duration": this.props.time_limit === undefined || '' ? this.props.time_limit : this.state.time_limit,
            "force_submit":this.props.force_submit,
            "shuffle_question":this.props.shuffle_question
        };
        this.props.handleSaveQuizeTime(data)
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
                    <DialogTitle>Edit Time Limit</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus
                                   required
                                   margin="dense"
                                   id="time_limit"
                                   name="time_limit"
                                   placeholder="Please enter Time limit"
                                   defaultValue={this.props.time_limit.toString()}
                                   onChange={this.handleChange('time_limit')}
                                   fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            Cancel
                        </Button>
                        <Button raised onClick={this.handleSaveQuizeTime}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default EditQuizDialogTime;