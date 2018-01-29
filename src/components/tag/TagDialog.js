import React, { Component } from 'react';
import Button from 'material-ui/Button'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
    withMobileDialog,
} from 'material-ui/Dialog';

import {
    getTags,editTag
} from '../../actions/actionCreators'

const Container = styled.div`
    	width: calc(40% - 16px);
    	height: 50px;
	display: inline-block;
	border: 1px solid #ebebeb;
	margin-left: 40px;
	margin-bottom: 8px;
	box-sizing: border-box;
	max-width: 290px;
	cursor: pointer;
	-webkit-animation: fadeinout 4s linear 1 forwards;
	animation: fadeinout 4s linear 1 forwards;
	&:hover {
		background-color: #04B45F;
	}
	@media (max-width: 767px) {
	width: 80%;
	margin-left: 30px;
	margin-right: 20px;
  }
`;

const InContainer = styled.div`
  display:inline-flex;
  margin: 10px;
    width: 100%;
 `;
 const Icon = styled.div`
display: inline-flex;
 font-size: 10px;
 color: ${props => props.color};
`;

 const Textmargin = styled.div`
   font-weight: bold;
    display: inline-flex;
    margin: 1%;
    @media (max-width: 767px) {
	font-size: 10px;
	font-weight: bold;
	 word-wrap: break-word;
  }
`;

class TagDialog extends Component {

    componentWillMount() {
        this.props.getTags();
    }

    constructor(props) {
        super(props)
        this.state = {
            value: true,
            tags:this.props.title,
            free_check: props.price === 0 || props.price === '',
        };

    }

    handleRequestClose=()=>{
        this.setState({
            tags:this.props.title
        });
        this.props.handleRequestClose()
    };

    handleEditTag=()=> {
        let data = {
            tags: []
        }
        for (let tag of this.state.tags) {
            let data_tag = {
                "tag_id": tag.id
            }

            data.tags.push(data_tag);
        }

            this.props.editTag(this.props.id, data);

        this.props.handleRequestClose()
    };


    handleChecked = name => event => {
        this.setState({
            [name]: event.target.checked ,
        });
    };

    pushArrayTag=(tags)=>{
        if (this.checkTagState(tags.title)){
            let tagList = this.state.tags
            let removeTag = tagList.filter(i => i.title !== tags.title)
            this.setState({
                tags: removeTag
            });
        }else {
            this.setState(prevState => ({
                tags: [...prevState.tags, tags]
            }));
        }
    };

    checkTag(tag_title) {
        let chk = false;
        for (let tag of this.props.title){
            if (tag.title === tag_title) {
                chk = true;
            }
        }
        return chk;
    }

    checkTagState(tag_title) {
        let chk = false;

        for (let tag of this.state.tags){
            if (tag.title === tag_title) {
                chk = true;
            }
        }

        return chk;
    }

    render() {
        const { fullScreen } = this.props;
        return (
            <div>
                <Dialog ignorebackdropclick={this.state.value.toString().toLocaleLowerCase()}
                        ignoreescapekeyup={this.state.value.toString().toLocaleLowerCase()}
                        fullScreen={fullScreen}
                        open={this.props.open}
                        onClose={this.props.handleRequestClose}>
                    <DialogTitle>Edit Tag</DialogTitle>
                    <DialogContent>
                                {
                                    this.props.tags.length > 0 ?
                                        this.props.tags.map((tag, index) =>(
                                                    this.checkTag(tag.title) ?
                                                    <Container key={index} onClick={(e) => this.pushArrayTag(tag)}>
                                                        <InContainer>
                                                        <Icon color={this.checkTagState(tag.title) ? '#549635' : 'red'}><i className="material-icons">check_circle</i></Icon>
                                                            <Textmargin>
                                                                {tag.title}
                                                            </Textmargin>
                                                        </InContainer>
                                                    </Container>
                                                        :
                                                    <Container key={index} onClick={(e) => this.pushArrayTag(tag)}>
                                                        <InContainer >
                                                        <Icon color={this.checkTagState(tag.title) ? '#549635' : 'red'} ><i className="material-icons">check_circle</i></Icon>
                                                        <Textmargin>
                                                        {tag.title}
                                                    </Textmargin>
                                                    </InContainer>
                                                    </Container>
                                ))
                                        :
                                        <div>DUN HAVE TAG</div>
                                }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            Cancel
                        </Button>
                        <Button raised onClick={this.handleEditTag}
                                color="primary">
                            Save Tag
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        tags: state.tags,
    }
}

const mapDispatchToProps = {
    getTags: getTags,
    editTag: editTag,
};

TagDialog.propTypes = {
    tags: PropTypes.array.isRequired,
    getTags: PropTypes.func.isRequired,
    editTag: PropTypes.func.isRequired,
    fullScreen: PropTypes.bool.isRequired,
};

TagDialog.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withMobileDialog()(TagDialog));
