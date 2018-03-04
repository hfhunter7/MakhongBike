import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
} from 'material-ui/Dialog';
import styled from 'styled-components'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ImageContain } from "../../style-js/CourseDetail.style";

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
	width: 700px !important;
	margin-left: 23% !important;
	margin-top: 4% !important;
	@media (max-width: 1023px) {
		width: auto !important;
	}
`;

class DialogImage extends Component {

    render() {
        const image = [];

        for(let data of this.props.trip_images){
            image.push(data.image_url);
        }

        return (
            <ConfirmDialogContainer>
                <Dialog
                    fullScreen
                    open={this.props.open}
                    onClose={this.props.handleRequestClose}>
                    <DialogContentStyle>
                        <DialogContainer>
                            <HeaderText>{this.props.headerText}</HeaderText>
                            <ImageContain
                                images={image}
                                duration={5000}
                                transitionDuration={1000}
                             />
                        </DialogContainer>
                    </DialogContentStyle>
                    <DialogActions>
                        <Button color="primary" onClick={this.props.handleRequestClose}>
                            {this.props.confirmText || 'OK'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </ConfirmDialogContainer>
        );
    }
}

DialogImage.propTypes = {

};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter((DialogImage)));