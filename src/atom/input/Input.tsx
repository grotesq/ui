import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { formatPhone } from 'format';

export const InputKind = {
  None: 'none',
  Phone: 'phone',
} as const;

interface InputProps extends Omit<TextInputProps, 'onChange'> {
  kind?: ValuesOf<typeof InputKind>;
  onChange: OnChangeCallback<string>;
};
export const Input = ({
  kind = InputKind.None,
  value,
  onChange,
  ...props
}: InputProps) => {

  const format = (value: string) => {
    if (kind === InputKind.Phone)
      return formatPhone(value);
    return value;
  };
  const onPreChange = (e: string) => {
    if (kind === InputKind.Phone)
      e = e.replace(/-/g, '');

    onChange(e);
  };

  return (
    <Container>
      <SInput
        value={format(value || '')}
        onChangeText={onPreChange}
        {...props}
      />
    </Container>
  )
};

const Container = styled.View`
`;
const SInput = styled.TextInput`
`;
