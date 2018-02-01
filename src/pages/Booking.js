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
        marginTop: '18px'
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
    
`;

const ContentDate = styled.div`
    
`;

const ReserveText = styled.h4`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2%;
    margin-top: 1%;
    margin-left: 10%;
`;

const HRLineBTM = styled.hr`
    margin-left: 5%;
    max-width: 90%;
    color: ghostwhite;
    margin-top: 2%;
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

class Booking extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            age: '',
            name: 'hai',
            gilad: true,
            jason: false,
            antoine: true,
        }
    }

    handleChange = ( event, value ) => {
        this.setState({ value });
    };

    handleChangeSelect = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleChangeCheckBox = name => ( event, checked ) => {
        this.setState({ [name]: checked });
    };

    render() {
        const { classes } = this.props;

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>จองทริปปั่นจักรยาน</TitleDashBoard>
                    <HRLine/>
                    <Content>
                        <ContentRadio>
                            <FormControl component="fieldset" required className={classes.formControl}>
                                <FormLabel component="legend">เส้นทาง</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    name="gender1"
                                    className={classes.group}
                                    value={this.state.value}
                                    onChange={this.handleChange}
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
                                    label="birthday"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </DialogContent>
                        </ContentDate>
                        <form className={classes.container} autoComplete="off">
                            <FormControl className={classes.formControls}>
                                <InputLabel htmlFor="age-simple">ผู้ใหญ่</InputLabel>
                                <Select
                                    value={this.state.age}
                                    onChange={this.handleChangeSelect}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControls}>
                                <InputLabel htmlFor="age-simple">เด็ก</InputLabel>
                                <Select
                                    value={this.state.age}
                                    onChange={this.handleChangeSelect}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
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
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel value="1" control={<Radio/>} label="นำอุปกรณ์มาเอง"/>
                                    <FormControlLabel value="2" control={<Radio/>} label="เช่าอุปกรณ์"/>
                                </RadioGroup>
                            </FormControl>
                        </ContentRadio>

                        <ContentCheckBox>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Accessory</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="gilad"
                                            />
                                        }
                                        label="จักรยาน"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="jason"
                                            />
                                        }
                                        label="หมวก"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="antoine"
                                            />
                                        }
                                        label="ชุด"
                                    />
                                </FormGroup>
                                <FormHelperText>Be careful</FormHelperText>
                            </FormControl>
                        </ContentCheckBox>
                    </ContentReserveItem>
                    <ButtonNext raised color="primary">Next</ButtonNext>
                    <HRLineBTM/>
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {};

Booking.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Booking));