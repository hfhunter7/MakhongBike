export function login_user_storage( auth_token = "" ) {
	if (auth_token !== "" && auth_token !== null) {
		localStorage.setItem('user_token', auth_token);
	}
}

export function logout_user_storage() {
	localStorage.removeItem('user_token');
}

export function isLoggedIn_storage() {
	if (localStorage.getItem('user_token')) {
		return true;
	}
	logout_user_storage();
	return false;
}

export function isEmptyUser( user ) {
	if (Object.keys(user).length === 0 && user.constructor === Object) {
		return true;
	} else {
		return false;
	}
}

export function privateLoginFunction( json, dispatch, update_user ) {
	login_user_storage(json.token);
	delete json.token;
	dispatch(update_user(json));
}

export function current_user_storage() {
	if (localStorage.getItem('user_token')) {
		return { auth_token: localStorage.getItem('user_token') };
	}
	return false;
}
export function loginWithGoogleLanding( props, Gid, email, name ) {
	const user_details = {
		email: email,
		name: name,
		googleId: Gid,
	};

	props.loginUserFromPage(user_details);
}

export function attachSignin( auth2, element, props) {
	auth2.attachClickHandler(element, {},
		function ( googleUser ) {
			const Gid = googleUser.getBasicProfile().getId();
			const email = googleUser.getBasicProfile().getEmail();
			const name = googleUser.getBasicProfile().getName();
			const image_url = googleUser.getBasicProfile().getImageUrl();

			const user_details = {
				email: email,
				name: name,
				googleId: Gid,
				image_url: image_url
			};

			props.loginGoogle(user_details);
		}, function ( error ) {

		});
}

export function attachSocialResultPageSignin( auth2, element, props ) {
	auth2.attachClickHandler(element, {},
		function ( googleUser ) {
			const Gid = googleUser.getBasicProfile().getId();
			const email = googleUser.getBasicProfile().getEmail();
			const name = googleUser.getBasicProfile().getName();
			const image_url = googleUser.getBasicProfile().getImageUrl();

			const user_details = {
				email: email,
				name: name,
				googleId: Gid,
				image_url: image_url
			};

			props.verifyUserSocialAccountFromResultPage(user_details);
		}, function ( error ) {

		});
}

export function connectAccountWithGoogle( auth2, element, props ) {

	auth2.attachClickHandler(element, {},
		function ( googleUser ) {

			const Gid = googleUser.getBasicProfile().getId();
			const email = googleUser.getBasicProfile().getEmail();
			const name = googleUser.getBasicProfile().getName();
			const image_url = googleUser.getBasicProfile().getImageUrl();

			const user_details = {
				email: email,
				name: name,
				googleId: Gid,
				image_url: image_url
			};
			props.connectUserGoogle(user_details);

		}, function ( error ) {

		});
}

export function connectAccountWithFacebook( FB, props ) {
	FB.login(function ( response ) {
		if (response.authResponse) {
			FB.api('/me?fields=email,name', function ( response ) {
				const user_email = response.email; //get user email
				const user_id = response.id;
				const user_name = response.name;

				// you can store this data into your database
				//props.login_facebook_user(user_email,user_id,user_name,props.prevUrl);
				const user_details = {
					email: user_email,
					name: user_name,
					facebookId: user_id
				};

				props.connectUserFacebook(user_details);
				//props.loginUser(user_details,true,props.doing_exam_state,props.fromSignupModal);
			});
		}
	}, {
		scope: 'email,public_profile'
	});
}