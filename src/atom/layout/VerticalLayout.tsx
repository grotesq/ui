import React from 'react';
import styled from 'styled-components/native';

type VerticalLayoutProps = {
  fill?: boolean;
  children: React.ReactNode;
};
export const VerticalLayout = ({
  fill = false,
  children,
  ...props
}: VerticalLayoutProps) => {
  return (
    <Container
      fill={fill}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.View<Partial<VerticalLayoutProps>>`
  flex-direction: column;

  ${({ fill }) => fill ? `
    flex: 1;
  ` : `
  `}
`;
