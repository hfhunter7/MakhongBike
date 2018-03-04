import React, { Component } from 'react';
import NavBarFooter from '../components/NavBarFooter';
import Footer from '../components/Footer';
import { Container, Row } from '../style-js/Grid.style'
import CertificateIcon from '../image/icon/certificate_icon.png'
import {
    CertificateEmptyContainer,
    CertificateEmptyTitle,
    IconEmpty,
    CertificateEmptySubTitle,
    ButtonCertificateEmpty, Loader, ContainLoader,
} from '../style-js/CertificateLayout.style'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BoxCertificate from "../components/BoxCertificate";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'

import { createTrip, getTrips } from "../actions/actionCreators";
import AddNewTrip from "../components/shared/AddNewTrip";
import HeaderAdmin from "../components/HeaderAdmin";

const HRLine = styled.hr`
    margin-left: 5%;
    max-width: 90%;
    color: ghostwhite;
  
   @media (max-width: 767px) {
		margin-left: 5%;
        max-width: 90%;
        color: ghostwhite;
	}
`;
const TitleCertificates = styled.div`
    display: inline-flex;
    padding-left: 5%;
	padding-right: 5%;
	padding-top: 40px;
	background-color: #fafafa;
	font-size: 40px;
	width: 90%;
`;
const TitleBox = styled.div`
	font-size: 20px;
	background-color: #fafafa;
	display: inline-block;
	@media (max-width: 767px) {
	
	}
`;
const CertificatesBox = styled.div`
    margin-left: 4.5%;
    @media (max-width: 767px) {
        margin-left: 5px;
	}
`;
const Certificatesleft = styled.div`
    width: 80%;
    @media (max-width: 767px) {
        margin-left: 5px;
	}
`;
const Certificateright = styled.div`
    width: 13%;
    margin-left: 10%;
    @media (max-width: 767px) {
        margin-left: 5px;
	}
`;

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class Admin extends Component {
    constructor( props ) {
        super(props)
        this.state = {
            trip: [],
            open: false,
            showLoading: true
        };
    }

    componentWillMount() {
        this.props.getTrips();
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        if (nextProps.trip !== this.props.trip) {
            this.setState({
                trip: nextProps.trip,
                showLoading: false
            })
        }
    }

    handleClickShowDetail( e ) {
        const id = e.currentTarget.dataset.id;
        this.props.history.push('/trip/' + id)
    }

    handleReQuestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleRequestOpen = () => {
        this.setState({
            open: true
        })
    };

    handleCreateTrip = ( data ) => {
        console.log(data)

        this.props.createTrip(data);
    };

    render() {
        if (this.state.showLoading)
            return <ContainLoader>
                <Loader
                    color={'#0088ff'}
                    size={75}
                />
            </ContainLoader>;
        return (
            <Container>
                <HeaderAdmin/>
                <Row>
                    {
                        this.props.trip.length > 0 ?
                            <div>
                                <TitleCertificates>
                                    <Certificatesleft>
                                        <TitleBox>จัดการทริป</TitleBox>
                                    </Certificatesleft>
                                    <Certificateright>
                                        <Button onClick={this.handleRequestOpen} color="primary" raised>
                                            สร้างทริป
                                        </Button>
                                    </Certificateright>
                                </TitleCertificates>
                                <HRLine/>
                                <CertificatesBox>
                                    {
                                        this.props.trip.map(( trip, index ) => {
                                            return <BoxCertificate key={index}
                                                                   id={trip.id}
                                                                   image_url={trip.image_url}
                                                                   trip_name={trip.trip_name}
                                                                   description={trip.description}
                                                                   user={this.props.user}
                                                                   onClick={this.handleClickShowDetail.bind(this)}/>
                                        })
                                    }
                                </CertificatesBox>
                            </div>
                            :
                            <CertificateEmptyContainer>
                                <IconEmpty><img src={CertificateIcon} alt=""/></IconEmpty>
                                <CertificateEmptyTitle>
                                    ไม่มีทริป
                                </CertificateEmptyTitle>
                                <CertificateEmptySubTitle>
                                    สร้างทริปของคุณ
                                </CertificateEmptySubTitle>
                                <ButtonCertificateEmpty onClick={this.handleRequestOpen}>
                                    เพิ่มทริป
                                </ButtonCertificateEmpty>
                            </CertificateEmptyContainer>

                    }
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
                <AddNewTrip open={this.state.open}
                            createTrip={this.handleCreateTrip}
                            handleRequestClose={this.handleReQuestClose}
                            user={this.props.user}
                            {...this.props} />
            </Container>
        );
    }
}

Admin.propTypes = {
    trip: PropTypes.array.isRequired,
    getTrips: PropTypes.func.isRequired,
    createTrip: PropTypes.func.isRequired
};
Admin.defaultProps = {
    // certificates: [
    // 	{
    // 		id: 1,
    // 		image_url: "https://i.pinimg.com/originals/cb/05/fa/cb05fae0e538b870946585fa317afa5d.jpg",
    // 		certificates_content: 5,
    // 		title: "aaaaaaaaaaaaaaaaaaaaa",
    // 		price: 3800,
    // 	},
    // 	{
    // 		id: 2,
    // 		image_url: "http://moziru.com/images/drawn-toon-avenger-3.png",
    // 		certificates_content: 7,
    // 		title: "bbbbbbbbbbbbb",
    // 		price: 380,
    // 	},
    // 	{
    // 		id: 3,
    // 		image_url: "http://movie.mthai.com/app/uploads/2016/12/groot-600x249.jpg",
    // 		certificates_content: 2,
    // 		title: "cccccccccccccccccc",
    // 		price: 800,
    // 	},
    // 	{
    // 		id: 4,
    // 		image_url: "https://pbs.twimg.com/profile_images/860120905023864832/qt8sz12l_400x400.jpg",
    // 		certificates_content: 1,
    // 		title: "ddddddddddddddddddd",
    // 		price: 38,
    //
    // 	},
    // 	{
    // 		id: 5,
    // 		image_url: "https://cdn.vox-cdn.com/thumbor/UKNH_i3GYGQEO0n2HTqNyrfOWwg=/115x0:1777x935/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/54457501/MV5BMjQ4MzkwMzE1OV5BMl5BanBnXkFtZTgwOTUxNDczMTI_._V1_SX1777_CR0_0_1777_935_AL_.0.jpg",
    // 		certificates_content: 1,
    // 		title: "eeeeeeeeeeeeeeee",
    // 		price: 3800,
    // 	},
    //]

};

function mapStateToProps( state ) {
    return {
        user: state.user,
        trip: state.trip
    }
}

const mapDispatchToProps = {
    getTrips: getTrips,
    createTrip: createTrip
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Admin)));
