import React from "react";
import {
  Container,
  GalleryWrap,
  GalleryContent,
  Icon,
  GalleryImg,
} from "./GalleryElements";
import images from "./images";

const Gallery = () => {
  return (
    <>
      <Container>
        <GalleryWrap>
          <Icon to="/">Archilovers</Icon>
          <GalleryContent>
            {images.map((item, i) => (
              <GalleryImg key={i} title={item.title} content={item.content} />
            ))}
          </GalleryContent>
        </GalleryWrap>
      </Container>
    </>
  );
};

export default Gallery;
