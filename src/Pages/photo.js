import React, { useState, useEffect } from "react";

// Import InfiniteScroll
import InfiniteScroll from "react-infinite-scroll-component";

// Import Axios
import axios from "axios";

// Import Components
import { PhotoWrapper, PhotoImageWrapper } from "./Styles/photoStyles";
import Loader from "../Components/Loader";

import Masonry from "react-masonry-css";

const Photo = () => {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "bvhHxrgccAB4jufk0o9CqMxbOwlckaxzatf22rZNZS8";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=4`)
      .then((res) => setImages([...images, ...res.data]));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchImages();
    }, 2000);
  }, []);

  const breakPointColumnObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <>
        <PhotoWrapper>
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore="true"
            loader={<Loader />}>
            <PhotoImageWrapper>
              <Masonry
                breakpointCols={breakPointColumnObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {images.map(({ urls, alt_description,id }) => {
                  return (
                    <div key={id}>
                      <img src={urls.thumb} alt={alt_description} key={id} />
                    </div>
                  );
                })}
              </Masonry>
            </PhotoImageWrapper>
          </InfiniteScroll>
        </PhotoWrapper>
      </>
    </>
  );
};

export default Photo;
