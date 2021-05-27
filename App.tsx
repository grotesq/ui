import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image as RNImage } from 'react-native';

import { FAB } from 'atom/fab';
import { Portal, PortalProvider, WarpTo } from 'atom/portal';
import { Debounce } from 'atom/transition';
import { Confirm } from 'atom/popup/Confirm';
import { Input, VerticalPicker } from 'atom/input';
import { Image } from 'atom/image';

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

      <Image
        style={{ width: 200, height: 200 }}
        placeholder={require('./assets/icon.png')}
        source={{ uri: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" }}
      />

      <Input
        variant="underlined"
        value="ASDF"
        onChange={() => {}}
      />
    </PortalProvider>
  );
}
