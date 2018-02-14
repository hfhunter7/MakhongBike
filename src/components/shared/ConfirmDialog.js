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
import { withMobileDialog, } from 'material-ui/Dialog';


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
    font-size: 18px;
    font-weight: 500;
    margin-top: 5%;
    margin-left: 1px;
`;

const TextResult = styled.p`
	font-size: 16px;
	font-weight: 400;	
	margin-top: 5.5%;
    margin-left: 10%;
    float: right;
`;

const ContentText = styled.div`
	display: flex;
`;

class ConfirmDialog extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            accessory: '',
        }
    }

    handleClick = () => {
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

                        <ContentText>
                            <TextTitle>เส้นทาง</TextTitle>
                            <TextResult>{this.props.trip}</TextResult>
                        </ContentText>

                        <ContentText>
                            <TextTitle>วันที่</TextTitle>
                            <TextResult>{this.props.trip_date}</TextResult>
                        </ContentText>

                        <ContentText>
                            <TextTitle>ผู้ใหญ่</TextTitle>
                            <TextResult>{this.props.adult}</TextResult>
                        </ContentText>

                        <ContentText>
                            <TextTitle>เด็ก</TextTitle>
                            <TextResult>{this.props.child}</TextResult>
                        </ContentText>

                        <ContentText>
                            <TextTitle>การจองอุปกรณ์</TextTitle>
                            <TextResult>{this.props.item}</TextResult>
                        </ContentText>

                        {
                            this.props.item === 'นำอุปกรณ์มาเอง' ?
                                <ContentText>
                                    <TextTitle>อุปกรณ์ที่เช่า</TextTitle>
                                    <TextResult>ไม่มี</TextResult>
                                </ContentText>
                                :
                                <ContentText>
                                    <TextTitle>อุปกรณ์ที่เช่า</TextTitle>
                                    <TextResult>{this.props.acc_bike + ' ' + this.props.acc_hat + ' ' + this.props.acc_suit}</TextResult>
                                </ContentText>
                        }

                    </DialogContentStyle>
                    <DialogActions>
                        <Button onClick={this.handleClick} color="primary">
                            {this.props.requestCloseText || 'CANCEL'}
                        </Button>
                        <Button
                            color="primary"
                            autoFocus
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
};

function mapStateToProps( state ) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withMobileDialog()(ConfirmDialog)));