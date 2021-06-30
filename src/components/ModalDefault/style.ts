import styled, { css } from "styled-components";
import Modal from "react-modal";

interface IContainerModal {
  flexDirection?: string;
  isLarge?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
}
//export const ToggleModal = styled(Modal.defaultStyles.overlay)``;

// export const ToggleModal = styled(Modal).attrs<Props>(({  }) => ({
//   overlay: style?.overlay,
// }))<Props>``;

export const ModalContainer = styled.div<IContainerModal>`
  background-color: ${(props) => props.theme.colors.blue};

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.2);
    }
  }

  ${(props) =>
    props.isLarge &&
    css<IContainerModal>`
      max-width: 70%;
      min-width: 20rem;
    `};

  ${(props) =>
    props.isMedium &&
    css<IContainerModal>`
      max-width: 50%;
      min-width: 15rem;
    `};

  ${(props) =>
    props.isSmall &&
    css<IContainerModal>`
      max-width: 30%;
      min-width: 10rem;
    `};
`;

export const ReactModalOverlay = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReactModalContent = styled(Modal)`
  width: 100%;
  max-width: 576px;
  background-color: var(--light);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
`;
