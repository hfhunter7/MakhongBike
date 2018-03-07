import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';
import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import PropTypes from 'prop-types';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText, FormGroup, } from 'material-ui/Form';
import {
    DialogContent,
} from 'material-ui/Dialog';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Checkbox from 'material-ui/Checkbox';
import Button from "material-ui/Button";
import ConfirmDialog from "../components/shared/ConfirmDialog";
import { getAllReserves, getEquipments, getReserves, getTrips, getUrlTrips } from "../actions/actionCreators";
import { ContainLoader, Loader } from "../style-js/CertificateLayout.style";

import { ButtonContainer, ButtonMoreImage, PreviewImage } from "../style-js/CourseDetail.style";
import DialogImage from "../components/shared/DialogImage";

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const TitleDashBoard = styled.div`
    font-size: 20px;
    padding-left: 5%;
	padding-right: 120px;
	padding-top: 40px;
	
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
    display: flex;
    @media (max-width: 767px) {
        display: block;
		width: 100%;
		margin: 0;
	}
`;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '3%',
        marginLeft: '1%'
    },
    formControls: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    rootTypo: {
        width: '90%',
        marginLeft: '5%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

const ContentRadio = styled.div`
    margin-top: 2%;
`;

const ContentDate = styled.div`
    margin-left: 2%;
    margin-top: 3.5%;
`;

const ReserveText = styled.h4`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2%;
    margin-top: 1%;
    margin-left: 5%;
`;

const HRLineBTM = styled.hr`
    margin-left: 5%;
    max-width: 90%;
    color: ghostwhite;
`;

const ContentReserveItem = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
`;

const ContentCheckBox = styled.div`
    margin-top: 2%;
`;

const ButtonNext = styled(Button)`
    display: block;
    margin-left: 47% !important;
`;

const TypographyText = styled(Typography)`
    font-size: 18px !important;
`;

const TypographyTextHeader = styled(Typography)`
    font-size: 20px;
    font-weight: 500;
`;

class Booking extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            child: '',
            adult: '',
            name: 'hai',
            bike: false,
            hat: false,
            suit: false,
            date: '',
            trip: '',
            item: '',
            acc_bike: '',
            acc_hat: '',
            acc_suit: '',
            openDialog: false,
            showLoading: true,
            alert: '',
            images: [],
            openImageDialog: false,
            trip_id: '',
            previous_day: false,
            alert_date: '',
            today: new Date(),
            selectedDay: '',
            startDate: moment(),
            reserved: []
        }
    }

    handleChange = ( key ) => {
        return ( event ) => {
            this.setState({ [key]: event.target.value });
        }
    };

    handleChangeSelect = ( key ) => {
        return ( event ) => {
            this.setState({ [key]: event.target.value });
        }
    };

    handleChangeDate = ( event ) => {
        const startDate = new Date();

        if (Date.parse(event.target.value) - Date.parse(startDate) < 0) {
            console.log('previous day')
            this.setState({
                previous_day: false,
                alert_date: 'ไม่สามารถเลือกวันย้อนหลังได้'
            })
        } else {
            console.log('present day' + event.target.value)
            this.setState({
                previous_day: true,
                alert_date: ''
            })
        }

        for (let r of this.props.reserve_all) {
            if (r.reserve_date === event.target.value) {
                this.setState({
                    alert: 'วันนี้มีคนจองแล้ว'
                })
                break;
            } else {
                this.setState({
                    alert: '',
                    date: event.target.value
                })
            }
        }

    };

    handleChangeDatePicker = ( date ) => {
        const date_now = date._d.toLocaleDateString();

        const date_split = date_now.split('/');

        let date_data;

	    date_data = date_split[2] + '-' + date_split[0] + '-' + date_split[1];

        console.log(date_data);
        this.setState({
            startDate: date,
            selectedDay: date_data
        })
    };

    handleChangeCheckBox = ( name, key ) => ( event ) => {
        this.setState({
            [name]: event.target.checked,
            [key]: event.target.checked ? event.target.value : ''
        });
    };

    handleClickOpenDialog = () => {
        this.setState({
            openDialog: true
        })
    };

    handleRequestCloseDialog = () => {
        this.setState({
            openDialog: false,
        });
    };

    CloseDialog = ( key ) => {
        return () => {
            this.setState({
                [key]: false,
                trip_id: '',
                images: []
            })
        }
    };

    openDialog = ( key, trip_id, images ) => {
        return () => {
            this.setState({
                [key]: true,
                trip_id: trip_id,
                images: images
            })
        }
    };

    enableButton() {
        let disabled = true;

        if ((this.state.trip !== '' && this.state.selectedDay) && this.state.adult !== '') {
            if ((this.state.item !== '' && this.state.alert === '')) {
                disabled = false;
            }
        }

        return disabled;
    };

    handleCheckReserve = () => {
        let disabled = false;

        if (this.state.item === 'นำอุปกรณ์มาเอง') {
            disabled = true;
        }

        return disabled;
    };

    componentWillMount() {
        this.props.getEquipments();
        this.props.getReserves();
        this.props.getTrips();
        this.props.getAllReserves();
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        if (nextProps.reserve_all !== this.props.reserve_all) {
            const a = [];
            let b = [];
            for(let data of nextProps.reserve_all){
                a.push(data.reserve_date.split('-'))

            }
            let is_data;
            let arr;
            for(let d of a){

                for(let i = 0 ; i< d.length ; i++){
                    arr = [];
                    if(i < 3){
                        arr.push(parseInt(d[0] , 0) , (parseInt(d[1] , 0) - 1), parseInt(d[2] , 0));
                    }

                }
                b.push(arr)
                is_data = moment(b);
                this.setState({
                    reserved: this.state.reserved.concat(is_data)
                })
            }

            console.log(b)


            this.setState({
                showLoading: false,
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

        const { classes } = this.props;

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>จองทริปปั่นจักรยาน</TitleDashBoard>
                    <HRLine/>

                    {
                        this.props.trip.map(( trip, index ) => {
                            return <div className={classes.rootTypo} key={index}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                        <TypographyTextHeader>{trip.trip_name}</TypographyTextHeader>
                                    </ExpansionPanelSummary>
                                    <PreviewImage>
                                        <img src={trip.image_url} alt=""/>
                                    </PreviewImage>
                                    <ExpansionPanelDetails>
                                        <TypographyText>
                                            {trip.description}
                                        </TypographyText>
                                    </ExpansionPanelDetails>
                                    <ButtonContainer>
                                        <ButtonMoreImage
                                            variant="raised"
                                            color="primary"
                                            onClick={this.openDialog('openImageDialog', trip.id, trip.trip_images)}
                                        >
                                            ดูรูปภาพเพิ่มเติม
                                        </ButtonMoreImage>
                                    </ButtonContainer>
                                </ExpansionPanel>
                            </div>
                        })
                    }

                    <Content>
                        <ContentRadio>
                            <FormControl component="fieldset" required className={classes.formControl}>
                                <FormLabel component="legend">เส้นทาง</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    name="gender1"
                                    className={classes.group}
                                    value={this.state.trip}
                                    onChange={this.handleChange('trip')}
                                >
                                    {
                                        this.props.trip.length > 0 &&
                                        this.props.trip.map(( trip, index ) => {
                                            return <FormControlLabel
                                                key={index}
                                                value={trip.trip_name}
                                                control={<Radio/>}
                                                label={trip.trip_name}
                                            />
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                        </ContentRadio>

                        <ContentDate>
                            <ReserveText>วันที่จอง</ReserveText>
                            <DialogContent>
                                <DatePicker
                                    dateFormat="YYYY-MM-DD"
                                    selected={this.state.startDate}
                                    onChange={this.handleChangeDatePicker}
                                    minDate={moment()}
                                    withPortal
                                    disabledKeyboardNavigation
                                    excludeDates={this.state.reserved[0]._i}
                                />
                            </DialogContent>
                        </ContentDate>

                        <form className={classes.container} autoComplete="off">
                            <FormControl className={classes.formControls}>
                                <InputLabel htmlFor="age-simple">ผู้ใหญ่</InputLabel>
                                <Select
                                    value={this.state.adult}
                                    onChange={this.handleChangeSelect('adult')}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControls}>
                                <InputLabel htmlFor="age-simple">เด็ก</InputLabel>
                                <Select
                                    value={this.state.child}
                                    onChange={this.handleChangeSelect('child')}
                                >
                                    <MenuItem value={0}>ไม่เลือก</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </Content>

                    <HRLineBTM/>

                    <ContentReserveItem>
                        <ReserveText>จองอุปกรณ์</ReserveText>
                        <ContentRadio>
                            <FormControl component="fieldset" required className={classes.formControl}>
                                <FormLabel component="legend">อุปกรณ์</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    name="gender1"
                                    className={classes.group}
                                    value={this.state.item}
                                    onChange={this.handleChange('item')}
                                >
                                    <FormControlLabel value="นำอุปกรณ์มาเอง" control={<Radio/>} label="นำอุปกรณ์มาเอง"/>
                                    <FormControlLabel value="เช่าอุปกรณ์" control={<Radio/>} label="เช่าอุปกรณ์"/>
                                </RadioGroup>
                            </FormControl>
                        </ContentRadio>

                        <ContentCheckBox>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Accessory</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        disabled={this.handleCheckReserve()}
                                        control={
                                            <Checkbox
                                                value="จักรยาน"
                                                checked={this.state.bike}
                                                onChange={this.handleChangeCheckBox('bike', 'acc_bike')}
                                            />
                                        }
                                        label="จักรยาน"
                                    />
                                    <FormControlLabel
                                        disabled={this.handleCheckReserve()}
                                        control={
                                            <Checkbox
                                                value="หมวก"
                                                checked={this.state.hat}
                                                onChange={this.handleChangeCheckBox('hat', 'acc_hat')}
                                            />
                                        }
                                        label="หมวก"
                                    />
                                    <FormControlLabel
                                        disabled={this.handleCheckReserve()}
                                        control={
                                            <Checkbox
                                                value="ชุด"
                                                checked={this.state.suit}
                                                onChange={this.handleChangeCheckBox('suit', 'acc_suit')}
                                            />
                                        }
                                        label="ชุด"
                                    />
                                </FormGroup>
                                <FormHelperText>Be careful</FormHelperText>
                            </FormControl>
                        </ContentCheckBox>
                    </ContentReserveItem>
                    <ButtonNext onClick={this.handleClickOpenDialog} disabled={this.enableButton()} variant="raised"
                                color="primary">Next</ButtonNext>
                    <HRLineBTM/>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
                <ConfirmDialog open={this.state.openDialog}
                               handleRequestClose={this.handleRequestCloseDialog}
                               confirmText="OK"
                               headerText="สรุปการจอง"
                               trip={this.state.trip}
                               trip_date={this.state.selectedDay}
                               adult={this.state.adult}
                               child={this.state.child}
                               item={this.state.item}
                               acc_bike={this.state.acc_bike}
                               acc_hat={this.state.acc_hat}
                               acc_suit={this.state.acc_suit}
                               equipments={this.props.equipments}
                />
                <DialogImage open={this.state.openImageDialog}
                             handleRequestClose={this.CloseDialog('openImageDialog')}
                             confirmText="ok"
                             headerText="รูปภาพในทริป"
                             trip_images={this.state.images}
                />
            </Container>

        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user,
        equipments: state.equipments,
        reserve: state.reserve,
        trip: state.trip,
        trip_image_url: state.trip_image_url,
        reserve_all: state.reserve_all
    }
}

const mapDispatchToProps = {
    getEquipments: getEquipments,
    getReserves: getReserves,
    getTrips: getTrips,
    getUrlTrips: getUrlTrips,
    getAllReserves: getAllReserves
};

Booking.propTypes = {
    classes: PropTypes.object.isRequired,
    getEquipments: PropTypes.func.isRequired,
    getReserves: PropTypes.func.isRequired,
    getTrips: PropTypes.func.isRequired,
    getUrlTrips: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Booking));