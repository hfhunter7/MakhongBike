import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import Dialog, {
    DialogActions,
    DialogContent,

} from 'material-ui/Dialog';
import styled from 'styled-components'
import { create_exam } from "../../actions/actionCreators";
import  { withMobileDialog, } from 'material-ui/Dialog';


const ConfirmDialogContainer = styled.div`
	z-index: 99999;
`;

const HeaderText = styled.div`
	font-size: 28px;
	font-weight: 500;
	margin-bottom: 15px;
	float: left;
`;

const DialogContainer = styled.div`
	text-align: center;
	display: flex;
	@media (max-width: 767px) {
		
	}
`;

const DialogContentStyle = styled(DialogContent)`
	width: 300px !important;
	@media (max-width: 1023px) {
		width: auto !important;
	}
`;

const TextTitle = styled.p`
    font-size: 12px;
    margin-top: 5%;
    margin-left: 1px;
`;

const TextInput = styled(TextField)`
    width: 100% !important;
    margin: 1%;
`;

const SelectContent = styled(Select)`
    width: 100% !important;
    margin: 1%;
`;

class ConfirmDialog extends Component {
	constructor(props) {
		super(props);

		this.onTermChange = this.onTermChange.bind(this);
		this.enableButton = this.enableButton.bind(this);

		this.state = {
			quiz_name: '',
			description: '',
			time_limit: '0',
			force_submit: false,
			shuffle_question: false
		}
	}

	onTermChange(e) {
		const quiz_name = e.target.value;

		this.setState({
			quiz_name: quiz_name
		})
	}

	onChangeDescription = (e) => {
		const description = e.target.value;

		this.setState({
			description: description
		})
	};

	enableButton() {
		let disabled = true;

		if ((this.state.quiz_name !== '' && this.state.quiz_name.length <= 40) && this.state.description !== '') {
			disabled = false;
		}

		return disabled;
	}

	handleClick = () => {
		this.props.handleRequestClose();
		this.setState({
			quiz_name: ''
		})
	};

	handleChangeTimeLimit = (e) => {
		this.setState({
			time_limit: e.target.value
		})
	};

	handleChangeForceSubmit = (e) => {
		if (e.target.value === 'yes') {
			this.setState({
				force_submit: true
			})
		}
	};

	handleChangeShuffle = (e) => {
		if (e.target.value === 'yes') {
			this.setState({
				shuffle_question: true
			})
		}
	};

	handleClickCreateExam = () => {
		const data = {
			title: this.state.quiz_name,
			description: this.state.description,
			duration: this.state.time_limit,
			force_submit: this.state.force_submit,
			image_url: 'http://willmarlow.com/wp-content/uploads/2015/10/certification-google-adwords-display-certificate-certified-partner.png',
			shuffle_question: this.state.shuffle_question,
		};

		console.log(data)

		this.props.create_exam(data);

		this.setState({
			force_submit: false,
			shuffle_question: false
		});

		this.props.handleRequestClose();
	};

	render() {
		const { fullScreen } = this.props;

		return (
			<ConfirmDialogContainer>
				<Dialog fullScreen={fullScreen}
				        open={this.props.open}
				        onClose={this.props.handleRequestClose}>
					<DialogContentStyle>
						<DialogContainer>
							<HeaderText>{this.props.headerText}</HeaderText><br/>
						</DialogContainer>
						<TextInput placeholder="Enter quiz name"
						           value={this.state.quiz_name}
						           onChange={this.onTermChange}
						           required
						           id="text-input"
						           label="Quiz name"/>

						<TextInput placeholder="Enter description"
						           value={this.state.description}
						           onChange={this.onChangeDescription}
						           required
						           id="text-input"
						           label="Description"
						/>

						<TextTitle>Time limit</TextTitle>
						<SelectContent native
						               onChange={this.handleChangeTimeLimit}
						>
							<option value="0">No time limit</option>
							<option value="60">60</option>
						</SelectContent>

						<TextTitle>Force submit</TextTitle>
						<SelectContent native
						               onChange={this.handleChangeForceSubmit}
						>
							<option value="no">No</option>
							<option value="yes">Yes</option>
						</SelectContent>

						<TextTitle>Shuffle question order</TextTitle>
						<SelectContent native
						               onChange={this.handleChangeShuffle}
						>
							<option value="no">No</option>
							<option value="yes">Yes</option>
						</SelectContent>
					</DialogContentStyle>
					<DialogActions>
						<Button onClick={this.handleClick} color="primary">
							{this.props.requestCloseText || 'CANCEL'}
						</Button>
						<Button disabled={this.enableButton()}
						        color="primary"
						        autoFocus
						        onClick={this.handleClickCreateExam}
						>
							{this.props.confirmText || 'OK'}
						</Button>
					</DialogActions>
				</Dialog>
			</ConfirmDialogContainer>
		);
	}
}

ConfirmDialog.propTypes = {
	fullScreen: PropTypes.bool.isRequired,
	create_exam: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		user: state.user,
	}
}

const mapDispatchToProps = {
	create_exam: create_exam
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withMobileDialog()(ConfirmDialog)));