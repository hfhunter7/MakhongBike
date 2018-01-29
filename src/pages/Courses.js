import React, { Component } from 'react';
import Header from '../components/Header';
import NavBarFooter from '../components/NavBarFooter';
import Footer from '../components/Footer';
import { Container, Row } from '../style-js/Grid.style'
import styled from 'styled-components';

import {
    CoursesEmptyContainer,
    IconEmpty,
    CoursesEmptyTitle,
    CoursesEmptySubTitle,
    ButtonCoursesEmpty
} from '../style-js/Courseslayout.style'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';
import GridBox from "../components/GridBox";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import NewCourseDialog from "../components/shared/NewCourseDialog";

import { createCourse , fetch_course } from "../actions/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loading from "../components/Loading";


const TitleCourses = styled.div`
    display: inline-flex;
    padding-left: 5%;
	padding-right: 5%;
	padding-top: 40px;
	background-color: #fafafa;
	font-size: 40px;
	width: 90%;
	.left {
	    width: 50%;
	    padding-top: 1.5%;
	    @media (max-width: 767px) {
		    padding-top: 4%;
		    width: 60%;
		}
	}
    .right{
        width: 66%;
        text-align: right;
        @media (max-width: 767px) {
		    text-align: center;
		}
	}
     }
	@media (max-width: 767px) {
		padding: 0 4% 0 4%;
		width: 100%;
		
	}
`;

const TitleBox = styled.div`
	font-size: 20px;
	background-color: #fafafa;
	display: inline-block;
	@media (max-width: 767px) {
	
	}
`;

const SortBox = styled.div`
	display: inline-flex;
	@media (max-width: 767px) {
	}
`;

const CourseBox = styled.div`
    padding: 2%;
`;

const ButtonBox = styled.div`
    padding-top: 6%;
    @media (max-width: 767px) {
        padding-top: 13%;
	}
`;

const TextBetween = styled.div`
	display: inline-box;
	font-size: 40px;
	margin: 2px 10px;
	@media (max-width: 767px) {
	display: none;
	}
`;

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

const FormNoneDisplay = styled.div`
    @media (max-width: 767px) {
	    display: none;
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

class Courses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            age: '',
            name: '',
            open: false,
            showLoading: true
        };
    }

    componentWillMount() {
        this.props.fetch_course()
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        if(nextProps.courses !== this.props.courses){
            this.setState({
                courses: nextProps.courses,
                showLoading: false
            })
        }
    }

    handleSortChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleProgressChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClickNewCourse = () => {
        this.setState({
            open: true,
        })  ;
    };

    handleCreateCourse = (data) => {
        this.props.createCourse(data)
        this.setState({ open: false , showLoading: true});
    }

    handleReQuestClose = () =>{
        this.setState({
            open: false,
        })  ;
    };

    handleClickShowDetail(e) {
        const id = e.currentTarget.dataset.id;
        this.props.history.push('/courses/' + id)
    }

    render() {
        if(this.state.showLoading) return <Loading/>
        const { classes } = this.props;
        return (
            <Container>
                <Header/>
                <Row>
                    {
                        this.props.courses ?
                        this.props.courses.length > 0 ?
                            <div>
                                <TitleCourses>
                                    <div className="left">
                                        <TitleBox>{`All your courses(${this.props.courses.length})`}</TitleBox>
                                    </div>
									<div className="right">
                                        <SortBox>
                                            <FormNoneDisplay>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel>Sort by</InputLabel>
                                                    <Select
                                                        value={this.state.age}
                                                        onChange={this.handleSortChange}
                                                        input={<Input name="age" id="age-simple" />}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Name</MenuItem>
                                                        <MenuItem value={20}>Price</MenuItem>
                                                        <MenuItem value={30}>Date</MenuItem>
                                                    </Select>
                                                </FormControl>

                                                <FormControl className={classes.formControl}>
                                                    <InputLabel>Progress</InputLabel>
                                                    <Select
                                                        value={this.state.name}
                                                        onChange={this.handleProgressChange}
                                                        input={<Input name="name" id="age-simple" />}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Name</MenuItem>
                                                        <MenuItem value={20}>Price</MenuItem>
                                                        <MenuItem value={30}>Date</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <TextBetween>
                                                    |
                                                </TextBetween>
                                            </FormNoneDisplay>
                                            <ButtonBox>
                                                <Button onClick={this.handleClickNewCourse} raised color="primary">
                                                    New Course
                                                </Button>
                                            </ButtonBox>
                                        </SortBox>
                                    </div>
                                </TitleCourses>
                                <HRLine />
                                <CourseBox>
                                {
                                    this.props.courses.map((course,index) => {
                                        return <GridBox key={index}
                                                        id={course.id}
                                                        image_url={course.image_url}
                                                        title={course.title}
                                                        course_content={course.lessons_total}
                                                        course_certificate={course.course_certificate}
                                                        is_publish={course.is_publish}
                                                        is_draft={course.is_draft}
                                                        price={course.price}
                                                        user={this.props.user}
                                                        onClick={this.handleClickShowDetail.bind(this)}/>
                                    })
                                }
                                </CourseBox>
                            </div>
                            :
                            <CoursesEmptyContainer>
                                <IconEmpty className="material-icons ">school</IconEmpty>
                                <CoursesEmptyTitle>
                                    Start your course
                                </CoursesEmptyTitle>
                                <CoursesEmptySubTitle>
                                    By creating sections, then put videos, PDF files or quizzes into section!
                                </CoursesEmptySubTitle>
                                <ButtonCoursesEmpty onClick={this.handleClickNewCourse}>
                                    CREATE COURSE
                                </ButtonCoursesEmpty>
                            </CoursesEmptyContainer>
                            :
                            <div>hi</div>
                    }
	                <NewCourseDialog   open={this.state.open}
	                                   handleCreateCourse={this.handleCreateCourse}
	                                   handleRequestClose={this.handleReQuestClose}
	                                   user={this.props.user}
	                                   {...this.props} />
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

Courses.defaultProps = {
    courses: [
    	{
    		id: 1,
    		title: "Photoshop Fundamentals: An",
    		price: 3800,
    		course_content: 5,
            course_certificate: 1,
    		image_url: "https://i.ytimg.com/vi/USi_ShbcM6o/maxresdefault.jpg",
    		status: "Draft",
    	},
    	{
    		id: 2,
    		title: "Microsoft Office Time-Saving Techniques",
    		price: 0,
            course_content: 0,
            course_certificate: 0,
    		image_url: "http://www.lightspeedweb.ca/wp-content/uploads/2016/11/SEO-Blog-2-2.png",
            status: "Published",
    	},
    	{
    		id: 3,
    		title: "Google Cloud Productivity - Drive and Google's Office",
    		price: 1600,
            course_content: 20,
            course_certificate: 1,
    		image_url: "https://image.slidesharecdn.com/playframeworkongoogleappengine-2016-smart-160411203949/95/play-framework-on-google-app-engine-productivity-stack-6-638.jpg?cb=1460908007",
            status: "Published",
    	},
    	{
    		id: 4,
    		title: "Google Drive for work",
    		price: 0,
            course_content: 18,
            course_certificate: 1,
    		image_url: "https://cnet2.cbsistatic.com/img/LZw2KQdtZ1Fa4nsLXiW99qsRhN0=/fit-in/370x0/2012/04/24/76f84397-f0ec-11e2-8c7c-d4ae52e62bcc/Google_Drive_desktop.png",
            status: "Published",
    	},
    	{
    		id: 5,
    		title: "Photoshop Fundamentals: An Introduction to Photos",
    		price: 3800,
            course_content: 3,
            course_certificate: 0,
    		image_url: "http://www.lightspeedweb.ca/wp-content/uploads/2016/11/SEO-Blog-2-2.png",
            status: "Draft",
    	},
    ]
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    fetch_course: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    createCourse: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
    return {
        user: state.user,
        courses: state.courses
    }
}

const mapDispatchToProps = {
    fetch_course: fetch_course,
    createCourse: createCourse,
};

export default  connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Courses)));
