import React from "react";

// Import styles
import { Backdrop, ModalVideo, ImgContainer } from "./Styles/modalStyles";

// Import Icons
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";

// Import React Link
import { Link } from "react-router-dom";

const Modal3 = ({ selected, setSelected }) => {
  
  const clickHandle = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };

  return (
    <Backdrop className="backdrop" onClick={clickHandle}>
      <ImgContainer>
        <AiOutlineCloseCircle
          className="svg1"
          onClick={() => setSelected(null)}
        />
        <ModalVideo
          src={selected}
          controls={true}
          autoplay={true}
          muted={false}
        />
        <Link to={selected} download target="_blank">
          <AiOutlineDownload className="svg2" />
        </Link>
      </ImgContainer>
    </Backdrop>
  );
};

export default Modal3;
