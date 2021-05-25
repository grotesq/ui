import React from 'react';
import styled from 'styled-components/native';

import { Space } from 'atom/layout';
import { Checkbox } from './Checkbox';

type CheckboxGroupProps = {
  gap?: number;
  items: LabelValue[];
  value: any;
  onChange: OnChangeCallback;
};
export const CheckboxGroup = ({
  gap = 10,
  items,
  value,
  onChange,
}: CheckboxGroupProps) => {
  return (
    <Container>
      {items.map(x => (
        <React.Fragment
          key={x.value}
        >
          <Checkbox
            label={x.label}
            value={value === x.value}
            onChange={() => onChange(x.value)}
          />
          <Space width={gap} />
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.View`
`;
