import React, { Component } from 'react';
import Header from '../components/Header';
import NavBarFooter from '../components/NavBarFooter';
import Footer from '../components/Footer';
import { Container, Row } from '../style-js/Grid.style'
import CertificateIcon from '../image/icon/certificate_icon.png'
import {
    CertificateEmptyContainer,
    CertificateEmptyTitle,
    IconEmpty,
    CertificateEmptySubTitle,
    ButtonCertificateEmpty,
} from '../style-js/CertificateLayout.style'

const certificate = [];
class Certificates extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Row>
                    {
                        certificate.length > 0 ?
                            <div>HAVE Certificate</div>
                            :
                            <CertificateEmptyContainer>
                                <IconEmpty><img src={CertificateIcon} alt=""/></IconEmpty>
                                <CertificateEmptyTitle>
                                    No course certificate
                                </CertificateEmptyTitle>
                                <CertificateEmptySubTitle>
                                    Create your course certificate for students once they complete the course.
                                </CertificateEmptySubTitle>
                                <ButtonCertificateEmpty>
                                    CREATE CERTIFICATE
                                </ButtonCertificateEmpty>
                            </CertificateEmptyContainer>
                    }
                    <Footer/>
                </Row>
                <NavBarFooter {...this.props}/>
            </Container>
        );
    }
}

Certificates.defaultProps = {};

export default Certificates;
