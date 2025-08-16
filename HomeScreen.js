import React from 'react';
import { View, Text, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Image source={require('../assets/logo.png')} style={{ width:150, height:150, marginBottom:20 }} />
      <Text style={{ fontSize:36, fontWeight:'bold' }}>Allo</Text>
    </View>
  );
}