import React, { Component } from 'react';
import styled from 'styled-components'

const ListBoxImage = styled.div`
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

class ListBox extends Component {
	render() {
		return (
			<div className="list-box-container" data-id={this.props.id} onClick={this.props.onClick}>
				<div className="list-content">
					<div className="image-list-box">
						<ListBoxImage image_url={this.props.image_url}/>
					</div>
					<div className="detail-list-box">
						<div className="title">
							{ this.props.title }
						</div>
						<div className="trainer-name">
							{ this.props.trainer_name }
						</div>
						<div className="lesson">
							{`${this.props.total_lesson || 0} lessons,`}
						</div>
                        {/*{*/}
                            {/*Object.keys(this.props.user).length !== 0 && this.props.is_buy ?*/}
								{/*<StatusBuy>Purchased</StatusBuy>*/}
                                {/*: <div className="price">*/}
                                    {/*{this.props.price > 0 ? `฿${this.props.price}` : 'Free'}*/}
								{/*</div>*/}
                        {/*}*/}
					</div>
				</div>
			</div>
		);
	}
}
export default ListBox;
