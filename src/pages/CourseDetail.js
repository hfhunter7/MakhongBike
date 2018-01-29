import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import Header from '../components/Header';
import Footer from "../components/Footer";
import NavBarFooter from '../components/NavBarFooter';
import { Container, Row } from '../style-js/Grid.style';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import {
	CourseDetailContainer,
	CourseInformation,
	CourseContent,
	CourseDetailBlock,
	CourseTitle,
	LeftContent,
	RightContent,
	TitleTextBlock,
	SectionCourseContent,
	SectionCourseContentHeader,
	HeaderIconBlock,
	HeaderIcon,
	HeaderTitle,
	SectionCourseContentBody,
	LeftHeadBoxContent,
	CourseDetailLeftBox,
	CourseImageLeftBox,
	// CourseImageInBox,
	CourseDetailInBox,
	PriceBox,
	CourseDetailInDetailBox,
	CourseTitleInDetailBox,
	TagLeftBox,
	IconImageBlock,
	FileInput,
	GridBoxImage,
	IconUploadImageBlock,
	IconUploadImage
} from '../style-js/CourseDetail.style'
import SectionCourseListItem from './course-detail/SectionCourseListItem';
import EditCourseDialog from '../components/shared/EditCourseDialog'
import Loading from '../components/Loading';
import {
	HeaderQuizDetail,
} from "../style-js/ExamDetail.style";
import Paper from "material-ui/Paper/Paper";
import Chip from "material-ui/Chip/Chip";
import { withStyles } from 'material-ui/styles';
import {
	ButtonCoursesEmpty,
	CoursesEmptyContainer,
	CoursesEmptySubTitle,
	CoursesEmptyTitle
} from "../style-js/Courseslayout.style";
import { IconEmpty } from "../style-js/CertificateLayout.style";
import DeleteCourseDialog from "../components/shared/DeleteCourseDialog";
import ConfirmPublishDialog from "../components/shared/ConfirmPublishDialog";
//api
import {
	getCourseById,
	getTags,
	editCourseById,
	publishCourse,
	deleteCourse,
} from '../actions/actionCreators'
import { cloudConfig } from '../helpers/tokenHelper'
import UploadingDialogs from '../components/shared/UploadingDialogs';
import TagDialog from "../components/tag/TagDialog";
import { currencyFormat } from "../helpers/numberHelper";

let cloudinary = require('cloudinary');
const Status = styled.div`
	display: inline-flex;
	color : ${props => props.status === "red" ? 'red' : props.status};
	width: 50%;
	margin-left: 20px;
	@media (max-width: 767px) {
		display: inline;
	}
`;

const ItemTitleCourse = styled.div`
	display: inline-flex;
	@media (max-width: 767px){
 	white-space: nowrap; 
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-flex;
    
	}
`;

const TitleCourse = styled.div`
	display: inline-flex;
	width: 100%;
	align-items: center;
	@media (max-width: 767px) {
		width: 50%;
		word-break: break-word;
		display: inline-flex;

	}
`;

const BoxButtonHeader = styled.div`
	display: inline-flex;
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

const ButtonHeader1 = styled(Button)`
 	color :${props => props.disabled === true ? '#cccccc' : 'black'} !important;
 	font-weight: 500 !important;
 	background-color: ${props => props.disabled === true ? '#ebebeb' : 'white'} !important;
 	border:${props => props.disabled === true ? 'none' : '1px solid black'} !important;
 	margin-right: 15px; !important;
 	&:hover {
		background-color: #9e9e9e !important;
	}
	@media (max-width: 767px) {
	    width: 25%;

    
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

const PaperBox = styled(Paper)`
	box-shadow: none !important;
`;

const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		height: 'auto',
	},
	chip: {
		margin: theme.spacing.unit / 2,
	},
	empty_tag: {
		margin: theme.spacing.unit / 2,
	}
});

class CourseDetail extends Component {
	constructor(props) {
		super();

		this.state = {
			openEditDialog: false,
			openDeleteDialog: false,
            openPublishDialog: false,
			openUnPublishDialog: false,
			showLoading: true,
			chipData: [
				{ key: 0, label: 'Angular' },
				{ key: 1, label: 'jQuery' },
				{ key: 2, label: 'Polymer' },
				{ key: 3, label: 'React' },
				{ key: 4, label: 'Vue.js' },
				{ key: 5, label: 'PHP.js' }
			],
			open_uploading_dialog: false,
			title: '',
			image_url: '',
			price: 0,
			description: '',
			is_publish: false,
			file: '',
			imagePreviewUrl: '',
			openEditTag: false,
		};
	}


	componentWillMount() {
		this.props.getCourseById(this.props.match.params.id);
		this.props.getTags();
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.course_detail !== this.props.course_detail) {
			this.setState({
				showLoading: false,
				title: nextProps.course_detail.title,
				price: nextProps.course_detail.price,
				image_url: nextProps.course_detail.image_url,
				description: nextProps.course_detail.description,
				open_uploading_dialog: false,
				is_publish: nextProps.course_detail.is_publish,
			})
		}
	}

	handleDelete = data => () => {
		const chipData = [ ...this.state.chipData ];
		const chipToDelete = chipData.indexOf(data);
		chipData.splice(chipToDelete, 1);
		this.setState({ chipData });
	};

	handleRequestCloseDialog =()=> {
        this.setState({ openPublishDialog: false , openDeleteDialog: false , openUnPublishDialog: false });
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

    handleEditTag = () =>{
        this.setState({
            openEditTag: true,
        });
    };

    handleReQuestCloseTag = () => {
        this.setState({
            openEditTag: false,
        });
	};

	handleImageChange = (e) => {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		if (file) {
			this.setState({
				open_uploading_dialog: true
			})
			reader.onloadend = () => {
				this.setState({
					file: file,
					imagePreviewUrl: reader.result
				});

				let file_name = file.name.split('.');
				let public_id = 'trainer/' + file_name[0] + '-' + new Date().getTime();
				cloudinary.config(cloudConfig)
				cloudinary.v2.uploader.upload(reader.result, { public_id: public_id }, (error, result) => {
					let url = result.secure_url;

					const newInformation = {
						...this.state, ...{
							image_url: url
						}
					};
                    // console.log(newInformation)
					this.updateCourse(newInformation);
				})
			}

			reader.readAsDataURL(file)
		}
	}

	updateCourse = (data) => {
		this.props.editCourseById(this.props.match.params.id, data)

		this.setState({
			openEditDialog: false
		})
	}

	updateTag = (data) => {
		//api

        this.setState({
            openEditTag: false
        })
	};

	publishCourse =(status) =>{
        let course_id = this.props.course_detail.id;
        this.props.publishCourse(course_id, status);
        this.setState({
            openPublishDialog: false,
        });
    }

    unPublishCourse =(status) =>{
        let course_id = this.props.course_detail.id;
        this.props.publishCourse(course_id, status);
        this.setState({
            openUnPublishDialog:false,
        });
    }

    handlePublishDialog = () => {
        this.setState({
            openPublishDialog: true,
        });
        // console.log(this.state.openEditDialog)
    };
    handleUnPublishDialog = () => {
        this.setState({
            openUnPublishDialog: true,
        });
        // console.log(this.state.openEditDialog)
    };


	render() {
		if (this.state.showLoading) return <Loading/>
		const { classes } = this.props;

		let imagePreview = <div/>;
		if (this.state.image_url) {
			imagePreview = (<GridBoxImage image_url={this.state.image_url} onClick={this.handleClickOpenFile} />);
		} else {
			imagePreview = (
				<IconUploadImageBlock onClick={this.handleClickOpenFile}>
					<IconUploadImage name="image" />
				</IconUploadImageBlock>
			)
		}
        // console.log(this.props.course_detail.image_url);
		return (
			<Container>
				<Header
					Title={this.props.course_detail.title}
					showTitle
					{...this.props}/>
				<Row>
					<UploadingDialogs open={this.state.open_uploading_dialog}/>
					<CourseDetailContainer>
						<CourseInformation>
							<CourseDetailBlock>
								{
									this.props.course_detail.is_draft ?
										<CourseTitle>
											<TitleCourse>
												<ItemTitleCourse>
                                                    {`${this.props.course_detail.title}   `}
												</ItemTitleCourse>
												<Status status="red"> [DRAFT]</Status>
											</TitleCourse>
											<BoxButtonHeader>
												<ButtonHeader1 onClick={this.handlePublishDialog}>
													PUBLISH
												</ButtonHeader1>
												<ButtonHeader2 onClick={this.handleDeleteDialog}>
													DELETE
												</ButtonHeader2>
											</BoxButtonHeader>
										</CourseTitle>
										:
										this.props.course_detail.is_publish ?
											<CourseTitle>
												<TitleCourse>
													<ItemTitleCourse>
														{`${this.props.course_detail.title}   `}
													</ItemTitleCourse>
													<Status status="green"> [PUBLISH]</Status>
												</TitleCourse>
												<BoxButtonHeader>
													<ButtonHeader1 onClick ={this.handleUnPublishDialog}>
														UNPUBILSH
													</ButtonHeader1>
													<ButtonHeader2 onClick={this.handleDeleteDialog}>
														DELETE
													</ButtonHeader2>
												</BoxButtonHeader>
											</CourseTitle>
											:
											<CourseTitle>
												<TitleCourse>
													<ItemTitleCourse>
														{`${this.props.course_detail.title}   `}
													</ItemTitleCourse>
													<Status status="#a9a9a9"> [UNPUBLISH]</Status>
												</TitleCourse>
												<BoxButtonHeader>
													<ButtonHeader1 onClick={this.handlePublishDialog}>
														PUBLISH
													</ButtonHeader1>
													<ButtonHeader2 onClick={this.handleDeleteDialog}>
														DELETE
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
										<TitleTextBlock>Course Detail</TitleTextBlock>
										<ButtonStyle onClick={this.handleEditDialog}>
											EDIT
										</ButtonStyle>
										<EditCourseDialog open={this.state.openEditDialog}
										                  handleEditCourse={this.updateCourse}
										                  handleRequestClose={this.handleReQuestClose}
										                  course={this.props.course_detail}
										                  title={this.props.course_detail.title}
														  image_url={this.props.course_detail.image_url}
										                  description={this.props.course_detail.description}
										                  price={this.props.course_detail.price}
										/>
									</LeftHeadBoxContent>
									<CourseImageLeftBox>
										{/*<CourseImageInBox image_url={this.props.course_detail.image_url}/>*/}
										<IconImageBlock>
											<FileInput id="file-upload" type='file' onChange={this.handleImageChange}/>
											{imagePreview}
										</IconImageBlock>
									</CourseImageLeftBox>
									<CourseDetailInBox>
										<PriceBox>{`Price: ${currencyFormat(this.props.course_detail.price)}`}</PriceBox>
										<CourseTitleInDetailBox>{this.props.course_detail.title}</CourseTitleInDetailBox>
										<CourseDetailInDetailBox>{this.props.course_detail.description}</CourseDetailInDetailBox>
									</CourseDetailInBox>
								</CourseDetailLeftBox>

								<TagLeftBox tagSize={this.state.chipData.length}>
									<HeaderQuizDetail>
										<LeftHeadBoxContent>
											<TitleTextBlock>Tag</TitleTextBlock>
											<ButtonStyle onClick={this.handleEditTag}>
												EDIT
											</ButtonStyle>
											<TagDialog open={this.state.openEditTag}
															  handleEditTag={this.updateTag}
															  handleRequestClose={this.handleReQuestCloseTag}
													   			id={this.props.course_detail.id}
															  title={this.props.course_detail.tags}
											/>
										</LeftHeadBoxContent>
									</HeaderQuizDetail>
									{
										this.props.course_detail.tags.length > 0 ?
											<PaperBox className={classes.root}>
												{this.props.course_detail.tags.map(data => {
													return (
														<Chip
															key={data.id}
															label={data.title}
															// onDelete={this.handleDelete(data)}
															className={classes.chip}
														/>
													);
												})}
											</PaperBox> :
											<PaperBox>
												<Chip
													label={`No tag`}
													className={classes.empty_tag}
												/>
											</PaperBox>
									}
								</TagLeftBox>
							</LeftContent>
							<RightContent>
								<SectionCourseContent>
									<SectionCourseContentHeader>
										{/*<HeaderIcon name="list"/>*/}
										<HeaderIconBlock>
											<HeaderIcon name="list"/>
										</HeaderIconBlock>
										<HeaderTitle>{`Course content(${this.props.course_detail.section_total})`}</HeaderTitle>
									</SectionCourseContentHeader>
									<SectionCourseContentBody>
										{
											this.props.course_detail.section_courses.length > 0 ?
												this.props.course_detail.section_courses.map((sectionCourse, index) =>
													<SectionCourseListItem key={index} index={index}
													                       section_course={sectionCourse}/>
												)
												:
												<CoursesEmptyContainer>
													<IconEmpty className="material-icons ">school</IconEmpty>
													<CoursesEmptyTitle>
														Start your course
													</CoursesEmptyTitle>
													<CoursesEmptySubTitle>
														By creating sections, then put videos, PDF files or quizzes into
														section!
													</CoursesEmptySubTitle>
													<ButtonCoursesEmpty>
														CREATE SECTION
													</ButtonCoursesEmpty>
												</CoursesEmptyContainer>
										}
									</SectionCourseContentBody>
								</SectionCourseContent>
							</RightContent>
						</CourseContent>
					</CourseDetailContainer>
					<Footer/>
				</Row>
				<NavBarFooter {...this.props}/>
				<DeleteCourseDialog open={this.state.openDeleteDialog}
				                    handleRequestClose={this.handleRequestCloseDialog}
				                    confirmText="ok"
				                    headerText="Delete Course"
				                    course_id={this.props.course_detail.id}
				                    descriptionText={`Do you want to delete ${this.props.course_detail.title}`}
				                    deleteCourse={this.props.deleteCourse}
				/>
				<ConfirmPublishDialog open={this.state.openPublishDialog}
									handleRequestClose={this.handleRequestCloseDialog}
									confirmText="ok"
									headerText="Publish Course"
									course_id={this.props.course_detail.id}
									descriptionText={`Do you want to publish ${this.props.course_detail.title}`}
									publishCourse={this.publishCourse}
				/>
				<ConfirmPublishDialog open={this.state.openUnPublishDialog}
									  handleRequestClose={this.handleRequestCloseDialog}
									  confirmText="ok"
									  headerText="Unpublish Course"
									  course_id={this.props.course_detail.id}
									  descriptionText={`Do you want to unpublish ${this.props.course_detail.title}`}
									  unpublishCourse={this.unPublishCourse}
				/>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		course_detail: state.course_detail,
		tags: state.tags,
	}
}

CourseDetail.defaultProps = {
	// course: {
	// 	id: 1,
	// 	title: "Photoshop Fundamentals: An",
	// 	price: 3800,
	// 	total_lesson: 44,
	// 	image_url: "https://i.ytimg.com/vi/USi_ShbcM6o/maxresdefault.jpg",
	// 	percent_progress: 42,
	// 	trainer: {
	// 		id: 1,
	// 		name: "Corey Rabazinski",
	// 		image_url: "https://www.animationsource.org/sites_content/minions/img_site/carl%20transp.png"
	// 	},
	// 	section_courses: [
	// 		{
	// 			id: 1,
	// 			title: "TEST SECTION COURSE 1",
	// 			description: "test section course 1",
	// 			items: [
	// 				{
	// 					"id": 1,
	// 					"title": "The standard Lorem Ipsum passage, used since the 1500s",
	// 					"titlecontent": "TEST PDF",
	// 					"description": "pdf",
	// 					"type": "pdf",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": true,
	// 					"is_done": true
	// 				},
	// 				{
	// 					"id": 2,
	// 					"title": "Generated 10 paragraphs, 901 words, 6105 bytes of Lorem Ipsum",
	// 					"titlecontent": "",
	// 					"description": "video",
	// 					"type": "video",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": true,
	// 					"is_done": false,
	// 					"video_url": "https://player.vimeo.com/video/196822088"
	// 				},
	// 				{
	// 					"id": 3,
	// 					"title": "1914 translation by H. Rackham",
	// 					"titlecontent": "TEST EXAM",
	// 					"description": "exam",
	// 					"type": "exam",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": true,
	// 					"is_done": false
	// 				},
	// 				{
	// 					"id": 4,
	// 					"title": "1914 translation by H. Rackham",
	// 					"titlecontent": "TEST EXAM",
	// 					"description": "exam",
	// 					"type": "exam",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false,
	// 					"is_done": true
	// 				},
	// 				{
	// 					"id": 5,
	// 					"title": "1914 translation by H. Rackham",
	// 					"titlecontent": "TEST EXAM",
	// 					"description": "exam",
	// 					"type": "exam",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false
	// 				},
	// 				{
	// 					"id": 6,
	// 					"title": "1914 translation by H. Rackham",
	// 					"titlecontent": "TEST EXAM",
	// 					"description": "exam",
	// 					"type": "exam",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false
	// 				}
	// 			]
	// 		},
	// 		{
	// 			id: 2,
	// 			title: "TEST SECTION COURSE 2",
	// 			description: "test section course 2",
	// 			items: [
	// 				{
	// 					"id": 7,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST PDF 2",
	// 					"description": "pdf",
	// 					"type": "pdf",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false
	// 				},
	// 				{
	// 					"id": 8,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST VIDEO 2",
	// 					"description": "video",
	// 					"type": "video",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false,
	// 					"video_url": "https://player.vimeo.com/video/198631877"
	// 				},
	// 				{
	// 					"id": 9,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST EXAM 2",
	// 					"description": "exam",
	// 					"type": "exam",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false
	// 				},
	// 				{
	// 					"id": 10,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST EXAM 2",
	// 					"description": "exam",
	// 					"type": "exam",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false
	// 				}
	// 			]
	// 		},
	// 		{
	// 			id: 3,
	// 			title: "TEST SECTION COURSE 3",
	// 			description: "test section course 3",
	// 			items: [
	// 				{
	// 					"id": 11,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST PDF 3",
	// 					"description": "pdf",
	// 					"type": "pdf",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false
	// 				},
	// 				{
	// 					"id": 12,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST VIDEO 3",
	// 					"description": "video",
	// 					"type": "video",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false,
	// 					"video_url": "https://player.vimeo.com/video/196822088"
	// 				},
	// 				{
	// 					"id": 13,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST EXAM 3",
	// 					"description": "exam",
	// 					"type": "exam",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false
	// 				}
	// 			]
	// 		},
	// 		{
	// 			id: 4,
	// 			title: "TEST SECTION COURSE 4",
	// 			description: "test section course 4",
	// 			items: [
	// 				{
	// 					"id": 14,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST PDF 4",
	// 					"description": "pdf",
	// 					"type": "pdf",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false
	// 				},
	// 				{
	// 					"id": 15,
	// 					"title": "Aenean in nibh sit amet metus ultricies vehicula. ",
	// 					"titlecontent": "TEST VIDEO 4",
	// 					"description": "video",
	// 					"type": "video",
	// 					"section_no": 1,
	// 					"section_course_id": 1,
	// 					"is_preview": false,
	// 					"video_url": "https://player.vimeo.com/video/198631877"
	// 				}
	// 			]
	// 		}
	// 	]
	// }
};

CourseDetail.propTypes = {
	course_detail: PropTypes.object.isRequired,
	tags: PropTypes.array.isRequired,
	getCourseById: PropTypes.func.isRequired,
	getTags: PropTypes.func.isRequired,
	editCourseById: PropTypes.func.isRequired,
	publishCourse: PropTypes.func.isRequired,
	deleteCourse: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	getCourseById: getCourseById,
	getTags: getTags,
	editCourseById: editCourseById,
	publishCourse: publishCourse,
	deleteCourse: deleteCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(CourseDetail)));
