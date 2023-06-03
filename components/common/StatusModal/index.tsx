import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";
import { Modal, Typography } from "@mui/material";
import { StyledBox } from "./styles";

interface StatusModalProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  handleClose?: () => void;
  toggleModal: boolean;
}

const StatusModal: React.FC<StatusModalProps> = ({
  children,
  handleClose,
  toggleModal,
}) => {
  return (
    <Modal open={toggleModal} onClose={handleClose}>
      <StyledBox>{children}</StyledBox>
    </Modal>
  );
};

export default StatusModal;
