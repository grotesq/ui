import React from 'react';
import styled from 'styled-components';

import { HorizontalLayout } from 'atom/layout';

type CounterProps = {
  value: number;
  formatter?: NumberFormatter;
  onChange: (x: number) => void;
};
export const Counter = ({
  value,
  formatter = DefaultFormatter,
  onChange,
  ...props
}: CounterProps) => {
  return (
    <Container
      {...props}
    >
      {formatter(value)}
    </Container>
  );
};

const Container = styled(HorizontalLayout)`
`;
