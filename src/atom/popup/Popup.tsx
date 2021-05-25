import React from 'react';
import styled from 'styled/styled';
import { Modal } from 'react-native';

import { resolvePadding } from 'style';

type PopupProps = {
  padding?: Padding;
  children: React.ReactNode;
  onClose: () => void;
};
export const Popup = ({
  padding,
  children,
  onClose = () => {},
  ...props
}: PopupProps) => {
  return (
    <Modal
      transparent
      onRequestClose={onClose}
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
  ${({ padding }) => resolvePadding(padding)}
`;
