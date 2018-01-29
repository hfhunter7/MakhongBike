import React, { Component } from 'react';
import {
	NavBarFooterContainer,
	NavBarFooterRow,
	NavIcon,
	NavItem,
    NavBarFooterRowNoLogin,
    ButtonLogin
} from '../style-js/NavBarFooter.style'

import { connect } from 'react-redux';
import ProfileNavDialog from "./shared/ProfileNavDialog";

class NavBarFooter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open_profile: false,
        };
    }

	handleClick(url) {
		this.props.history.push(url)
	}

    handleClickProfile=()=> {
        this.setState({ open_profile: true });
    }

    handleProfileClick=(url)=>{
    	this.props.history.push(url)
	}

    handleRequestClose=()=>{
    	this.setState({open_profile:false});
	}

	handleClickLogin=()=>{
        this.props.history.push('/login')
	}

	render() {
		const dashboard = this.props.match.path === '/'
		const courses = this.props.match.path === '/courses'
		const cer = this.props.match.path === '/certificates'
		const exam = this.props.match.path === '/exams'
		// const profile = this.props.match.path === '/profile'
		return (
			<NavBarFooterContainer>
				{
					Object.keys(this.props.user).length === 0 ?
						<NavBarFooterRowNoLogin>
						<ButtonLogin raised color="primary" onClick={this.handleClickLogin}>
							Sign in / Register
						</ButtonLogin>
						</NavBarFooterRowNoLogin>
						:
						<NavBarFooterRow>
							<NavItem onClick={this.handleClick.bind(this, '/')} active={dashboard} first><NavIcon active={dashboard} name="description"/></NavItem>
							<NavItem onClick={this.handleClick.bind(this, '/courses')} active={courses}><NavIcon active={courses} name="layers"/></NavItem>
							<NavItem onClick={this.handleClick.bind(this, '/certificates')} active={cer}><NavIcon active={cer} name="card_giftcard"/></NavItem>
							<NavItem onClick={this.handleClick.bind(this, '/exams')} active={exam}><NavIcon active={exam} name="help_outline"/></NavItem>
                                {/*{*/}
                                    {/*this.props.all_cart_item ?*/}
										{/*<Badge badgeContent={this.props.all_cart_item.length} color="accent"><NavIcon active={cart} name="shopping_cart"/></Badge>*/}
                                        {/*:*/}
										{/*<NavIcon active={cart} name="shopping_cart"/>*/}
                                {/*}*/}
							{/*</NavItem>*/}
							<NavItem onClick={this.handleClickProfile}  last><NavIcon  name="menu"/></NavItem>
							<ProfileNavDialog open={this.state.open_profile}
											  handleConfirm={this.handleRemove}
											  handleRequestClose={this.handleRequestClose}
											  handleProfileClick={this.handleProfileClick}
										   iconName="menu"
										   iconColor="black"
										   confirmText="REMOVE"
										   headerText="Menu"
										  />
						</NavBarFooterRow>

				}

			</NavBarFooterContainer>
		);
	}
}

function mapStateToProps(state) {
    return {
        user: state.user,
        all_cart_item: state.all_cart_item
    }
}
export default connect(mapStateToProps, null)(NavBarFooter);

