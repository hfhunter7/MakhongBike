import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import styled from 'styled-components';

import ImageOne from "../image/homepage/pic1.jpg";
import ImageTwo from "../image/homepage/pic2.jpg";

const ContentGallery = styled(Gallery)`

`;

const ContentLightBox = styled(Lightbox)`

`;

const ContentImage = styled.div`
    margin-left: 10%;
`;

class ImageSlide extends Component {
    constructor() {
        super();

        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        const light_box_photos = [
            { src: ImageOne },
            { src: ImageTwo },
        ];

        const homepage_photos = [
            { src: ImageOne },
        ];

        return (
            <ContentImage>
                <ContentGallery photos={homepage_photos} onClick={this.openLightbox}/>
                <ContentLightBox images={light_box_photos}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                />
            </ContentImage>
        );
    }
}

ImageSlide.defaultProps = {};

export default ImageSlide;
