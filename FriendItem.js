import React from 'react';
import { View, Text } from 'react-native';
import QRGenerator from './QRGenerator';

export default function FriendItem({ friend }) {
  return (
    <View style={{ flexDirection:'row', alignItems:'center', marginVertical:10 }}>
      <QRGenerator value={friend.qrData} />
      <Text style={{ marginLeft:10, fontSize:18 }}>{friend.name}</Text>
    </View>
  );
}