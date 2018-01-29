import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
    ExamTitle, ContentTitle, ContentExamTitle,
    ContentButtonDelete, ContentQuizDetail, HeaderQuizDetail,
    HeaderQuizDetailText, HeaderQuizDetailButton, ContentQuizDetailText,
    ContentQuizDetailButton, HeaderNumberQuestion, ContentNumberQuestion,
    CreateDate, CreateDateBody, CreateDateColumn, CreateDateRow
} from "../style-js/ExamDetail.style";
import { Container, Row } from "../style-js/Grid.style";
import Header from "../components/Header";
import styled from 'styled-components';
import Footer from "../components/Footer";
import NavBarFooter from "../components/NavBarFooter";
import Button from "material-ui/Button";
import ConfirmDeleteDialog from "../components/shared/ConfirmDeleteDialog";
import QuizSetting from "./QuizSetting";
import { deleteExam, fetchExamById } from "../actions/actionCreators";
import Loading from "../components/Loading";

const Content = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    
    @media (max-width: 767px) {
        display: block;
		width: 100%;
		margin: 0;
	}
`;

const LeftRow = styled.div`
    display: inline-block;
    width: calc(25% - 5px);
    margin-top: 2%;
    
    @media (max-width: 767px) {
    margin-top: 5%;
		width: 100%;
	}
`;

const RightRow = styled.div`
    display: inline-block;
    width: calc(75% - 5px);
    margin-left: 2%;
    margin-top: 2%;
    
    @media (max-width: 767px) {
		width: auto;
		margin-top: 3em;
		
`;

const ButtonDelete = styled(Button)`
    background-color: #ffffff !important;
    color: red !important;
    border-radius: 2px !important;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2) !important;
    float: right !important;
    height: 35px !important;
    margin-top:2% !important;
    margin-bottom: 2%;
    margin-right: 4%;
    width: 100px;
    @media (max-width: 767px) {
		margin-top:5% !important;
	}
`;

class ExamDetail extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            openDialog: false,
            showLoading: true,

        };

        this.handleRequestCloseDialog = this.handleRequestCloseDialog.bind(this);
        this.handleClickOpenDialog = this.handleClickOpenDialog.bind(this);
    }

    componentWillMount() {
        this.props.fetchExamById(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.exam_detail !== this.props.exam_detail) {
            this.setState({
                exam_detail:nextProps.exam_detail,
                showLoading: false
            })
        }
    }

    handleClickOpenDialog(){
        this.setState({
            openDialog: true
        });
    }

    handleRequestCloseDialog() {
        this.setState({
            openDialog: false
        });
    };

    render() {
        if(this.state.showLoading){
            return <Loading />
        }
        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <ContentTitle>
                        <ContentExamTitle>
                            <ExamTitle>
                                {`${this.props.exam_detail.title}`}
                            </ExamTitle>
                        </ContentExamTitle>
                        <ContentButtonDelete>
                            <ButtonDelete onClick={this.handleClickOpenDialog}>
                                DELETE
                            </ButtonDelete>
                        </ContentButtonDelete>
                    </ContentTitle>
                    <Content>
                        <LeftRow>
                            <ContentQuizDetail>
                                <HeaderQuizDetail>
                                    <ContentQuizDetailText>
                                        <HeaderQuizDetailText>Quiz Detail</HeaderQuizDetailText>
                                    </ContentQuizDetailText>

                                    <ContentQuizDetailButton>
                                        <HeaderQuizDetailButton>View Quiz</HeaderQuizDetailButton>
                                    </ContentQuizDetailButton>
                                </HeaderQuizDetail>

                                <ContentNumberQuestion>
                                    <HeaderNumberQuestion>{`${this.props.exam_detail.questions} questions`}</HeaderNumberQuestion>
                                    <CreateDate>
                                        <CreateDateBody>
                                            <CreateDateRow>
                                                <CreateDateColumn>Created:</CreateDateColumn>
                                                <CreateDateColumn>{`${this.props.exam_detail.create_date}`}</CreateDateColumn>
                                            </CreateDateRow>
                                            <CreateDateRow>
                                                <CreateDateColumn>Modified:</CreateDateColumn>
                                                <CreateDateColumn>{`${this.props.exam_detail.modify_date}`}</CreateDateColumn>
                                            </CreateDateRow>
                                        </CreateDateBody>
                                    </CreateDate>
                                </ContentNumberQuestion>
                            </ContentQuizDetail>
                        </LeftRow>
                        <RightRow>
                            <QuizSetting title={this.props.exam_detail.title}
                                         time_limit={this.props.exam_detail.duration}
                                         force_submit={this.props.exam_detail.force_submit}
                                         shuffle_question={this.props.exam_detail.shuffle_question}
                                         exam_id={this.props.exam_detail.id}
                            />
                        </RightRow>
                    </Content>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
                <ConfirmDeleteDialog open={this.state.openDialog}
                                     handleRequestClose={this.handleRequestCloseDialog}
                                     confirmText="ok"
                                     headerText="Delete Exam"
                                     descriptionText={`Do you want to delete ${this.props.exam_detail.title}`}
                                     exam_id={this.props.exam_detail.id}
                />
            </Container>
        );
    }
}

ExamDetail.defaultProps = {};

ExamDetail.propTypes = {

    exam_detail: PropTypes.object.isRequired,
    fetchExamById: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user,
        exam_detail: state.exam_detail
    }
}

const mapDispatchToProps = {
    fetchExamById: fetchExamById,
    deleteExam: deleteExam
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter((ExamDetail)));