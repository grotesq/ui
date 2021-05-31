import React from 'react';
import styled from 'styled-components/native';

import { Tag } from 'atom/tag';
import { Space } from 'atom/layout';

type TagInputProps = {
  gap?: number;
  items: string[];
  value: string[];
  onChange: OnChangeCallback<string[]>;
};
export const TagInput = ({
  gap = 8,
  items,
  value,
  onChange,
}: TagInputProps) => {
  const onPressTag = (tag: string) => {
    if (value.includes(tag))
      onChange(value.filter(x => x !== tag));
    else
      onChange([...value, tag]);
  };

  return (
    <Container>
      {items.map(x => (
        <React.Fragment
          key={x}
        >
          <Tag
            onPress={() => onPressTag(x)}
          >
            {x}
          </Tag>
          <Space width={gap} />
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-wrap: wrap;
`;
