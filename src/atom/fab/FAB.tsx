import React from 'react';
import styled from 'styled-components/native';

export enum FABPosition {
  BottomRight = 'bottom_right',
  BottomLeft = 'bottom_left',
};

type FABProps = {
  size?: number;
  position?: FABPosition;
  distance?: number;
  children: React.ReactNode;
};
export const FAB = ({
  size = 40,
  position = FABPosition.BottomRight,
  distance = 40,
  children,
  ...props
}: FABProps) => {
  return (
    <Container
      size={size}
      position={position}
      distance={distance}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.View<Partial<FABProps>>`
  position: absolute;
  z-index: 1000;

  ${({ size }: FABProps) => `
    width: ${size}px;
    height: ${size}px;
  `}
  ${({ position, distance }: FABProps) => {
    return {
      [FABPosition.BottomRight]: `
        right: ${distance}px;
        bottom: ${distance}px;
      `,
      [FABPosition.BottomLeft]: `
        left: ${distance}px;
        bottom: ${distance}px;
      `,
    }[position!];
  }}
`;
