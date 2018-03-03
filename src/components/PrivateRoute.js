import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {
	Route,
	Redirect,
	withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn_storage, current_user_storage } from '../helpers/sessionHelper';
import { loginUsernameFromAuthToken } from '../actions/actionCreators';

class PrivateRoute extends Component {
	isAuthenticated() {
		if (isLoggedIn_storage()) {
			const user = this.props.user;
			const user_storage = current_user_storage();
			const auth_token = user_storage.auth_token;

			if(Object.keys(user).length === 0 && user.constructor === Object){
				this.props.loginUsernameFromAuthToken(auth_token);
			}
			return true
		} else {
			return false;
		}
	}

	render() {
		const {
			component: InnerComponent,
			...rest
		} = this.props;
		const { location } = this.props;

		const isUserAuthenticated = this.isAuthenticated();

		return (
			<Route
				{...rest}
				render={
					props => (
						isUserAuthenticated
							? <InnerComponent {...props} />
							: <Redirect to={{ pathname: '/loginWithUsername', state: { from: location } }} />
					)
				}
			/>
		);
	}
}

PrivateRoute.propTypes = {
	match:    PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history:  PropTypes.object.isRequired,
	component:  PropTypes.any.isRequired,
	path:       PropTypes.string,
	user:       PropTypes.object.isRequired,
    loginUsernameFromAuthToken: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		user: state.user,
	}
}

const mapDispatchToProps = {
    loginUsernameFromAuthToken: loginUsernameFromAuthToken
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));