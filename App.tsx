import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FAB } from 'atom/fab';
import { Portal, PortalProvider, WarpTo } from 'atom/portal';
import { Debounce } from 'atom/transition';
import { Confirm } from 'atom/popup/Confirm';

export default function App() {
  const [a, setA] = useState('red');

  useEffect(() => {
    setTimeout(() => {
      console.log('setA');
      setA('blue');
    }, 1000);
  }, []);

  return (
    <PortalProvider>
      <View style={{ flex: 1, paddingTop: 100 }}>
        <Debounce
          property="style"
        >
          <Text style={{ color: a }}>
            {a}
          </Text>
        </Debounce>
      </View>

      <Confirm
        title="ASDF"
        message="WBQB"
        onClose={() => {}}
      />
    </PortalProvider>
  );
}
