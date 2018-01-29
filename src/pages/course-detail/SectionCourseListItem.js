import React, { Component } from 'react';
import {
    SectionCourseContainer,
    SectionCourseBlock,
    SectionCourseTitle,
    SectionCourseRight,
    ToggleCollapse,
    SectionCourseRightText,
    SectionCourseItemContainer,
	IconEdit,
	EmptySectionItem,
	TextEmpty,
	ButtonAddContent
} from '../../style-js/CourseDetail.style'
import SectionCourseItem from './SectionCourseItem';
import styled from 'styled-components';
import Button from 'material-ui/Button';

const ButtonStyle = styled(Button)`
 	color :#55afff !important;
 	border: 1px solid #55afff !important;
 	font-weight: 500 !important;
 	background-color: white !important;
 	&:hover {
		background-color: #b3d4fc !important;
	}
 `;
class SectionCourseListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}

		this.openSectionCourseItemBox = this.openSectionCourseItemBox.bind(this);
	}

	openSectionCourseItemBox() {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen
		}));

		let growDiv = document.getElementById(this.props.section_course.id);
		if (growDiv.clientHeight) {
			growDiv.style.height = 0;
		} else {
			let wrapper = document.querySelector(`.measuringWrapper-${this.props.section_course.id}`);
			growDiv.style.height = (wrapper.clientHeight + 30) + "px";
		}
	}

	render() {
		const { section_course } = this.props;

		return (
			<SectionCourseContainer>
				<SectionCourseBlock>
					<SectionCourseTitle>{`Section ${this.props.index + 1}:    ${section_course.title}`}</SectionCourseTitle>
					<SectionCourseRight>
						{/*<SectionCourseRightText>{`${section_course.section_items.length || 0} lessons`}</SectionCourseRightText>*/}
						<SectionCourseRightText><IconEdit name="mode_edit"/><IconEdit name="delete"/></SectionCourseRightText>
						<ToggleCollapse onClick={this.openSectionCourseItemBox} name={this.state.isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}/>
					</SectionCourseRight>
				</SectionCourseBlock>

				<SectionCourseItemContainer id={section_course.id} open={this.state.isOpen}>
					<div className={`measuringWrapper-${section_course.id}`}>
						{
                            section_course.section_items.length > 0 ?
							section_course.section_items.map((item, index) =>
								<SectionCourseItem key={index} item={item} />
							)
                                :
								<EmptySectionItem>
									<TextEmpty>Add Videos,PDF files or quizzes into this seciton!</TextEmpty>
									<ButtonAddContent>
										<ButtonStyle>
											+ ADD CONTENT
										</ButtonStyle>
									</ButtonAddContent>
								</EmptySectionItem>
						}
					</div>
				</SectionCourseItemContainer>
			</SectionCourseContainer>
		);
	}
}

SectionCourseListItem.defaultProps = {};

export default SectionCourseListItem;
