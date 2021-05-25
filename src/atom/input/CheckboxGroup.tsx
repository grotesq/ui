import React from 'react';
import styled from 'styled-components/native';

import { Checkbox } from './Checkbox';

type CheckboxGroupProps = {
  items: LabelValue[];
  value: any;
  onChange: OnChangeCallback;
};
export const CheckboxGroup = ({
  items,
  value,
  onChange,
}: CheckboxGroupProps) => {
  return (
    <Container>
      {items.map(x => (
        <Checkbox
          label={x.label}
          value={value === x.value}
          onChange={() => onChange(x.value)}
        />
      ))}
    </Container>
  );
};

const Container = styled.View`
`;
