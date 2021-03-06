import {
    login_user, login_user_from_auth_token, login_username_from_auth_token, login_with_username, logout_user,
    update_profile_trainer
} from "./users/userAction";

//////////////////////////// User Action ////////////////////////////
import {
	FETCH_ALL_RESERVE,
	FETCH_EQUIPMENT, FETCH_RESERVE, FETCH_RESERVE_DETAIL, FETCH_RESERVE_STAT, FETCH_TRIP, FETCH_TRIP_DETAIL,
	FETCH_TRIP_URL,
	UPDATE_USER
} from "./types";
import { create_user } from "./register/registerAction";
import { fetch_equipments } from "./equipment/equipmentAction";
import {
	create_reserve, delete_reserve_by_id, edit_adult, edit_child, edit_status_payment, fetch_all_reserves,
	fetch_reserve_detail, fetch_reserve_stat,
	fetch_reserves
} from "./reserve/reserveAction";
import {
    add_trip_image,
    create_trip,
    delete_trip,
    delete_trip_image,
    edit_image_trip,
    edit_trip,
    fetch_trip_detail,
    fetch_trip_images,
    fetch_trips,
} from "./trip/tripAction";

export function update_user( user ) {
    return {
        type: UPDATE_USER,
        user
    }
}

///////////////////////// User Service Action /////////////////////////


export function loginGoogle( userParams = {} ) {
    return function ( dispatch ) {
        login_user(userParams, dispatch, update_user)
    }
}

export function loginWithUsername( userParams = {} ) {
    return function ( dispatch ) {
        login_with_username(userParams, dispatch, update_user)
    }
}


export function loginUserFromAuthToken( token ) {
    return function ( dispatch ) {
        login_user_from_auth_token(token, dispatch, update_user);
    }
}

export function loginUsernameFromAuthToken( token ) {
    return function ( dispatch ) {
        login_username_from_auth_token(token, dispatch, update_user);
    }
}

export function updateProfileTrainer( data ) {
    return function ( dispatch ) {
        update_profile_trainer(data, dispatch, update_user);
    }
}


export function logoutUserFromAuthToken() {
    return function ( dispatch ) {
        logout_user(dispatch, update_user)
    }
}

///////////////// register service //////////////////
export function registerUser( data ) {
    return function ( dispatch ) {
        create_user(data, dispatch, update_user);
    }
}

///////////////// equipment action //////////////////
export function update_equipments( equipments ) {
    return {
        type: FETCH_EQUIPMENT,
        equipments
    }
}

export function getEquipments() {
    return function ( dispatch ) {
        fetch_equipments(dispatch, update_equipments);
    }
}

//////////////// reserve action ///////////////
export function reserveTrip( data ) {
    return function ( dispatch ) {
        create_reserve(data, dispatch, update_reserves);
    }
}

export function update_reserves( reserve ) {
    return {
        type: FETCH_RESERVE,
        reserve
    }
}

export function update_all_reserve( reserve_all ) {
    return {
        type: FETCH_ALL_RESERVE,
        reserve_all
    }
}

export function EditStatusPayment( id, data ) {
    return function ( dispatch ) {
        edit_status_payment(id, data, dispatch, update_all_reserve);
    }
}

export function EditChild( id, data ) {
    return function ( dispatch ) {
        edit_child(id, data, dispatch, update_reserves_detail);
    }
}

export function EditAdult( id, data ) {
    return function ( dispatch ) {
        edit_adult(id, data, dispatch, update_reserves_detail);
    }
}

export function DeleteReserve( id ) {
    return function ( dispatch ) {
        delete_reserve_by_id(id, dispatch, update_all_reserve);
    }
}

export function getReserves() {
    return function ( dispatch ) {
        fetch_reserves(dispatch, update_reserves);
    }
}

export function getAllReserves() {
    return function ( dispatch ) {
        fetch_all_reserves(dispatch, update_all_reserve);
    }
}

export function getReserveStat() {
	return function ( dispatch ) {
		fetch_reserve_stat(dispatch, update_reserves_stat);
	}
}

export function update_reserves_detail( reserve_detail ) {
    return {
        type: FETCH_RESERVE_DETAIL,
        reserve_detail
    }
}

export function update_reserves_stat( reserve_stat ) {
	return {
		type: FETCH_RESERVE_STAT,
		reserve_stat
	}
}

export function getReservesDetail( id ) {
    return function ( dispatch ) {
        fetch_reserve_detail(id, dispatch, update_reserves_detail);
    }
}

///////////////////// trip service //////////////////////

export function update_trip( trip ) {
    return {
        type: FETCH_TRIP,
        trip
    }
}

export function update_trip_detail( trip_detail ) {
    return {
        type: FETCH_TRIP_DETAIL,
        trip_detail
    }
}

export function update_url_trip( trip_image_url ) {
    return {
        type: FETCH_TRIP_URL,
        trip_image_url
    }
}

export function getTrips() {
    return function ( dispatch ) {
        fetch_trips(dispatch, update_trip);
    }
}

export function getUrlTrips( id ) {
    return function ( dispatch ) {
        fetch_trip_images(id, dispatch, update_trip);
    }
}

export function createTrip( data ) {
    return function ( dispatch ) {
        create_trip(data, dispatch, update_trip);
    }
}

export function getTripById( id ) {
    return function ( dispatch ) {
        fetch_trip_detail(id, dispatch, update_trip_detail);
    }
}

export function editImageTrip( id, data ) {
    return function ( dispatch ) {
        edit_image_trip(id, data, dispatch, update_trip_detail);
    }
}

export function editTrip( id, data ) {
    return function ( dispatch ) {
        edit_trip(id, data, dispatch, update_trip_detail);
    }
}

export function addTripImage( id, data ) {
    return function ( dispatch ) {
        add_trip_image(id, data, dispatch, update_trip_detail);
    }
}

export function deleteTrip( id ) {
    return function ( dispatch ) {
        delete_trip(id, dispatch, update_trip);
    }
}

export function deleteTripImage( id ) {
    return function ( dispatch ) {
        delete_trip_image(id, dispatch, update_trip_detail);
    }
}