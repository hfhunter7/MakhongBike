import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import styled from 'styled-components';

const ContentGallery = styled(Gallery)`

`;

const ContentLightBox = styled(Lightbox)`

`;

const ContentImage = styled.div`
    margin-left: 10%;
`;

class ImageSlide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImage: 0,
            photos: props.light_box_image,
            show_image: props.show_image
        };
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
        return (
            <ContentImage>
                <ContentGallery photos={this.state.show_image} onClick={this.openLightbox}/>
                <ContentLightBox images={this.state.photos}
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
