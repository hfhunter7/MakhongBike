import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from '../style-js/Grid.style'
import { connect } from 'react-redux';
import Header from '../components/Header';
import NavBarFooter from '../components/NavBarFooter';

import Footer from "../components/Footer";

import {
    ProfileContainer,
    ProfileContent,
    ProfileImge,
    ProfileDetail,
    ProfileUserName,
    ProfileInformation,
    ProfileEdit,
    ProfileBirthDateBox,
    ProfileTelePhoneBox,
    ProfileEmail,
    ProfileInformationBox,
    ProfileInformationName,
} from '../style-js/Profile.style'
import EditProfileDialog from "../components/shared/EditProfileDialog";
import { updateProfileTrainer } from "../actions/actionCreators";
import Loading from "../components/Loading";

class MyProfile extends Component {

    constructor( props ) {
        super(props);
        this.state = {
            address: "",
            city: "",
            province: "",
            zip_code: "",
            error_message: "",
            open_edit_profile: false,
            open_edit_address: false,
        };
        this.handleClickEditProfile = this.handleClickEditProfile.bind(this);
        this.handleClickEditAddressBilling = this.handleClickEditAddressBilling.bind(this);
        this.handleRequestCloseProfile = this.handleRequestCloseProfile.bind(this);
        this.handleRequestCloseAddress = this.handleRequestCloseAddress.bind(this);
    }

    handleClickEditProfile() {
        this.setState({ open_edit_profile: true });
    };

    handleClickEditAddressBilling() {
        this.setState({
            open_edit_address: true,
            address: "",
            city: "",
            province: "",
            zip_code: "",
            error_message: ""
        });
    };



    handleRequestCloseProfile = () => {
        this.setState({ open_edit_profile: false });
    };
    handleRequestCloseAddress = () => {
        this.setState({ open_edit_address: false });
    };

    handleSaveProfile = ( data ) => {
        this.props.updateProfileTrainer(data);
        this.setState({ open_edit_profile: false });
    };

    render() {
        if (Object.keys(this.props.user).length === 0) return <Loading />
        let birthday = "";
        if (this.props.user) {
            if (this.props.user.birthday !== undefined && this.props.user.birthday !== null) {
                let month = this.props.user.birthday.substring(5, 7);
                let day = this.props.user.birthday.substring(8, 10);
                let year = this.props.user.birthday.substring(0, 4);
                switch (month) {
                    case "01":
                        month = "January";
                        break;
                    case  "02":
                        month = "February";
                        break;
                    case "03":
                        month = "March";
                        break;
                    case "04":
                        month = "April";
                        break;
                    case "05":
                        month = "May";
                        break;
                    case "06":
                        month = "June";
                        break;
                    case "07":
                        month = "July";
                        break;
                    case "08":
                        month = "August";
                        break;
                    case "09":
                        month = "September";
                        break;
                    case "10":
                        month = "October";
                        break;
                    case "11":
                        month = "November";
                        break;
                    case "12":
                        month = "December";
                        break;
                    default:
                        month = "";
                        break;
                }
                birthday = day + " " + month + " " + year;
            }
        }

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <ProfileContainer>
                        <ProfileContent>
                            <ProfileImge>
                                <img className="image-size" src={this.props.user.image_url}
                                     alt={this.props.user.image_url} width="200px" height="auto"/>
                            </ProfileImge>
                            <ProfileDetail>
                                <ProfileInformationName>
                                    {this.props.user.display_name !== null ? this.props.user.display_name : "Please add your Display Name"}
                                </ProfileInformationName>
                                <ProfileInformationBox>
                                    <ProfileInformation>Personal information</ProfileInformation>
                                    <ProfileUserName>
                                        <i className="material-icons card-logo">account_box</i>
                                        <div className="card-id">
                                            {this.props.user.card_id !== null && this.props.user.card_id !== '' ? this.props.user.card_id : "Please add your id card"}
                                        </div>
                                    </ProfileUserName>
                                    <ProfileBirthDateBox>
                                        <i className="material-icons birthday-logo">cake</i>
                                        <div className="birthday-date">
                                            {this.props.user.birthday !== null && this.props.user.birthday !== '' ? birthday : "Please add your Birth Day"}
                                        </div>
                                    </ProfileBirthDateBox>
                                    <ProfileTelePhoneBox>
                                        <i className="material-icons tel-logo">smartphone</i>
                                        <div className="tel-number">
                                            {this.props.user.phone_number !== null && this.props.user.phone_number !== '' ? this.props.user.phone_number : "Please add your Phone Number"}
                                        </div>
                                    </ProfileTelePhoneBox>
                                    <ProfileEmail>
                                        <i className="material-icons">email</i>
                                        <div className="Account-Email">
                                            {this.props.user.email}
                                        </div>
                                    </ProfileEmail>
                                    <ProfileEmail>
                                        <i className="material-icons">domain</i>
                                        <div className="Account-Email">
                                            {this.props.user.company_name}
                                        </div>
                                    </ProfileEmail>
								</ProfileInformationBox>
								<ProfileEdit onClick={this.handleClickEditProfile} raised
								             className="edit-profile-button">EDIT PROFILE</ProfileEdit>
								<EditProfileDialog open={this.state.open_edit_profile}
								                   handleRequestClose={this.handleRequestCloseProfile}
								                   handleSaveProfile={this.handleSaveProfile}
								                   user={this.props.user}
								                   {...this.props}/>
							</ProfileDetail>
						</ProfileContent>

                    </ProfileContainer>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

////////////MOCK
MyProfile.defaultProps = {
    user_mock: {
        bank_account: [
            // 	{
            // 	id: "1",
            // 	bank_name: "Kasikorn",
            // 	bank_number: "888-27684-1",
            // 	bank_type: "ออมทรัพย์",
            // 	bank_branch: "โลตัสรังสิต",
            // 	bank_holder: "Suttida MimJa",
            // 	trainer_id: "1"
            // }
        ]
    }
};


function mapStateToProps( state ) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    updateProfileTrainer: updateProfileTrainer,
};

MyProfile.propTypes = {
    updateProfileTrainer: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
