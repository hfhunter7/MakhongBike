import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { connect } from 'react-redux';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';

class NewCourseDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            description:'',
            image_url:'',
            price:'',
            tag_id:'',
            value: true,
            free_check: props.price === 0 || props.price === '',
        };
    }

    checkEnableButton() {
        let disabled = true;
        if (this.state.title !== '') {
            disabled = false;
        } else {
            disabled = true;
        }
        return disabled
    }
    handleRequestClose=()=>{
        this.setState({
            title: '',
            description: '',
            price: '',
            image_url: '',
        });
        this.props.handleRequestClose()
    };

    handleCreateCourse=()=> {
        let price = this.state.price === undefined || this.state.price === '' || this.state.free_check ? 0 : this.state.price
        if (this.state.title === '') {
            return true;
        }
        if(this.state.free_check) {
            let data = {
                "description": this.state.description,
                "image_url": this.state.image_url,
                "price": price,
                "title": this.state.title,
            }
            this.props.handleCreateCourse(data)
        }else{
            let data = {
                "description": this.state.description,
                "image_url": this.state.image_url,
                "price": price,
                "title": this.state.title,
            }
            this.props.handleCreateCourse(data)
        }
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });

    };

    handleChecked = name => event => {
        this.setState({
            [name]: event.target.checked ,
        });
    };

    render() {
        return (
            <div>
                <Dialog ignorebackdropclick={this.state.value.toString().toLocaleLowerCase()}
                        ignoreescapekeyup={this.state.value.toString().toLocaleLowerCase()}
                        open={this.props.open}
                        onClose={this.props.handleRequestClose}>
                    <DialogTitle>CREATE COURSE</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus
                                   required
                                   margin="dense"
                                   id="title"
                                   label="Course Name"
                                   placeholder="Enter your course name"
                                   onChange={this.handleChange('title')}
                                   fullWidth
                                   multiline/><br/>
                        {/*<input type="file"/>*/}
                            <TextField
                                required
                                margin="dense"
                                id="description"
                                label="Course Overview"
                                placeholder="Explain about your course or what they will learn?"
                                onChange={this.handleChange('description')}
                                fullWidth
                                multiline
                            />
                        <TextField margin="dense"
                                   required
                                   id="price"
                                   label="Course Price"
                                   type="number"
                                   placeholder="Enter your course price"
                                   onChange={this.handleChange('price')}
                                   fullWidth/>
                        <Checkbox checked={this.state.free_check}
                                  onChange={this.handleChecked('free_check')}
                                  value="true"/>Set as free course
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            Cancel
                        </Button>
                        <Button raised onClick={this.handleCreateCourse}
                                disabled={this.checkEnableButton()}
                                color="primary">
                            CREATE COURSE
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
NewCourseDialog.defaultProps = {

};

export default  connect(mapStateToProps, null)(NewCourseDialog);
