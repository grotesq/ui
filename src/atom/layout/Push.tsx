import React from 'react';
import styled from 'styled-components/native';

type PushProps = {
  children: React.ReactNode;
};
export const Push = ({
  children,
  ...props
}: PushProps) => {
  return (
    <Container
      {...props}
    />
  );
};

const Container = styled.View`
  flex: 1;
`;
