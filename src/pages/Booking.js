import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Container, Row } from "../style-js/Grid.style";
import styled from 'styled-components';
import NavBarFooter from "../components/NavBarFooter";
import Footer from "../components/Footer";
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText, FormGroup, } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import {
    DialogContent,
} from 'material-ui/Dialog';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Checkbox from 'material-ui/Checkbox';
import Button from "material-ui/Button";
import ImageSlide from "../components/ImageSlide";
import ConfirmDialog from "../components/shared/ConfirmDialog";
import { getEquipments, getReserves } from "../actions/actionCreators";
import Loading from "../components/Loading";

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
    margin-left: 47%;
`;

const ContentTrip = styled.div`
    margin-left: 5%;
`;

const TextTrip = styled.h3`
    font-weight: 500;
    font-size: 18px;
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
            alert:''
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
        for(let r of this.props.reserve){
            if(r.reserve_date === event.target.value){
                this.setState({
                    alert: 'วันนี้มีคนจองแล้ว'
                })
            }else{
                this.setState({
                    alert:'',
                    date: event.target.value
                })
            }
        }

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

    enableButton() {
        let disabled = true;

        if ((this.state.trip !== '' && this.state.date !== '') && (this.state.adult !== '' && this.state.child !== '')) {
            if (this.state.item !== '' && this.state.alert === '') {
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
    }

    componentWillReceiveProps( nextProps, nextContext ) {
        if(nextProps.equipments !== this.props.equipments ){
            this.setState({
                showLoading: false,
            })
        }
    }

    render() {
        if (this.state.showLoading) return <Loading />;

        const { classes } = this.props;

        const images = [
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2F07396h37wm.jpg?alt=media&token=caa3c512-bd4a-4c8c-9504-dd1fbe62286a' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6516.JPG?alt=media&token=76782bef-9bbe-4379-a21a-77747fcf2ab3' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6517.JPG?alt=media&token=b42bdc15-5c96-4632-ad3e-74e39d1e8fc3' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6519.JPG?alt=media&token=f27bb1e1-c998-427c-86f0-bc76dc4c222c' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6521.JPG?alt=media&token=e06e4e7f-b72b-4ce0-845f-582b0ea1531d' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6524.JPG?alt=media&token=1be34c54-c258-4b1e-ac20-5f9701e7aa1e' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6527.JPG?alt=media&token=d1ab28e5-9a9d-4afa-9ce8-281be0ac101c' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6528.JPG?alt=media&token=e056bf65-d442-4f02-a25f-5b0009c0be95' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6537.JPG?alt=media&token=70663e49-e113-442c-a750-c3978681f9c4' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6542.JPG?alt=media&token=b2905e3d-a055-4a36-b8fb-03403826a411' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6543.JPG?alt=media&token=76f7829d-04af-4508-86fa-cd4875db2f43' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6548.JPG?alt=media&token=aa7a546a-afc6-4a8e-8eaf-502865010a9c' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2FIMG_6554.JPG?alt=media&token=1d996cf4-983d-4691-a4d9-e377f67e0ff2' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2Fn20170505152555_130304.jpg?alt=media&token=c7b9f9de-721a-4a06-b575-da59f88a6c75' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2F%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%881.jpg?alt=media&token=bdc26b93-e0bb-4a6f-9d76-39a1861527b2' },
        ];

        const images2 = [
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2Fck_0097.jpg?alt=media&token=d4f48acd-e64b-4004-ae66-f4a076ace878' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2FIMG_6442.JPG?alt=media&token=96e279b2-06da-4e7c-b0b1-61f8037eec9a' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2FIMG_6451.JPG?alt=media&token=19c94c05-ef20-4a78-96a2-02d943568562' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2FIMG_6455.JPG?alt=media&token=def45b0e-5dfc-4b46-a5f0-54750c148f0e' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2FIMG_6456.JPG?alt=media&token=b0d102fe-9812-4719-ae56-afbe5e334ef7' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2FIMG_6457.JPG?alt=media&token=568b29eb-5a93-4b50-801f-a648783683ff' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2FIMG_6458.JPG?alt=media&token=789f99c2-14c8-4260-8edf-15b3e973011b' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2FIMG_6483.JPG?alt=media&token=efd3d68d-180e-4836-ab7e-283a3a6b7acf' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2Fpic-1499154004369.JPG?alt=media&token=daf69c6d-9479-4887-9f82-4ae97969a3dc' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2F%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%9A%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B9%89%E0%B8%B2%E0%B8%994.jpg?alt=media&token=3c9ef47f-56ae-45fc-9c7b-024909d5f989' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2F%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%882.jpg?alt=media&token=f132f8a7-8d9c-4bcb-9256-0a98260ef7e7' },
        ];

        const image_show = [
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip1%2Fshow1.jpg?alt=media&token=c68b9e9c-88d5-4694-97d0-f8ffce4dfc68' },
        ];

        const image_show2 = [
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/trip2%2FIMG_6471.JPG?alt=media&token=f1186806-af0b-4adf-a76f-ccc59c0b1ab4' },
        ];

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>จองทริปปั่นจักรยาน</TitleDashBoard>
                    <HRLine/>
                    <ContentTrip>
                        <TextTrip>เส้นทางที่ 1</TextTrip>
                        <ImageSlide light_box_image={images} show_image={image_show} height={340}/>
                    </ContentTrip>
                    <ContentTrip>
                        <TextTrip>เส้นทางที่ 2</TextTrip>
                        <ImageSlide light_box_image={images2} show_image={image_show2}/>
                    </ContentTrip>
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
                                    <FormControlLabel value="เส้นทาง 1" control={<Radio/>} label="เส้นทาง 1"/>
                                    <FormControlLabel value="เส้นทาง 2" control={<Radio/>} label="เส้นทาง 2"/>
                                </RadioGroup>
                            </FormControl>
                        </ContentRadio>

                        <ContentDate>
                            <ReserveText>จองวันที่</ReserveText>
                            <DialogContent>
                                <TextField
                                    required
                                    type="date"
                                    id="date-local"
                                    label={this.state.alert !== '' ? this.state.alert : 'Reserve Date'}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleChangeDate}
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
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
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
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
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
                    <ButtonNext onClick={this.handleClickOpenDialog} disabled={this.enableButton()} raised
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
                               trip_date={this.state.date}
                               adult={this.state.adult}
                               child={this.state.child}
                               item={this.state.item}
                               acc_bike={this.state.acc_bike}
                               acc_hat={this.state.acc_hat}
                               acc_suit={this.state.acc_suit}
                               equipments={this.props.equipments}
                />
            </Container>
        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user,
        equipments: state.equipments,
        reserve: state.reserve
    }
}

const mapDispatchToProps = {
    getEquipments: getEquipments,
    getReserves: getReserves
};

Booking.propTypes = {
    classes: PropTypes.object.isRequired,
    getEquipments: PropTypes.func.isRequired,
    getReserves: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Booking));