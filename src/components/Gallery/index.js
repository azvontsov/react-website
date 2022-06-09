import React, { useState, useMemo } from "react";
import {
  Container,
  GalleryWrap,
  Icon,
  GalleryImg,
  GalleryBtn,
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
      return (
        image.key &&
        image.key.toLowerCase().includes(filter.query.toLowerCase())
      );
    });
  }, [filter.query, sortedImages]);

  console.log("sorted", sortedImages);
  console.log("sorted&searched", sortedAndSearchedImages);

  return (
    <>
      <Container>
        <Icon to="/">Archilovers</Icon>
        <GalleryTextWrapper>
          <GalleryBtn
            onClick={(e) =>
              setFilter({
                ...filter,
                query: "",
              })
            }
          >
            All
          </GalleryBtn>
          <GalleryBtn
            onClick={(e) => setFilter({ ...filter, query: "residential" })}
          >
            Residential
          </GalleryBtn>
          <GalleryBtn
            onClick={(e) => setFilter({ ...filter, query: "commercial" })}
          >
            Commercial
          </GalleryBtn>
          <GalleryBtn
            onClick={(e) => setFilter({ ...filter, query: "interiors" })}
          >
            Interiors
          </GalleryBtn>
        </GalleryTextWrapper>
        <GalleryWrap>
          {sortedAndSearchedImages.map((item, i) => (
            <GalleryImg key={i} src={item.img} />
          ))}
        </GalleryWrap>
      </Container>
    </>
  );
};

export default Gallery;
