import React, { useEffect } from "react";

// Import styled-components
import styled from "styled-components";

// Import Framer Motion
import {motion} from 'framer-motion'

// Import Hooks
import useStorage from "../hooks/useStorage";

const Bar = styled(motion.div)`
  height: 4px;
  background: ${(props) => props.theme.red};
  margin-top: 15px;
`;

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile]);
    
  return <Bar initial={{ width: 0 }} animate={{ width: progress + "%" }}></Bar>;
};

export default ProgressBar;
