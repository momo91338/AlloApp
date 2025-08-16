import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import QRScanner from '../components/QRScanner';
import FriendItem from '../components/FriendItem';
import { gun, user } from '../network';

export default function FriendsScreen() {
  const [friends, setFriends] = useState([]);
  const [showScanner, setShowScanner] = useState(false);

  const handleAddFriend = async (alias) => {
    const newFriend = { id: Date.now().toString(), alias };
    setFriends([...friends, newFriend]);

    user.get('friends').set({ alias });
    setShowScanner(false);
  };

  return (
    <View style={{ flex:1, padding:20 }}>
      {showScanner ? (
        <QRScanner onRead={handleAddFriend} />
      ) : (
        <>
          <Button title="إضافة صديق عبر QR" onPress={() => setShowScanner(true)} />
          <FlatList
            data={friends}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <FriendItem friend={{ name: item.alias, qrData: item.alias }} />}
          />
        </>
      )}
    </View>
  );
}