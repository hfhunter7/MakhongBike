import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from 'material-ui/Switch';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import {
    ExamBox,
    Title,
    TextHead,TextDetail3,
    TextDetail, TextDetaill,
    ButtonSetting,
    SwitchBox,
} from "../style-js/QuizSetting.style";
import EditQuizDialogName from "../components/shared/EditQuizDialogName";
import { editQuizNameByExamId } from "../actions/actionCreators";

import { connect } from "react-redux";
import EditQuizDialogTime from "../components/shared/EditQuizDialogTime";


const styles = {
    bar: {},
    checked: {
        color: green[ 500 ],
        '& + $bar': {
            backgroundColor: green[ 500 ],
        },
    },
};

class QuizSetting extends Component {
    constructor( props ) {
        super(props)
        this.state = {
            open_dialog_quiz: false,
            open_dialog_time: false,
            force_submit: props.force_submit,
            shuffle_question: props.shuffle_question,
            title: '',
            update: {
            }
        };
        this.handleRequestCloseDialog = this.handleRequestCloseDialog.bind(this);
    }

    state = {
        checkedA: this.props.force_submit,
        checkedB: this.props.shuffle_question,
    };

    handleChange = name => ( event, checked ) => {
        this.setState({
            [ name ]: checked,
        });
        if(name === 'force_submit'){
            const data = {
                ...this.state.update, ...{
                    [ name ]: checked,
                    "duration": this.props.time_limit,
                    "shuffle_question": this.state.shuffle_question,
                    "title": this.props.title,
                }
            }
            this.props.editQuizNameByExamId(this.props.exam_id, data)
        }else {
            const data = {
                ...this.state.update, ...{
                    [ name ]: checked,
                    "duration": this.props.time_limit,
                    "force_submit": this.props.force_submit,
                    "title": this.props.title,
                }
            }
            this.props.editQuizNameByExamId(this.props.exam_id, data)
        }
    };


    handleClickOpenDialogQuiz() {
        this.setState({ open_dialog_quiz: true });
    }

    handleClickOpenDialogTime() {
        this.setState({ open_dialog_time: true });
    }

    handleRequestCloseDialog = () => {
        this.setState({ open_dialog_quiz: false });
    };
    handleRequestCloseDialogTime = () => {
        this.setState({ open_dialog_time: false });
    };
    handleSaveQuiz = ( data ) => {
        this.setState({ open_dialog_time: false ,open_dialog_quiz: false });
        this.props.editQuizNameByExamId(this.props.exam_id, data)
    };

    render() {
        console.log(this.state.force_submit)
        const { classes } = this.props;
        return (
            <ExamBox>
                <div className="header-table">
                    <div className="setting-icon"><i className="material-icons">settings</i></div>
                    <Title>Quiz Settings</Title>
                </div>
                <div className="body-table"> {/*row1*/}
                    <TextHead>Quiz name</TextHead>
                    <TextDetaill>{this.props.title}</TextDetaill>
                    <ButtonSetting onClick={this.handleClickOpenDialogQuiz.bind(this)}>EDIT</ButtonSetting>
                    <EditQuizDialogName open={this.state.open_dialog_quiz}
                                        handleRequestClose={this.handleRequestCloseDialog}
                                        handleSaveQuiz={this.handleSaveQuiz}
                                        {...this.props}

                    />
                </div>
                <div className="body-table">       {/*row3*/}
                    <TextHead>Time limit</TextHead>
                    <TextDetail3>{this.props.time_limit}</TextDetail3>
                    <ButtonSetting onClick={this.handleClickOpenDialogTime.bind(this)}>CHANGE</ButtonSetting>
                    <EditQuizDialogTime open={this.state.open_dialog_time}
                                        handleRequestClose={this.handleRequestCloseDialogTime}
                                        handleSaveQuizeTime={this.handleSaveQuiz}
                                        {...this.props}
                    />
                </div>
                <div className="body-table">       {/*row4*/}
                    <TextHead>Force submit</TextHead>
                    <TextDetail>{this.state.force_submit ? 'On' : 'Off'}</TextDetail>
                    <SwitchBox>
                        <Switch
                            classes={{
                                checked: classes.checked,
                                bar: classes.bar,
                            }}
                            checked={this.props.force_submit}
                            onChange={this.handleChange('force_submit')}
                            aria-label="checkedA"
                        />
                    </SwitchBox>
                </div>
                <div className="body-table">       {/*row5*/}
                    <TextHead>Shuffle question</TextHead>
                    <TextDetail>{this.state.shuffle_question ? 'On' : 'Off'}</TextDetail>
                    <SwitchBox>
                        <Switch
                            classes={{
                                checked: classes.checked,
                                bar: classes.bar,
                            }}
                            checked={this.state.shuffle_question}
                            onChange={this.handleChange('shuffle_question')}
                            aria-label="checkedB"
                        />
                    </SwitchBox>
                </div>
            </ExamBox>
        );
    }
}

QuizSetting.defaultProps = {
    classes: PropTypes.object.isRequired,
};
QuizSetting.propTypes = {
    editQuizNameByExamId: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
    editQuizNameByExamId: editQuizNameByExamId
};

function mapStateToProps( state ) {
    return {
        editQuizNameByExamId: editQuizNameByExamId
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(QuizSetting));
