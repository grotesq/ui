import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FAB } from 'atom/fab';
import { Portal, PortalProvider, WarpTo } from 'atom/portal';
import { Debounce } from 'atom/transition';
import { Confirm } from 'atom/popup/Confirm';
import { VerticalPicker } from 'atom/input';

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

      <VerticalPicker
        items={[
          { label: 'qwer', value: 'qwer' },
          { label: 'qwer23', value: 'qwer23' },
          { label: 'qwer23', value: 'qwer2333' },
          { label: 'qwer3124', value: 'qwer4123' },
          { label: 'qwer31242', value: 'qwer412322' },
          { label: 'qwer312433', value: 'qwer412333' },
          { label: 'qwer312444', value: 'qwer412344' },
        ]}
        value="qwer"
        onChange={() => {}}
      />
    </PortalProvider>
  );
}
