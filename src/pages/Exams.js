import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import NavBarFooter from '../components/NavBarFooter';
import Footer from '../components/Footer';
import { Container, Row } from '../style-js/Grid.style'
import {
    ExamEmptyContainer,
    ExamEmptyTitle,
    IconEmpty,
    ExamEmptySubTitle,
    ButtonExamEmpty,
} from '../style-js/Examlayout.style'
import {
    ExamBox,
    Text1,
    Text2,
    Text3,
    Text4,

} from "../style-js/ExamList.style";
import ConfirmDialog from "../components/shared/ConfirmDialog";
import styled from 'styled-components';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { withRouter } from "react-router-dom";
import ExamListBox from "./ExamListBox";
import Loading from "../components/Loading";
import { fetch_exams } from "../actions/actionCreators";
import { connect } from "react-redux";

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
		}
	}
    .right{
        width: 50%;
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

class Exams extends Component {

    constructor(props){
        super(props);
        this.handleClickOpenDialog = this.handleClickOpenDialog.bind(this);
        this.handleRequestCloseDialog = this.handleRequestCloseDialog.bind(this);

        this.state = {
            exams: [],
            openDialog: false,
            age: '',
            name: '',
            open: false,
            showLoading: true
        }
    }

    componentWillMount() {
        this.props.fetch_exams();
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        if(nextProps.exams !== this.props.exams){
            this.setState({
                exams: nextProps.exams,
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

    handleClickOpenDialog(){
        this.setState({
            openDialog: true
        })
    }

    handleRequestCloseDialog() {
        this.setState({
            openDialog: false
        });
    };

    handleClickDetail(e){
        const id = e.currentTarget.dataset.id;
        this.props.history.push('/exam/' + id)
    }

    render() {
        if(this.state.showLoading){
            return <Loading />
        }

        const { classes } = this.props;
        return (
            <Container>
                <Header/>
                <Row>
                    {
                       this.props.exams.length > 0 ?
                          <div>
                              <TitleCourses>
                                  <div className="left">
                                      <TitleBox>{`All your quizzes(${this.props.exams.length})`}</TitleBox>
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
                                              <Button onClick={this.handleClickOpenDialog} raised color="primary">
                                                  NEW QUIZ
                                              </Button>
                                          </ButtonBox>
                                      </SortBox>
                                  </div>
                              </TitleCourses>
                              <HRLine />
                              <ExamBox>
                                  <div className="header-table">
                                      <Text1>#</Text1>
                                      <Text2>Quiz name</Text2>
                                      <Text3>Question</Text3>
                                      <Text4>Latest update</Text4>
                                  </div>
                              {
                                  this.props.exams.length > 0 ?
                                      this.props.exams.map((exam,index) => {
                                          return <ExamListBox key={index}
                                                              id={exam.id}
                                                              count={index}
                                                              exam_name={exam.title}
                                                              question={exam.questions}
                                                              latest_update={exam.modify_date}
                                                              onClick={this.handleClickDetail.bind(this)}
                                          />
                                      })
                                      :
                                      <div>don't have exam list</div>
                              }
                              </ExamBox>
                          </div>
                            :
                            <ExamEmptyContainer>
                                <IconEmpty className="material-icons ">help_outline</IconEmpty>
                                <ExamEmptyTitle>
                                    No quiz
                                </ExamEmptyTitle>
                                <ExamEmptySubTitle>
                                    Create your course certificate for students once they complete the course.
                                </ExamEmptySubTitle>
                                <ButtonExamEmpty onClick={this.handleClickOpenDialog}>
                                    CREATE QUIZ
                                </ButtonExamEmpty>
                            </ExamEmptyContainer>
                    }
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
                <ConfirmDialog open={this.state.openDialog}
                               handleRequestClose={this.handleRequestCloseDialog}
                               confirmText="create quiz"
                               headerText="Create New Quiz"
                />
            </Container>
        );
    }
}

Exams.defaultProps = {
    // exam: [
    //     {
    //         id:1,
    //         exam_name: "Google Analytics IQ exam: Mobile App",
    //         question: 10,
    //         price: "Free",
    //         latest_update: '12/12/12',
    //     },
    //     {
    //         id:2,
    //         exam_name: "Google Analytics IQ exam: Technology and Education",
    //         question: 20,
    //         price: "Free",
    //         latest_update: '13/12/12',
    //     },
    //     {
    //         id:3,
    //         exam_name: "Google Analytics IQ exam: Web-based Application",
    //         question: 30,
    //         price: "฿1200",
    //         latest_update: '14/12/12',
    //     },
    // ]
};

Exams.propTypes = {
    exams: PropTypes.array.isRequired,
    fetch_exams: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user,
        exams: state.exams
    }
}

const mapDispatchToProps = {
    fetch_exams: fetch_exams
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Exams)));
