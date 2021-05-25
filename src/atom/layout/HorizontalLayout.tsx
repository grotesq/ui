import React from 'react';
import styled from 'styled-components/native';

type HorizontalLayoutProps = {
  fill?: boolean;
  children: React.ReactNode;
};
export const HorizontalLayout = ({
  fill = false,
  children,
  ...props
}: HorizontalLayoutProps) => {
  return (
    <Container
      fill={fill}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.View<Partial<HorizontalLayoutProps>>`
  flex-direction: row;

  ${({ fill }: HorizontalLayoutProps) => fill ? `
    flex: 1;
  ` : `
  `}
`;
