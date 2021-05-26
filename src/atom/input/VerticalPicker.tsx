import React, { useEffect, useRef } from 'react';
import styled from 'styled/styled';
import { Animated, View } from 'react-native';
import { Space } from 'atom/layout';
import { Easing } from 'react-native-reanimated';

interface VerticalPickerProps {
  items: LabelValue[];
  value: any;
  onChange: OnChangeCallback;
};
export const VerticalPicker = ({
  items,
  value,
  onChange,
  ...props
}: VerticalPickerProps) => {
  const ref = useRef();
  const activeItemIndex = useRef<number>(0);
  const animValues = useRef<Animated.Value[]>([]);
  const lastStop = useRef<number>(0);

  const construct = () => {
    if (animValues.current.length === items.length)
      return;

    const v: Animated.Value[] = [];
    items.forEach(x => {
      v.push(new Animated.Value(0));
    });
    animValues.current = v;
  }
  construct();

  const getActiveItem = (y: number) => {
    //return Math.floor((Math.floor(y / 25) - 1) / 2 + 1);
    let offset = 0;
    for (let i=0;i<items.length;i++) {
      const diff = y - offset;
      const distance = Math.abs(activeItemIndex.current - i);
      if (Math.abs(diff) < 20) return i;
      if (distance === 0)
        offset += 40;
      else if (distance === 1)
        offset += 30;
      else
        offset += 25;
    }
    return items.length - 1;
  };
  const getScrollOffset = (idx: number) => {
    let offset = 0;
    for (let i=0;i<items.length;i++) {
      const distance = Math.abs(idx - i);
      if (distance === 0) {
        break;
      }
      else if (distance === 1)
        offset += 30;
      else
        offset += 25;
    }
    return offset;
  };
  const onScroll = ({ nativeEvent }) => {
    const idx = getActiveItem(nativeEvent.contentOffset.y);

    if (activeItemIndex.current !== idx) {
      const prevIdx = activeItemIndex.current;
      activeItemIndex.current = idx;
      lastStop.current = nativeEvent.contentOffset.y;

      const animations: Animated.CompositeAnimation[] = [];

      for (let i=Math.max(0, idx-2);i<Math.min(items.length, idx+3);i++){
        const distance = Math.abs(idx - i);
        animations.push(
          Animated.timing(animValues.current[i], {
            toValue: 1 - distance * 0.5,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.ease,
          }),
        );
      }
      Animated.parallel(animations, { stopTogether: false }).start();
    }
  };
  const onScrollEndDrag = () => {
    console.log(activeItemIndex.current, getScrollOffset(activeItemIndex.current));
    ref.current.scrollTo({
      x: 0,
      y: getScrollOffset(activeItemIndex.current),
    });
  };

  return (
    <Container
      {...props}
    >
      <ScrollArea
        ref={ref}
        scrollEventThrottle={1}
        onScroll={onScroll}
        onScrollEndDrag={onScrollEndDrag}
      >
        {items.map((x, idx) => (
          <ItemContainer
            key={x.value}
            style={{
              height: animValues.current[idx].interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [25, 30, 40],
              }),
              opacity: animValues.current[idx].interpolate({
                inputRange: [0, 1],
                outputRange: [0.2, 1],
              }),
              transform: [
                { scale: animValues.current[idx].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.7, 1],
                }) }
              ]
            }}
          >
            <ItemText
              style={{
              }}
            >
              {x.label}
            </ItemText>
          </ItemContainer>
        ))}
        <Space width={1} height={50} />
        <Space width={1} height={50} />
      </ScrollArea>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 150px;

  background: red;

  overflow: hidden;
`;
const ScrollArea = styled.ScrollView`
  padding-top: 50px;
`;
const ItemContainer = styled(Animated.View)`
  align-items: center;
  justify-content: center;
`;
const ItemText = styled(Animated.Text)`
  font-size: 14px;
`;
