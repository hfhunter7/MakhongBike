import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import Footer from "../components/Footer";
import NavBarFooter from '../components/NavBarFooter';
import { Container, Row } from '../style-js/Grid.style';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import * as firebase from 'firebase';
import {
    CourseDetailContainer,
    CourseInformation,
    CourseContent,
    CourseDetailBlock,
    CourseTitle,
    LeftContent,
    RightContent,
    TitleTextBlock,
    HeaderIconBlock,
    HeaderIcon,
    HeaderTitle,
    LeftHeadBoxContent,
    CourseDetailLeftBox,
    CourseImageLeftBox,
    CourseDetailInBox,
    CourseDetailInDetailBox,
    CourseTitleInDetailBox,
    IconImageBlock,
    FileInput,
    GridBoxImage,
    IconUploadImageBlock,
    IconUploadImage
} from '../style-js/CourseDetail.style'
import EditCourseDialog from '../components/shared/EditCourseDialog'
import ConfirmDeleteDialog from '../components/shared/ConfirmDeleteDialog'
import Loading from '../components/Loading';
import {
    ButtonAdd,
    ButtonCertificateEmpty,
    CertificateEmptyContainer, CertificateEmptySubTitle, CertificateEmptyTitle, CertificatesDetailContent,
    DetailContentBody,
    DetailContentHeader,
    IconEmpty
} from "../style-js/CertificateLayout.style";

//api
import {
    addTripImage, deleteTrip, deleteTripImage,
    editImageTrip, editTrip,
    getTripById,
} from '../actions/actionCreators'
import UploadingDialogs from '../components/shared/UploadingDialogs';
import ListImageView from "../components/ListImageView";
import HeaderAdmin from "../components/HeaderAdmin";

const ItemTitleCourse = styled.div`
	display: inline-flex;
    word-wrap: break-word;
	@media (max-width: 767px){
 	white-space: nowrap; 
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    
	}
`;

const TitleCourse = styled.div`
	display: inline-flex;
	align-items: center;
	white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
	@media (max-width: 767px) {
		width: 50%;
		word-break: break-word;
		display: inline-flex;

	}
`;

const BoxButtonHeader = styled.div`
	display: inline-flex;
	width: 20%;
	margin-left: 62%;
	@media (max-width: 767px) {
	    width: 50%;
	    padding: 16px 0px 0px 0px;
    	margin-top: 14px;
    	margin-right: 13px;
    	margin-left: 5em;
    	
	}
`;

const ButtonStyle = styled(Button)`
 	color :black !important;
 	background-color: white !important;
 	&:hover {
		background-color: #9e9e9e !important;
	}
 `;

const ButtonHeader2 = styled(Button)`	
 	color :red !important;
 	font-weight: 500;
 	background-color: white !important;
 	border: 2px solid #f5f5f5 !important;
 	&:hover {
		background-color: #9e9e9e !important;
	}
	@media (max-width: 767px) {
	    width: 25%;
	}
 `;


class TripDetail extends Component {
    constructor( props ) {
        super();

        this.state = {
            trip_detail: {},
            showLoading: true,
            image_preview: '',
            openDeleteDialog: false
        };
    }

    componentWillMount() {
        this.props.getTripById(this.props.match.params.id)
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        if (nextProps.trip_detail !== this.props.trip_detail) {
            this.setState({
                showLoading: false,
                image_preview: nextProps.trip_detail.image_url
            })
        }
    }


    handleClickOpenDialog = () => {
        this.setState({ open: true });
    };

    handleRequestCloseDialog = () => {
        this.setState({ openPublishDialog: false, openDeleteDialog: false, openUnPublishDialog: false, open: false });
    };

    handleEditDialog = () => {
        this.setState({
            openEditDialog: true,
        });
        // console.log(this.state.openEditDialog)
    };

    handleReQuestClose = () => {
        this.setState({
            openEditDialog: false,
        });
    };
    handleDeleteDialog = () => {
        this.setState({
            openDeleteDialog: true,
        });
        // console.log(this.state.openEditDialog)
    };

    handleClickOpenFile = () => {
        document.getElementById("file-upload").click();
    };

    handleClickOpenFileImage = () => {
        document.getElementById("upload-trip-image").click();
    };

    handleImageChange = ( e ) => {
        const _this = this;

        const file = e.target.files[ 0 ].name;

        const blob = new Blob([ e.target.files[ 0 ] ], { type: "image/jpeg" });

        const storageRef = firebase.storage().ref('image/');

        const deleteRef = storageRef.child(this.props.trip_detail.filename);

        deleteRef.delete().then(() => {
            console.log('delete success')
        });

        const task = firebase.storage().ref('image/' + file).put(blob);

        task.on('state_changed',
            function progress( snapshot ) {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('upload is ' + percentage + '% done')
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            function error( err ) {
                console.log(err)
            },

            function complete() {
                console.log(task.snapshot.downloadURL)

                _this.setState({
                    image_url: task.snapshot.downloadURL,
                });

                const data = {
                    image_url: task.snapshot.downloadURL,
                    filename: file
                };

                _this.props.editImageTrip(_this.props.trip_detail.id, data);
            }
        );
    }

    handleTripImageChange = (e) => {
        const _this = this;

        const file = e.target.files[ 0 ].name;

        const blob = new Blob([ e.target.files[ 0 ] ], { type: "image/jpeg" });

        const storageRef = firebase.storage().ref('trip-image/' + file);

        const task = storageRef.put(blob);

        task.on('state_changed',
            function progress( snapshot ) {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('upload is ' + percentage + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            function error( err ) {
                console.log(err)
            },

            function complete() {
                console.log(task.snapshot.downloadURL);

                _this.setState({
                    image_url: task.snapshot.downloadURL,
                });

                const data = {
                    image_url: task.snapshot.downloadURL,
                    filename: file
                };

                _this.props.addTripImage(_this.props.trip_detail.id, data);
            }
        );
    };

    updateTrip = ( data ) => {
        this.props.editTrip(this.props.trip_detail.id, data);

        this.setState({
            openEditDialog: false
        })
    };

    deleteTrip = (id) => {
        console.log('trip : '+id)

        this.props.deleteTrip(id);
    };

    handleDeleteTripImage = (trip_image_id) => {
        console.log('trip image : '+trip_image_id)
        this.props.deleteTripImage(trip_image_id);
    };

    render() {
        if (this.state.showLoading) return <Loading/>;

        let imagePreview = <div/>;
        if (this.state.image_preview) {
            imagePreview = (<GridBoxImage image_url={this.state.image_preview} onClick={this.handleClickOpenFile}/>);
        } else {
            imagePreview = (
                <IconUploadImageBlock onClick={this.handleClickOpenFile}>
                    <IconUploadImage name="image"/>
                </IconUploadImageBlock>
            )
        }
        // console.log(this.props.course_detail.image_url);

        return (
            <Container>
                <HeaderAdmin
                    Title={this.props.trip_detail.trip_name}
                    showTitle
                    {...this.props}/>
                <Row>
                    <UploadingDialogs open={this.state.open_uploading_dialog}/>
                    <CourseDetailContainer>
                        <CourseInformation>
                            <CourseDetailBlock>
                                {
                                    <CourseTitle>
                                        <TitleCourse>
                                            <ItemTitleCourse>
                                                {`${this.props.trip_detail.trip_name}   `}
                                            </ItemTitleCourse>
                                        </TitleCourse>
                                        <BoxButtonHeader>
                                            <ButtonHeader2
                                                onClick={this.handleDeleteDialog}
                                                disabled={this.props.trip_detail.trip_images.length > 0}
                                            >
                                                ลบทริป
                                            </ButtonHeader2>
                                        </BoxButtonHeader>
                                    </CourseTitle>
                                }
                            </CourseDetailBlock>
                        </CourseInformation>
                        <CourseContent>
                            <LeftContent>
                                <CourseDetailLeftBox>
                                    <LeftHeadBoxContent>
                                        <TitleTextBlock>รายละเอียดทริป</TitleTextBlock>
                                        <ButtonStyle onClick={this.handleEditDialog}>
                                            แก้ไข
                                        </ButtonStyle>

                                    </LeftHeadBoxContent>
                                    <CourseImageLeftBox>
                                        {/*<CourseImageInBox image_url={this.props.course_detail.image_url}/>*/}
                                        <IconImageBlock>
                                            <FileInput id="file-upload" type='file' onChange={this.handleImageChange}/>
                                            {imagePreview}
                                        </IconImageBlock>
                                    </CourseImageLeftBox>
                                    <CourseDetailInBox>
                                        <CourseTitleInDetailBox>{this.props.trip_detail.trip_name}</CourseTitleInDetailBox>
                                        <CourseDetailInDetailBox>{this.props.trip_detail.description}</CourseDetailInDetailBox>
                                    </CourseDetailInBox>
                                </CourseDetailLeftBox>
                            </LeftContent>
                            <RightContent>
                                <CertificatesDetailContent>
                                    <DetailContentHeader>
                                        <HeaderIconBlock>
                                            <HeaderIcon name="list"/>
                                        </HeaderIconBlock>
                                        <HeaderTitle>รูปภาพของทริป</HeaderTitle>
                                        <FileInput id="upload-trip-image" type='file' onChange={this.handleTripImageChange}/>
                                        {
                                            this.props.trip_detail.trip_images.length > 0 &&
                                            <ButtonAdd raised color="primary" onClick={this.handleClickOpenFileImage}>
                                                เพิ่มรูปภาพ
                                            </ButtonAdd>
                                        }
                                    </DetailContentHeader>
                                    <DetailContentBody>
                                        {
                                            this.props.trip_detail.trip_images.length > 0 ?
                                                this.props.trip_detail.trip_images.map(( image, index ) => {
                                                    return <ListImageView key={index}
                                                                          id={image.id}
                                                                          image_url={image.image_url}
                                                                          handleDeleteTripImage={this.handleDeleteTripImage}
                                                    />
                                                })
                                                :
                                                <CertificateEmptyContainer>
                                                    <IconEmpty className="material-icons ">library_add</IconEmpty>
                                                    <CertificateEmptyTitle>
                                                        ไม่มีรูปภาพภายในทริป
                                                    </CertificateEmptyTitle>
                                                    <CertificateEmptySubTitle>
                                                        เพิ่มรูปภาพไปยังในทริป
                                                    </CertificateEmptySubTitle>
                                                    <ButtonCertificateEmpty onClick={this.handleClickOpenFileImage}>
                                                        เพิ่มรูปภาพ
                                                    </ButtonCertificateEmpty>
                                                </CertificateEmptyContainer>
                                        }

                                    </DetailContentBody>
                                </CertificatesDetailContent>
                            </RightContent>
                        </CourseContent>
                    </CourseDetailContainer>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
                <EditCourseDialog open={this.state.openEditDialog}
                                  handleEditTrip={this.updateTrip}
                                  handleRequestClose={this.handleReQuestClose}
                                  trip_name={this.props.trip_detail.trip_name}
                                  description={this.props.trip_detail.description}
                />
                <ConfirmDeleteDialog open={this.state.openDeleteDialog}
                                     handleRequestClose={this.handleRequestCloseDialog}
                                     handleDeleteTrip={this.deleteTrip}
                                     confirmText="ok"
                                     headerText="Delete Trip"
                                     descriptionText={`Do you want to delete ${this.props.trip_detail.trip_name}`}
                                     trip_id={this.props.trip_detail.id}
                />
            </Container>
        )
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user,
        trip_detail: state.trip_detail,
    }
}

TripDetail.defaultProps = {};

TripDetail.propTypes = {
    trip_detail: PropTypes.object.isRequired,
    getTripById: PropTypes.func.isRequired,
    editImageTrip: PropTypes.func.isRequired,
    editTrip: PropTypes.func.isRequired,
    addTripImage: PropTypes.func.isRequired,
    deleteTripImage: PropTypes.func.isRequired,
    deleteTrip: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    getTripById: getTripById,
    editImageTrip: editImageTrip,
    editTrip: editTrip,
    addTripImage: addTripImage,
    deleteTrip: deleteTrip,
    deleteTripImage: deleteTripImage
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TripDetail));
