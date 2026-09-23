import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [logged, setLogged] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: '#111', justifyContent: 'center', padding: 20 }}>
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
        DAGO MARKET AI PRO
      </Text>
      <TouchableOpacity 
        style={{ backgroundColor: '#FF9800', padding: 15, borderRadius: 8, alignItems: 'center' }}
        onPress={() => alert("🔥 AI PRO ACTIF: Auto-Boost sy Auto-Reply efa mandeha!")}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>ACTIVATION BOOST AUTOMATIQUE</Text>
      </TouchableOpacity>
    </View>
  );
}
