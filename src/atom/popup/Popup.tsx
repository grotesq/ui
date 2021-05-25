import React from 'react';
import styled from 'styled-components/native';
import { Modal } from 'react-native';

type PopupProps = {
  children: React.ReactNode;
  onClose: () => void;
};
export const Popup = ({
  children,
  onClose = () => {},
  ...props
}: PopupProps) => {
  return (
    <Modal
      transparent
      onRequestClose={onClose}
    >
      {children}
    </Modal>
  );
};
