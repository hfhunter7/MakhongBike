import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { connect } from 'react-redux';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogTitle,
} from 'material-ui/Dialog';


class EditCourseDialog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			trip_name: props.trip_name || '',
			description: props.description || '',
			value: true,
		};
	}

	checkEnableButton() {
		let disabled = true;
		if (this.state.trip_name !== '') {
				disabled = false;
			} else {
				disabled = true;
			}
		return disabled
	}

	handleRequestClose = () => {
		this.setState({
            trip_name: this.props.trip_name || '',
			description: this.props.description || '',
		});
		this.props.handleRequestClose()
	};

	handleUpdateTrip = () => {
            let data = {
                "description": this.state.description,
                "trip_name": this.state.trip_name ,
            };

            this.props.handleEditTrip(data);

            this.setState({
                trip_name: this.props.trip_name || '',
                description: this.props.description || '',
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
					<DialogTitle>แก้ไขทริป</DialogTitle>
					<DialogContent>
						<TextField autoFocus
						           required
						           margin="dense"
						           id="trip-name"
						           name="trip-name"
						           label="ชื่อทริป"
						           placeholder="ระบุชื่อทริป"
						           defaultValue={this.state.trip_name || ''}
						           onChange={this.handleChange('trip_name')}
						           fullWidth
						           multiline/>
						<TextField
							required
							margin="dense"
							id="description"
							name="description"
							label="รายละเอียดทริป"
							placeholder="ระบุรายละเอียดทริป"
							defaultValue={this.state.description || ''}
							onChange={this.handleChange('description')}
							fullWidth
							multiline
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleRequestClose} color="default">
							ยกเลิก
						</Button>
						<Button raised onClick={this.handleUpdateTrip}
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

EditCourseDialog.defaultProps = {};

export default connect(mapStateToProps, null)(EditCourseDialog);
