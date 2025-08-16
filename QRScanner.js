import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRScanner({ onRead }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) return <Text>طلب إذن الكاميرا...</Text>;
  if (hasPermission === false) return <Text>لا يمكن الوصول للكاميرا</Text>;

  return (
    <View style={{ flex:1 }}>
      <BarCodeScanner
        onBarCodeScanned={(e) => onRead(e.data)}
        style={{ flex:1 }}
      />
      <Button title="إلغاء" onPress={() => onRead(null)} />
    </View>
  );
}