import styled from 'styled-components/native';
import ReactNative from 'react-native';

import { transpile } from './csss';

const aliases = [
  'ActivityIndicator',
  'ActivityIndicatorIOS',
  'ART',
  'Button',
  'DatePickerIOS',
  'DrawerLayoutAndroid',
  'FlatList',
  'Image',
  'ImageBackground',
  'ImageEditor',
  'ImageStore',
  'KeyboardAvoidingView',
  'ListView',
  'MapView',
  'Modal',
  'NavigatorIOS',
  'Picker',
  'PickerIOS',
  'Pressable',
  'ProgressBarAndroid',
  'ProgressViewIOS',
  'RecyclerViewBackedScrollView',
  'RefreshControl',
  'SafeAreaView',
  'ScrollView',
  'SectionList',
  'SegmentedControlIOS',
  'Slider',
  'SliderIOS',
  'SnapshotViewIOS',
  'StatusBar',
  'SwipeableListView',
  'Switch',
  'SwitchAndroid',
  'SwitchIOS',
  'TabBarIOS',
  'Text',
  'TextInput',
  'ToastAndroid',
  'ToolbarAndroid',
  'Touchable',
  'TouchableHighlight',
  'TouchableNativeFeedback',
  'TouchableOpacity',
  'TouchableWithoutFeedback',
  'View',
  'ViewPagerAndroid',
  'VirtualizedList',
  'WebView',
] as const;

const newStyled = (...params: any[]) => {
  return (...p2: any[]) => {
    const remapped = p2.map(x => {
      if (typeof x === 'function') {
        return transpile(x({ color: 'primary' }));
      }
      if (Array.isArray(x))
        return x.map(y => transpile(y));
      return transpile(x);
    });
    return styled(...params)(...remapped);
  }
};

/* Define a getter for each alias which simply gets the reactNative component
 * and passes it to styled */
aliases.forEach(alias =>
  Object.defineProperty(newStyled, alias, {
    enumerable: true,
    configurable: false,
    get() {
      return (...params: any[]) => {
        return newStyled((ReactNative as any)[alias])(...params);
      };
    },
  })
);

export default newStyled as typeof styled &
  {
    [key in typeof aliases[number]]: ReturnType<typeof styled>;
  };