import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { formatPhone } from 'format';

export const InputKind = {
  None: 'none',
  Phone: 'phone',
} as const;

interface InputProps extends Omit<TextInputProps, 'value' | 'onChange'> {
  kind?: ValuesOf<typeof InputKind>;
  error?: string | Validator<string>;
  value: string;
  onChange: OnChangeCallback<string>;
};
export const Input = ({
  kind = InputKind.None,
  value,
  error,
  onChange,
  ...props
}: InputProps) => {
  const errorMessage = resolveError(value, error);

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
      {errorMessage && (
        <ErrorText>
          {errorMessage}
        </ErrorText>
      )}
    </Container>
  )
};

const resolveError = (value: string, error: string | Validator<string> | undefined) => {
  if (!error) return null;
  if (typeof error === 'string')
    return value;
  return error(value);
};

const Container = styled.View`
`;
const SInput = styled.TextInput`
`;
const ErrorText = styled.Text`
  color: red;
`;
