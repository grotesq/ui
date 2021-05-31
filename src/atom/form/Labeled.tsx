import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled/styled';

import { Space } from 'atom/layout';

interface LabeledProps {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  gap?: number;
  children: React.ReactNode;
};
export const Labeled = ({
  label,
  labelStyle,
  gap = 8,
  children,
  ...props
}: LabeledProps) => {
  return (
    <Container
      {...props}
    >
      <Label
        style={labelStyle}
      >
        {label}
      </Label>
      <Space height={gap} />
      {children}
    </Container>
  )
};

const Container = styled.View`
`;
const Label = styled.Text`
`;
