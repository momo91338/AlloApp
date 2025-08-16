import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { View } from 'react-native';

export default function QRGenerator({ value }) {
  return (
    <View style={{ marginVertical:20 }}>
      <QRCode value={value} size={200} />
    </View>
  );
}