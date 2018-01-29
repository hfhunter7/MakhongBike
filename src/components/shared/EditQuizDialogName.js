import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogTitle,
    DialogActions,
    DialogContent,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class EditQuizDialogName extends Component {
    constructor(props){
        super(props)
        this.state ={
            edit_title:'',
        }
    }
    handleRequestClose = () => {
        this.props.handleRequestClose()
    };

    handleSaveQuiz=()=> {
        let data = {
            "title": this.state.quiz_name === undefined || '' ? this.props.title : this.state.quiz_name,
            "duration": this.props.time_limit,
            "force_submit":this.props.force_submit,
            "shuffle_question":this.props.shuffle_question
        };
        this.props.handleSaveQuiz(data)
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
                    <DialogTitle>Edit Quiz Name</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus
                                   required
                                   margin="dense"
                                   id="quiz_name"
                                   name="quiz_name"
                                   placeholder="Please enter Quiz Name"
                                   defaultValue={this.props.title}
                                   onChange={this.handleChange('quiz_name')}
                                   fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            Cancel
                        </Button>
                        <Button raised onClick={this.handleSaveQuiz}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default EditQuizDialogName;