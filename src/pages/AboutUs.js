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
    constructor(){
        super();

        this.state = {
            light_box_photos: [
                { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/pic1.jpg?alt=media&token=079885c9-643e-4344-9748-7739c4500e08' },
                { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/pic2.jpg?alt=media&token=f3790c70-5f91-47c9-b56e-60063d6f3a31' },
            ]
        }
    }

    render() {
        const { classes } = this.props;

        const images = [
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam1.jpg?alt=media&token=4ee1c3c6-00ad-4160-81a5-3188ed2547cc' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam2.jpg?alt=media&token=50c781c9-ac18-49eb-9370-c60e3a9e07a8' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam3.jpg?alt=media&token=397f32a0-77c0-49d5-a12c-d02d2001d74a' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam4.jpg?alt=media&token=0d886438-2922-4413-b981-f022e145eec4' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam5.jpg?alt=media&token=cdae63b6-9692-4094-b837-8638f591cfd8' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam6.jpg?alt=media&token=453e207f-aab4-425f-be67-8c331f65bbd6' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam7.jpg?alt=media&token=65b9ea71-b41f-4977-838e-b87231e1671c' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam8.jpg?alt=media&token=689a6426-5138-43a9-a2e3-e3ae933d1e98' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam9.JPG?alt=media&token=47625d66-648a-4dcd-add6-47ea85b348a2' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam10.jpg?alt=media&token=eb070a2b-a872-42f2-893f-a6b791d53d38' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam11.jpg?alt=media&token=08a9f687-1453-473b-9052-bb91b4c2541a' },
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam12.jpg?alt=media&token=de7d58e1-adce-4b5b-8706-1ef56f6d960c' },
        ];

        const image_show = [
            { src: 'https://firebasestorage.googleapis.com/v0/b/maekhongbike.appspot.com/o/team%2Fteam10.jpg?alt=media&token=eb070a2b-a872-42f2-893f-a6b791d53d38' },
        ];

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <TitleDashBoard>ทีมของเรา</TitleDashBoard>
                    <HRLine/>
                    <Content>
                        <ImageSlide light_box_image={images} show_image={image_show}/>
                    </Content>
                    <HRLine/>

                    <div className={classes.root}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <TypographyTextHeader>ประวัติความเป็นมา</TypographyTextHeader>
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
