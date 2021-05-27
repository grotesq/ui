import React from 'react';
import styled from 'styled/styled';
import { Modal, ModalProps } from 'react-native';

import { FadeInView } from 'atom/animated';
import { FadeInAnimator, mix } from 'animator';
import { resolveMargin, resolvePadding } from 'style';

type PopupProps = {
  padding?: Padding;
  modalProps?: ModalProps;
  children: React.ReactNode;
  onClose: () => void;
};
export const Popup = ({
  padding = 15,
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
      <Backdrop>
        <Container
          animator={FadeInAnimator.Scale}
          padding={padding}
          {...props}
        >
          {children}
        </Container>
      </Backdrop>
    </Modal>
  );
};

const Backdrop = styled(FadeInView)`
  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0, 0.3);
`;
const Container = styled(FadeInView)`
  background-color: white;
  border-radius: 10px;

  ${resolveMargin('auto')}
  ${({ padding }: PopupProps) => resolvePadding(padding)}
`;
