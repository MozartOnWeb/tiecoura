import React from "react";

import { motion } from "framer-motion";

// Import Custom Hooks
import useFirestore from "../hooks/useFirestore";

// Import InfiniteScroll
import InfiniteScroll from "react-infinite-scroll-component";

// Import Components
import { PhotoWrapper, PhotoImageWrapper } from "./Styles/photoStyles";
import VideoUpload from "../Components/VideoUpload";
import Loader from "../Components/Loader";

// Masonry Grid Styles
import Masonry from "react-masonry-css";

const Video = () => {
  const { docs } = useFirestore("videos");

  const breakPointColumnObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <PhotoWrapper>
        <VideoUpload />
        <InfiniteScroll
          dataLength={docs.length}
          next={docs}
          hasMore="true"
          loader={<Loader />}
          scrollThreshold={0.9}>
          <PhotoImageWrapper>
            <Masonry
              breakpointCols={breakPointColumnObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {docs &&
                docs.map((doc) => (
                  <motion.div key={doc.id} layout>
                    <motion.video
                      src={doc.url}
                      loop
                      muted
                      autoPlay
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}></motion.video>
                  </motion.div>
                ))}
            </Masonry>
          </PhotoImageWrapper>
        </InfiniteScroll>
      </PhotoWrapper>
    </>
  );
};

export default Video;
