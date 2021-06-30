import React from "react";
import Modal from "react-modal";
import { ModalContainer } from "./style";

import closeImg from "../../assets/images/close.svg";

interface IModalProps {
  isOpenModal?: boolean;
  isCloseModal?: () => void;
  children?: React.ReactNode;
  isLarge?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
}

const ModalDefault: React.FC<IModalProps> = ({ children, ...props }) => {
  Modal.setAppElement("#root");
  return (
    <ModalContainer
      isLarge={props.isLarge}
      isMedium={props.isMedium}
      isSmall={props.isSmall}
    >
      <Modal
        isOpen={props.isOpenModal ? props.isOpenModal : false}
        onRequestClose={props.isCloseModal}
        overlayClassName={"react-modal-overlay"}
        className={"react-modal-content"}
      >
        <button
          type={"button"}
          onClick={props.isCloseModal}
          className={"react-modal-close"}
        >
          <img src={closeImg} alt={"Bottom Close"} />
        </button>
        {children}
      </Modal>
    </ModalContainer>
  );
};

export { ModalDefault };
