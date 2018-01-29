import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
	DialogActions,
	DialogContent,
} from 'material-ui/Dialog';
import styled from 'styled-components'
import { deleteCourse } from "../../actions/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const ConfirmDialogContainer = styled.div`
	z-index: 99999;
`;

const HeaderText = styled.div`
	font-size: 28px;
	font-weight: 500;
	margin-bottom: 15px;
`;

const DialogContainer = styled.div`
	text-align: center;
	
	@media (max-width: 767px) {

	}
`;
const IconEmpty = styled.div`
     font-size: 100px;
     color: gray;
     margin-bottom: 20px;
`;

const DialogContentStyle = styled(DialogContent)`
	width: 350px !important;
	
	@media (max-width: 1023px) {
		width: auto !important;
	}
`;

const DescriptionBlock = styled.div`
	color: #000000;
	text-align: center;
`;

class DeleteCourseDialog extends Component {
	handleDeleteCourse = () => {
		this.props.deleteCourse(this.props.course_id, { "isDelete": true });
		// this.props.handleRequestClose();

		this.props.history.push('/courses');
	};

	handleRequestClose = () => {
				this.props.handleRequestClose()
};

	render() {
		return (
            <ConfirmDialogContainer>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleDeleteCourse}>
                    <DialogContentStyle>
                        <DialogContainer>
	                        <IconEmpty className="material-icons">delete</IconEmpty>
                            <HeaderText>{this.props.headerText}</HeaderText>
                            <DescriptionBlock>
								{this.props.descriptionText}
                            </DescriptionBlock>
                        </DialogContainer>
                    </DialogContentStyle>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">
							{this.props.requestCloseText || 'CANCEL'}
                        </Button>
                        <Button onClick={this.handleDeleteCourse} color="primary" autoFocus>
							{this.props.confirmText || 'OK'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </ConfirmDialogContainer>
		);
	}
}

DeleteCourseDialog.propTypes = {
	deleteCourse: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

const mapDispatchToProps = {
	deleteCourse: deleteCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter((DeleteCourseDialog)));