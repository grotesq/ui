import React from 'react';
import styled from 'styled/styled';

interface HrProps {
  color: string;
};
export const Hr = ({
  color = 'grey',
  ...props
}: HrProps) => {
  return (
    <Container
      color={color}
      {...props}
    />
  );
};

const Container = styled.View`
  width: 100%;
  height: 1px;

  ${({ color }) => `
    color: ${color};
  `}
`;
