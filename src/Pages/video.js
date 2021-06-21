import React, { useState, useEffect } from "react";

// Import Components
import { PhotoWrapper, PhotoImageWrapper } from "./Styles/photoStyles";

// Import firestore
import { fs } from "../firebase/config";

// Import Framer Motion
import { motion } from "framer-motion";

// Import InfiniteScroll
import InfiniteScroll from "react-infinite-scroll-component";

import Loader from "../Components/Loader";

// Masonry Grid Styles
import Masonry from "react-masonry-css";

const Video = () => {
  const [videos, setVideos] = useState([]);

  const fetchMore = () => {
    fs.collection("YoutubeVideos").onSnapshot((snap) => {
      const tempVideos = [];
      snap.forEach((doc) => {
        tempVideos.push({ ...doc.data(), id: doc.id });
      });
      setVideos(tempVideos);
    });
  };

  useEffect(() => {
    fetchMore();
  }, []);

  // Masonry BreakPoint Settings
  const breakPointColumnObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <PhotoWrapper>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchMore}
          hasMore="true"
          loader={<Loader />}
          scrollThreshold={1}>
          <PhotoImageWrapper>
            <Masonry
              breakpointCols={breakPointColumnObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {videos &&
                videos.map((video) => (
                  <motion.div key={video.name} layout>
                    <motion.iframe
                      src={video.url}
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
    </>
  );
};

export default Video;
