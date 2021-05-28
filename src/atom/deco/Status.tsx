import React from 'react';
import styled from 'styled/styled';

interface StatusProps {
  color: string;
  children: React.ReactNode;
};
export const Status = ({
  color = 'grey',
  children,
  ...props
}: StatusProps) => {
  return (
    <Container
      color={color}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.View`
  padding: 10px 5px;

  ${({ color }) => `
    background-color: ${color};
  `}
`;
