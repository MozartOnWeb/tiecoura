import React, { useState, useEffect } from "react";

// Import Components
import { PhotoWrapper, PhotoImageWrapper } from "./Styles/photoStyles";

// Import firestore
import { fs } from "../firebase/config";

// Import Framer Motion
import { motion } from "framer-motion";

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
        <PhotoImageWrapper>
          <div className="video">
            {videos &&
              videos.map((video) => (
                <motion.div key={video.timestamp} layout>
                  <motion.iframe
                    src={video.url}
                    alt="uploded_image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  />
                </motion.div>
              ))}
          </div>
        </PhotoImageWrapper>
      </PhotoWrapper>
    </>
  );
};

export default Video;
