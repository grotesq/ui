import React from 'react';
import styled from 'styled/styled';
import { Modal, ModalProps } from 'react-native';

import { resolvePadding } from 'style';

type PopupProps = {
  padding?: Padding;
  modalProps?: ModalProps;
  children: React.ReactNode;
  onClose: () => void;
};
export const Popup = ({
  padding,
  modalProps = {},
  children,
  onClose = () => {},
  ...props
}: PopupProps) => {
  return (
    <Modal
      transparent
      onRequestClose={onClose}
      {...modalProps}
    >
      <Container
        padding={padding}
        {...props}
      >
        {children}
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  ${({ padding }: PopupProps) => resolvePadding(padding)}
`;
