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

class ConfirmPublishDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: true,
        };
    }

    handlePublishCourse = () => {
        let status ={
            "is_publish": true
        };
        this.props.publishCourse(status);
    };

    handleUnPublishCourse = () => {
        let status ={
            "is_publish": false
        };
        this.props.unpublishCourse(status);
    };

    handleRequestClose=()=>{
        this.props.handleRequestClose()
    };

    render() {
        return (
            <ConfirmDialogContainer>
                        <Dialog
                            open={this.props.open}
                            onClose={this.props.handleRequestClose}>
                            <DialogContentStyle>
                                <DialogContainer>
                                    {
                                        this.props.headerText === 'Publish Course' ?
                                            <IconEmpty className="material-icons ">cloud_queue</IconEmpty>
                                            :
                                            <IconEmpty className="material-icons ">cloud_off</IconEmpty>
                                    }
                                    <HeaderText>{this.props.headerText}</HeaderText>
                                    <DescriptionBlock>
                                        {this.props.descriptionText}
                                    </DescriptionBlock>
                                </DialogContainer>

                            </DialogContentStyle>
                            <DialogActions>
                                <Button onClick={this.handleRequestClose} color="default">
                                    Cancel
                                </Button>
                                {
                                    this.props.headerText === 'Publish Course' ?
                                        <Button onClick={this.handlePublishCourse} color="default">
                                            OK
                                        </Button>
                                        :
                                        <Button onClick={this.handleUnPublishCourse} color="default">
                                            OK
                                        </Button>
                                }
                            </DialogActions>
                        </Dialog>
            </ConfirmDialogContainer>
        );
    }
}

ConfirmPublishDialog.propTypes = {
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(withRouter((ConfirmPublishDialog)));