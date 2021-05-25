import React from 'react';
import styled from 'styled-components/native';

type TagInputProps = {
  items: string[];
  value: string[];
  onChange: OnChangeCallback<string[]>;
};
export const TagInput = ({
  items,
  value,
  onChange,
}: TagInputProps) => {
  return (
    <Container>

    </Container>
  );
};

const Container = styled.View`
  flex-wrap: wrap;
`;
