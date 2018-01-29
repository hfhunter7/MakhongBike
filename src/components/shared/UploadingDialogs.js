import React, { Component } from 'react';
import Dialog, {
	DialogContent,
	DialogContentText,
} from 'material-ui/Dialog';
import { CircularProgress } from 'material-ui/Progress';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class UploadingDialogs extends Component {
	render() {

		return (
			<Dialog open={this.props.open}
			        transition={Transition}
			        keepMounted
			        maxWidth="xs"
			        aria-labelledby="alert-dialog-slide-title"
			        aria-describedby="alert-dialog-slide-description"
			        >
				<DialogContent>
					<CircularProgress size={150} style={{ color: '#1d8bf1' }} thickness={2}/>
					<DialogContentText style={{ textAlign: 'center', marginTop: '20px' }}>
						uploading...
					</DialogContentText>
				</DialogContent>
			</Dialog>
		);
	}
}

export default UploadingDialogs;