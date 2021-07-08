import React from "react";

// Import styles
import { Backdrop, ModalImg, ImgContainer } from "./Styles/modalStyles";


// Import Icons
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";

// Import React Link
import { Link } from "react-router-dom";

const Modal2 = ({ selected, setSelected }) => {
  const clickHandle = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };

  return (
    <Backdrop className="backdrop" onClick={clickHandle}>
      <ImgContainer>
        <AiOutlineCloseCircle
          onClick={() => setSelected(null)}
          className="svg1"
        />
        <ModalImg src={selected} alt="" />
        <Link to={selected} download target="_blank">
          <AiOutlineDownload className="svg2" />
        </Link>
      </ImgContainer>
    </Backdrop>
  );
};

export default Modal2;
