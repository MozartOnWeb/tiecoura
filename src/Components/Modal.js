import React from 'react'

// Import styles
import { Backdrop, ModalImg } from "./Styles/modalStyles";

const Modal = ({selected}) => {
    return (
      <Backdrop>
        <ModalImg src={selected} alt="" />
      </Backdrop>
    );
}

export default Modal
