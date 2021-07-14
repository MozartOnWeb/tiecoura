import React from "react";

// Import styles
import { Backdrop, ModalVideo, ImgContainer } from "./Styles/modalStyles";

// Import Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

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
      </ImgContainer>
    </Backdrop>
  );
};

export default Modal3;
