import React, { useState, useMemo } from "react";
import {
  Container,
  GalleryWrap,
  Icon,
  GalleryImg,
  GalleryLinks,
  GalleryTextWrapper,
} from "./GalleryElements";
import images from "./images";

const Gallery = () => {
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedImages = useMemo(() => {
    if (filter.sort) {
      return [...images].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return images;
  }, [filter.sort, images]);

  const sortedAndSearchedImages = useMemo(() => {
    return sortedImages.filter((image) => {
      image.key && image.key.toLowerCase().includes(filter.query.toLowerCase());
    });
  }, [filter.query, sortedImages]);

  return (
    <>
      <Container>
        <Icon to="/">Archilovers</Icon>
        <GalleryTextWrapper>
          <GalleryLinks onClick={(e) => setFilter({ ...filter, query: "" })}>
            All
          </GalleryLinks>

          <button
            onClick={(e) => setFilter({ ...filter, query: "residential" })}
          >
            residential
          </button>

          <GalleryLinks
            onClick={(e) => setFilter({ ...filter, query: "residential" })}
          >
            Residential
          </GalleryLinks>
          <GalleryLinks
            onClick={(e) => setFilter({ ...filter, query: "commercial" })}
          >
            Commercial
          </GalleryLinks>
          <GalleryLinks
            onClick={(e) => setFilter({ ...filter, query: "interiors" })}
          >
            Interiors
          </GalleryLinks>
        </GalleryTextWrapper>
        <GalleryWrap>
          {images.map((item, i) => (
            <GalleryImg key={i} src={item.img} />
          ))}
        </GalleryWrap>
      </Container>
    </>
  );
};

export default Gallery;
