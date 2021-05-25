import React from 'react';
import styled from 'styled-components/native';

import { HorizontalLayout } from 'atom/layout';

type CheckboxProps = {
  label?: string;
  value: boolean;
  onChange: OnChangeCallback<boolean>;
};
export const Checkbox = ({
  label,
  value,
  onChange,
}: CheckboxProps) => {
  return (
    <Container>

    </Container>
  );
};

const Container = styled(HorizontalLayout)`
`;
