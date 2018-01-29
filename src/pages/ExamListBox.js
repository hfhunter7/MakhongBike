import React, { Component } from 'react';
import {
    Text1,
    Text2,
    Text3,
    Text4,
} from "../style-js/ExamList.style";

class ExamListBox extends Component {
    render() {
        return (
            <div className="body-table" onClick={this.props.onClick} data-id={this.props.id}>
                <Text1>{this.props.id}</Text1>
                <Text2>{this.props.exam_name}</Text2>
                <Text3>{this.props.question}</Text3>
                <Text4>{this.props.latest_update}</Text4>
            </div>
        );
    }
}

ExamListBox.defaultProps = {};

export default ExamListBox;
