import React, { useEffect, useState } from 'react';
import { View, Text, Button, Share } from 'react-native';
import QRGenerator from '../components/QRGenerator';
import { createUser } from '../network';

export default function ProfileScreen() {
  const [myID, setMyID] = useState('');

  useEffect(() => {
    const initUser = async () => {
      const userData = await createUser();
      setMyID(userData.alias);
    };
    initUser();
  }, []);

  const shareQR = async () => {
    await Share.share({ message: `اضفني على Allo: ${myID}` });
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:28, marginBottom:20 }}>حسابي</Text>
      {myID !== '' && <QRGenerator value={myID} />}
      <Button title="مشاركة QR الخاص بي" onPress={shareQR} disabled={!myID} />
    </View>
  );
}