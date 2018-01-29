import React, { Component } from 'react';
import {
	SectionCourseItemBlock,
	SectionCourseItemIcon,
	SectionCourseItemText
} from '../../style-js/CourseDetail.style';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { update_view_video, update_open_video_dialog } from '../../actions/actionCreators';

class SectionCourseItem extends Component {
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		e.preventDefault();

		if (this.props.item.content_type === "video" && this.props.item.is_preview) {
			this.props.update_view_video(this.props.item)
			this.props.update_open_video_dialog(true)
		}
	}

	render() {
		const { item } = this.props;
		let icon_name = "";
		if (item.content_type === "pdf") {
			icon_name = "description"
		} else if (item.content_type === "video") {
			icon_name = "play_circle_filled"
		} else {
			icon_name = "help_outline"
		}

		return (
			<SectionCourseItemBlock preview={item.is_preview} onClick={this.handleClick}>
				<SectionCourseItemIcon name={icon_name}/>
				<SectionCourseItemText>{item.content_title}</SectionCourseItemText>
			</SectionCourseItemBlock>
		);
	}
}

SectionCourseItem.propTypes = {
	view_video: PropTypes.object.isRequired,
	update_view_video: PropTypes.func.isRequired,
	update_open_video_dialog: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		view_video: state.view_video,
	}
}

const mapDispatchToProps = {
	// update_view_video: update_view_video,
	// update_open_video_dialog: update_open_video_dialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionCourseItem);