import React from 'react';
import styled from 'styled/styled';
import { Pressable } from 'react-native';

import { HorizontalLayout, Push, Space } from 'atom/layout';
import { Popup } from './Popup';

type ConfirmProps = {
  title?: string;
  message: string;
  onClose: () => void;
};
export const Confirm = ({
  title,
  message,
  onClose,
}: ConfirmProps) => {
  return (
    <Popup
      onClose={onClose}
    >
      {title && (
        <>
          <TitleText>
            {title}
          </TitleText>
          <Space height={10} />
        </>
      )}
      <MessageText>
        {message}
      </MessageText>
      <Space height={10} />

      <HorizontalLayout>
        <Push />
        <Pressable
          onPress={onClose}
        >
          <ConfirmText>
            확인
          </ConfirmText>
        </Pressable>
      </HorizontalLayout>
    </Popup>
  );
};

const TitleText = styled.Text`
`;
const MessageText = styled.Text`
`;
const ConfirmText = styled.Text`
`;
