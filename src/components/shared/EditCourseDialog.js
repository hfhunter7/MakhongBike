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


class EditCourseDialog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.title || '',
			description: props.description || '',
			price: props.price || '',
            image_url: props.image_url || '',
			tag_id: '1',
			value: true,
            free_check: props.price ===0,

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

	handleRequestClose = () => {
		this.setState({
			title: this.props.title || '',
			description: this.props.description || '',
			price: this.props.price || '',
		});
		this.props.handleRequestClose()
	};

	handleCreateCourse = () => {
        let price = this.state.price === undefined || this.state.price === '' || this.state.free_check ? 0 : this.state.price

        if (this.state.title === '') {
            return true;
        }
		if(this.state.free_check)
		{
            let data = {
                "description": this.state.description,
                "image_url": this.state.image_url,
                "price": price,
                "title": this.state.title ,
            }
            this.props.handleEditCourse(data);

            this.setState({
                title: this.props.title || '',
                description: this.props.description || '',
                price: 0,
            });
		}
		else{
            let data = {
                "description": this.state.description,
                "image_url": this.state.image_url,
                "price": price,
                "title": this.state.title ,
            }
            this.props.handleEditCourse(data)
		}
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value ,
		});
	};

	handleChecked = name => event => {
        this.setState({
            [name]: event.target.checked ,
        });
    };

	handleKeyPress = event => {
        console.log(event.charCode)
        // event.charCode >= 48 && event.charCode <= 57
        if (event.charCode >= 48 && event.charCode <= 57) {
            console.log('5555')
        }else{
            console.log('6666')
		}
	};

	render() {
        // console.log(this.state.checkedA);
		return (
			<div>
				<Dialog ignorebackdropclick={this.state.value.toString()}
				        ignoreescapekeyup={this.state.value.toString()}
				        open={this.props.open}
				        onClose={this.props.handleRequestClose}>
					<DialogTitle>EDIT COURSE</DialogTitle>
					<DialogContent>
						<TextField autoFocus
						           required
						           margin="dense"
						           id="title"
						           name="title"
						           label="Course Name"
						           placeholder="Enter your course name"
						           defaultValue={this.state.title || ''}
						           onChange={this.handleChange('title')}
						           fullWidth
						           multiline/>
						<TextField
							required
							margin="dense"
							id="description"
							name="description"
							label="Course Overview"
							placeholder="Explain about your course or what they will learn?"
							defaultValue={this.state.description || ''}
							onChange={this.handleChange('description')}
							fullWidth
							multiline
						/>
						<TextField margin="dense"
						           required
						           id="price"
						           name="price"
						           label="Course Price"
						           placeholder="Enter your course price"
						           defaultValue={this.state.price.toString() || ''}
						           onChange={this.handleChange('price')}
								   type="number"
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
							Update Course
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

EditCourseDialog.defaultProps = {};

export default connect(mapStateToProps, null)(EditCourseDialog);
