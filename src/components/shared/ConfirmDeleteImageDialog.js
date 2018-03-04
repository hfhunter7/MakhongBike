import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
} from 'material-ui/Dialog';
import styled from 'styled-components'
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
		//margin-top: 150px;
	}
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
const IconEmpty = styled.div`
     font-size: 100px;
     color: gray;
     margin-bottom: 20px;
`;

class ConfirmDeleteImageDialog extends Component {
    DeleteTripImage = () => {
        this.props.handleDeleteTripImage(this.props.image_id);
        this.props.handleRequestClose();
    };

    render() {
        return (
            <ConfirmDialogContainer>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleRequestClose}>
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
                        <Button onClick={this.props.handleRequestClose} color="primary">
                            {this.props.requestCloseText || 'CANCEL'}
                        </Button>
                        <Button onClick={this.DeleteTripImage} color="primary" autoFocus>
                            {this.props.confirmText || 'OK'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </ConfirmDialogContainer>
        );
    }
}

ConfirmDeleteImageDialog.propTypes = {

};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter((ConfirmDeleteImageDialog)));