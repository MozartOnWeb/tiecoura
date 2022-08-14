import React, { useState, useEffect } from "react";

// Import Components
import { PhotoWrapper, PhotoImageWrapper } from "./Styles/photoStyles";

// Import firestore
import { fs } from "../firebase/config";

// Import Framer Motion
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Video = () => {
  const [youtube, setYoutube] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fs.collection("YoutubeVideos").onSnapshot((snap) => {
      const tempYoutube = [];
      snap.forEach((doc) => {
        tempYoutube.push({ ...doc.data(), id: doc.id });
      });
      setYoutube(tempYoutube);
    });

    fs.collection("videos").onSnapshot((snap) => {
      const tempVideos = [];
      snap.forEach((doc) => {
        tempVideos.push({ ...doc.data(), id: doc.id });
      });
      setVideos(tempVideos);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>VIDEOS.</title>
        <meta name="description" content="Les vidéos de Tiecoura N'Daou." />
      </Helmet>
      <PhotoWrapper>
        <PhotoImageWrapper>
          <div className="video">
            {videos &&
              videos.map((video) => (
                <motion.div key={video.id} layout className="single-video">
                  <motion.video
                    src={video.url}
                    autoPlay={false}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    controls={true}
                  />
                </motion.div>
              ))}
            {youtube &&
              youtube.map((tube) => (
                <motion.div key={tube.id} layout className="single-video">
                  <motion.iframe
                    src={tube.url}
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
