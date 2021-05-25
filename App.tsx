import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FAB } from 'atom/fab';
import { Portal, PortalProvider, WarpTo } from 'atom/portal';

export default function App() {
  return (
    <PortalProvider>
      <View style={{ flex: 1 }}>
        <View style={{ opacity: 0, display: 'none' }}>
          <Text>asdf</Text>
          <WarpTo name="pp">
            <FAB>
              <Text style={{ fontSize: 30, color: 'red' }}>
                dddd
              </Text>
            </FAB>
          </WarpTo>
        </View>
        <Portal name="pp" />
      </View>
    </PortalProvider>
  );
}
