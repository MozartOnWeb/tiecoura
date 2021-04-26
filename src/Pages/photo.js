import React from "react";

import { motion } from "framer-motion";


// Import Custom Hooks
import useFirestore from "../hooks/useFirestore";

// Import InfiniteScroll
import InfiniteScroll from "react-infinite-scroll-component";

// Import Components
import { PhotoWrapper, PhotoImageWrapper } from "./Styles/photoStyles";
import ImageUpload from "../Components/ImageUpload";
import Loader from "../Components/Loader";

// Masonry Grid Styles
import Masonry from "react-masonry-css";

const Photo = () => {
  const { docs } = useFirestore("images");

  // useEffect(() => {
  //   setTimeout(() => {
  //     docs;
  //   }, 2000);
  // }, []);

  const breakPointColumnObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <PhotoWrapper>
        <ImageUpload />
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
                    <motion.img
                      src={doc.url}
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

export default Photo;
