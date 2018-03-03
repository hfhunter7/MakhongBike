import React, { Component } from 'react';
import styled from 'styled-components';
import { SpanDelete } from "../style-js/CourseDetail.style";
import ConfirmDeleteImageDialog from "./shared/ConfirmDeleteImageDialog";

const GridBoxImage = styled.div`
	position: relative;
	z-index: 99;
	height: 100%;
	background-color: #ccc;
	background-position: 50%;
	background-size: cover;
	background-repeat: no-repeat;
	border-bottom: 1px solid #fafafa;
	background-image: url(${props => props.image_url});
	
	/* zoom */
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
  
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
`;

const GridBoxContainer = styled.div`
	width: calc(25% - 16px);
	display: inline-block;
	border: 1px solid #ebebeb;
	margin: 8px;
	box-sizing: border-box;
	max-width: 290px;
	cursor: pointer;
	-webkit-animation: fadeinout 4s linear 1 forwards;
	animation: fadeinout 4s linear 1 forwards;
	
	@media (max-width: 767px) {
		display: ${props => props.index >= props.limitPhone ? 'none' : undefined};
		width: calc(47% - 6px);
	}
`;

class ListImageView extends Component {
    constructor() {
        super();

        this.state = {
            openDeleteDialog: false,
            course_id: '',
        }
    }

    onDelete = () => {
        this.setState({
            openDeleteDialog: true
        })
    };

    handleRequestClose = () => {
        this.setState({
            openDeleteDialog: false
        })
    };

    render() {
        //console.log(Object.keys(this.props.user).length)
        return (
            <GridBoxContainer limitPhone={this.props.limitPhone} index={this.props.index}>
                <div className="grid-box-container">
                    <div className="grid-content">
                        <div className="image-grid-box" onClick={this.props.onClick} data-id={this.props.id}>
                            <GridBoxImage image_url={this.props.image_url}/>
                        </div>
                        <SpanDelete className="material-icons" onClick={this.onDelete}>clear</SpanDelete>
                    </div>
                </div>
                <ConfirmDeleteImageDialog open={this.state.openDeleteDialog}
                                          handleRequestClose={this.handleRequestClose}
                                          handleDeleteTripImage={this.props.handleDeleteTripImage}
                                          confirmText="ok"
                                          headerText="Delete Image"
                                          descriptionText={`Do you want to delete image ?`}
                                          image_id={this.props.id}
                />
            </GridBoxContainer>
        );
    }
}

ListImageView.defaultProps = {};

export default ListImageView;
