import React, { useEffect } from "react";

// Import styled-components
import styled from "styled-components";

// Import Framer Motion
import { motion } from "framer-motion";

// Import Hooks
import useStorage2 from "../hooks/useStorage2";

const Bar = styled(motion.div)`
  height: 4px;
  background: ${(props) => props.theme.red};
  margin-top: 15px;
`;

const ProgressBar2 = ({ video, setVideo }) => {
  const { url, progress } = useStorage2(video);

  useEffect(() => {
    if (url) {
      setVideo(null);
    }
  }, [url, setVideo]);

  return <Bar initial={{ width: 0 }} animate={{ width: progress + "%" }}></Bar>;
};

export default ProgressBar2;
