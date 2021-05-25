import React from 'react';
import styled from 'styled-components/native';

import { Tag } from 'atom/tag';

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
      {items.map(x => (
        <Tag>
          {x}
        </Tag>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-wrap: wrap;
`;
