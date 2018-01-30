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
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ImageSlide from "../components/ImageSlide";
import President from "../image/president.JPG";

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
    display: block;
    width: 90%;
    @media (max-width: 767px) {
        display: block;
		width: 100%;
		margin: 0;
	}
`;

const ContentPresident = styled.div`
    text-align: center;
    margin-bottom: 1%;
`;

const styles = theme => ({
    root: {
        width: '90%',
        marginLeft: '5%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

const TypographyText = styled(Typography)`
    font-size: 16px;
`;

const TypographyTextHeader = styled(Typography)`
    font-size: 18px;
    font-weight: 500;
`;

class AboutUs extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>เกี่ยวกับเรา</TitleDashBoard>
                    <HRLine/>
                    <Content>
                        <ImageSlide />
                    </Content>
                    <HRLine/>

                    <div className={classes.root}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <TypographyTextHeader>ประวัติความเป็นมา Jumbo</TypographyTextHeader>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <TypographyText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </TypographyText>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <TypographyTextHeader>วิสัยทัศน์</TypographyTextHeader>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <TypographyText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </TypographyText>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <TypographyTextHeader>ประธานชมรม</TypographyTextHeader>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <TypographyText>
                                    <ContentPresident>
                                        <img src={President} alt=""/>
                                    </ContentPresident>

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </TypographyText>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>

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

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AboutUs));
