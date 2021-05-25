import React from 'react';
import styled from 'styled-components/native';

import { Space, VerticalLayout } from 'atom/layout';

type ComponentListProps = {
  gap?: number;
  data: any[];
  Component: React.FC<any>;
};
export const ComponentList = ({
  gap,
  data,
  Component,
  ...props
}: ComponentListProps) => {
  if (!data) return <></>;

  return (
    <Container
      {...props}
    >
      {data.map(x => (
        <React.Fragment
          key={x?.id}
        >
          <Component
            data={x}
          />
          <Space height={gap} />
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled(VerticalLayout)`
`;
