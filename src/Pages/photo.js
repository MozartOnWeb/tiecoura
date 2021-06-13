import React, { useState, useEffect } from "react";

// Import Framer Motion
import { motion } from "framer-motion";

// Import Link
import { NavLink, useRouteMatch } from "react-router-dom";

// Import firestore
import { fs } from "../firebase/config";

// Import InfiniteScroll
import InfiniteScroll from "react-infinite-scroll-component";

// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Components
import {
  PhotoWrapper,
  SeriesName,
  SingleName,
  PhotoImageWrapper,
  SerieInfo,
} from "./Styles/photoStyles";
import Loader from "../Components/Loader";

// Masonry Grid Styles
import Masonry from "react-masonry-css";

const Photo = () => {
  const [serieName, setSerieName] = useState([]);
  const [images, setImages] = useState([]);
  const [serieDesc, setSerieDesc] = useState("");

  const match = useRouteMatch("/photo/:serie");
  const { serie } = match.params;

  useEffect(() => {
    fs.collection("series").onSnapshot((snapshot) => {
      const tempNames = [];
      snapshot.forEach((doc) => {
        tempNames.push({ ...doc.data(), id: doc.id });
      });
      setSerieName(tempNames);
    });
  }, []);

  useEffect(() => {
    fs.collection("series")
      .doc(serie)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setImages(doc.data().images || []);
          setSerieDesc(doc.data().desc);
        }
      });
  }, [serie]);

  // Slider Settings
  const setting = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplay: false,
    fade: false,
    arrows: true,
  };

  // Masonry BreakPoint Settings
  const breakPointColumnObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <SeriesName>
        <Slider {...setting}>
          {serieName.map((serie) => (
            <SingleName key={serie.id}>
              <NavLink activeClassName="active" to={`/photo/${serie.id}`}>
                {serie.name}
              </NavLink>
            </SingleName>
          ))}
        </Slider>
      </SeriesName>

      <PhotoWrapper>
        <InfiniteScroll
          dataLength={images.length}
          next={images}
          hasMore="true"
          loader={<Loader />}
          scrollThreshold={1}>
          <PhotoImageWrapper>
            <Masonry
              breakpointCols={breakPointColumnObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {images &&
                images.map((image) => (
                  <motion.div key={image.name} layout>
                    <motion.img
                      src={image.url}
                      alt="uploded_image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    />
                  </motion.div>
                ))}
            </Masonry>
          </PhotoImageWrapper>
        </InfiniteScroll>
      </PhotoWrapper>
      <SerieInfo> {serieDesc} </SerieInfo>
    </>
  );
};

export default Photo;
