import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // Liste des articles de votre marché connecté
  const entana = [
    { id: 1, anarana: 'Finday AI Pro', vidiny: '1 200 000 Ariary', sary: '📱' },
    { id: 2, anarana: 'Solosaina Mahery', vidiny: '2 500 000 Ariary', sary: '💻' },
    { id: 3, anarana: 'Ecouteur Bluetooth', vidiny: '150 000 Ariary', sary: '🎧' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* En-tête de l'application (Header) */}
      <View style={styles.header}>
        <Text style={styles.logoText}>🛒 Dago Market AI</Text>
        <Text style={styles.SloganText}>Ny tsenanao manaraka teknolojia</Text>
      </View>

      {/* Liste des produits déroulante */}
      <ScrollView style={styles.FidiranaEntana}>
        <Text style={styles.lohateny}>Entana misy amin'izao:</Text>
        
        {entana.map((item) => (
          <View key={item.id} style={styles.karatraEntana}>
            <Text style={styles.saryEntana}>{item.sary}</Text>
            <View style={styles.mombaEntana}>
              <Text style={styles.anaranaEntana}>{item.anarana}</Text>
              <Text style={styles.vidinyEntana}>{item.vidiny}</Text>
            </View>
            <TouchableOpacity style={styles.bokotraHividy}>
              <Text style={styles.soratraBokotra}>Hividy</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e1e24' },
  header: { padding: 20, backgroundColor: '#ff6b6b', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
  logoText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  SloganText: { fontSize: 12, color: '#ffe3e3', marginTop: 5 },
  FidiranaEntana: { padding: 15 },
  lohateny: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 15 },
  karatraEntana: { flexDirection: 'row', backgroundColor: '#2a2a35', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 12 },
  saryEntana: { fontSize: 35, marginRight: 15 },
  mombaEntana: { flex: 1 },
  anaranaEntana: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  vidinyEntana: { fontSize: 14, color: '#ff6b6b', marginTop: 3 },
  bokotraHividy: { backgroundColor: '#ff6b6b', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20 },
  soratraBokotra: { color: '#fff', fontWeight: 'bold', fontSize: 12 }
});
