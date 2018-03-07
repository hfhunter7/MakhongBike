import React, { Component } from 'react';
import '../App.css';

import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';
import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import PropTypes from 'prop-types';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import HeaderAdmin from '../components/HeaderAdmin';
import { getReserveStat } from '../actions/actionCreators';
import { ContainLoader, Loader } from '../style-js/CertificateLayout.style';


const TitleDashBoard = styled.div`
    font-size: 20px;
    padding-left: 5%;
	padding-right: 120px;
	padding-top: 30px;
	
	@media (max-width: 767px) {
		padding-left: 4%;
		padding-right: 10px;
		padding-top: 20px;
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

const Content = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: -7%;
    display: flex;
    
    @media (max-width: 767px) {
        display: block;
		width: 100%;
		margin: 0;
	}
`;

const ContainerBar = styled.div`
	padding-left: 25%;
    padding-top: 3%;
`;

class ReserveStat extends Component {
	constructor(){
		super();

		this.state = {
			showLoading: true,
			data: []
		}
	}

	componentWillMount() {
		this.props.getReserveStat();
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if(nextProps.reserve_stat !== this.props.reserve_stat){
			this.setState({
				showLoading: false
			})
		}
	}

	render() {
		if (this.state.showLoading)
			return <ContainLoader>
				<Loader
					color={'#0088ff'}
					size={75}
				/>
			</ContainLoader>;

		return (
			<Container>
				<HeaderAdmin {...this.props}/>
				<Row>
					<TitleDashBoard>
						สถิติการจอง
					</TitleDashBoard>
					<HRLine/>
					<Content>
						<ContainerBar>
							<BarChart width={600} height={400} data={this.props.reserve_stat.stat}
							          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
								<XAxis dataKey="date"/>
								<YAxis/>
								<CartesianGrid strokeDasharray="3 3"/>
								<Tooltip/>
								<Legend/>
								<Bar dataKey="ยอดเงินจากการจอง (บาท)" fill="#8884d8"/>
							</BarChart>
						</ContainerBar>
					</Content>
					<Footer/>
				</Row>
				<NavBarFooter {...this.props}/>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		reserve_stat: state.reserve_stat
	}
}

const mapDispatchToProps = {
	getReserveStat: getReserveStat
};

ReserveStat.propTypes = {
	classes: PropTypes.object.isRequired,
	getReserveStat: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ReserveStat);
