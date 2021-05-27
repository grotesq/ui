import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image as RNImage, Button } from 'react-native';

import { FAB } from 'atom/fab';
import { Portal, PortalProvider, WarpTo } from 'atom/portal';
import { Debounce } from 'atom/transition';
import { Confirm } from 'atom/popup/Confirm';
import { Input, VerticalPicker } from 'atom/input';
import { Image } from 'atom/image';
import { Space } from 'atom/layout';
              
export default function App() {
  const [show, setShow] = useState(false);

  return (
    <PortalProvider>
      <Space height={100} />
      <Button
        title="ON"
        onPress={() => setShow(true)}
      >
        ON
      </Button>

      {show && (
        <Confirm
          title="ASDF"
          message="asdfsdf"
          onClose={() => setShow(false)}
        />
      )}
    </PortalProvider>
  );
}
