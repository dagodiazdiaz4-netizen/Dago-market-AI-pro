import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDesc, setProductDesc] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const startProBoost = () => {
    if (!productName || !productPrice) {
      Alert.alert("Fampitandremana", "Fenoy ny anaran'entana sy ny vidiny azafady!");
      return;
    }
    Alert.alert(
      "🔥 AI PRO ACTIF", 
      "Efa mandeha ny Auto-Boost sy Auto-Reply ho an'i " + productName + ". Ho hita manerana ny firenena ny entanao!"
    );
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <View style={styles.adBanner}>
          <Text style={styles.adText}>📢 DOKA: Mahazoa tombony miaraka amin'ny Dago Market Ads</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.logo}>DAGO MARKET AI <Text style={styles.proBadge}>PRO</Text></Text>
          <Text style={styles.subtitle}>Rindranasa ho an'ny Mpivarotra matotra</Text>
          <TextInput style={styles.input} placeholder="Adresse Email" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Teny miafina" secureTextEntry={true} placeholderTextColor="#aaa" />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.btnText}>MIDITRA AVY HATRANY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.dashboard}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Panel PRO - Auto Pilot 🚀</Text>
        <View style={styles.adMini}>
          <Text style={styles.adMiniText}>📢 Dokam-barotra mampiditra vola ato anatiny</Text>
        </View>
      </View>
      <View style={styles.formCard}>
        <Text style={styles.sectionTitle}>Hampiditra Entana Vaovao 🛠️</Text>
        <TextInput 
          style={styles.inputDark} 
          placeholder="Anaran'ny entana (Nom du produit)" 
          placeholderTextColor="#888"
          value={productName}
          onChangeText={setProductName}
        />
        <TextInput 
          style={styles.inputDark} 
          placeholder="Vidy / Prix (Ar)" 
          keyboardType="numeric" 
          placeholderTextColor="#888"
          value={productPrice}
          onChangeText={setProductPrice}
        />
        <TextInput 
          style={[styles.inputDark, {height: 80}]} 
          multiline={true} 
          placeholder="Mombamomba azy fohy (Description)..." 
          placeholderTextColor="#888"
          value={productDesc}
          onChangeText={setProductDesc}
        />
        <TouchableOpacity style={styles.boostBtn} onPress={startProBoost}>
          <Text style={styles.btnText}>ACTIVATION BOOST & AUTO-PILOT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#222', padding: 25, borderRadius: 15, borderWidth: 1, borderColor: '#333' },
  logo: { fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 5 },
  subtitle: { color: '#888', textAlign: 'center', marginBottom: 25, fontSize: 13 },
  proBadge: { color: '#FF9800', fontWeight: 'bold' },
  input: { backgroundColor: '#333', color: '#fff', padding: 15, borderRadius: 8, marginBottom: 15 },
  inputDark: { backgroundColor: '#222', color: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#444' },
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 8, alignItems: 'center' },
  boostBtn: { backgroundColor: '#FF9800', padding: 18, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  adBanner: { backgroundColor: '#FF5722', padding: 12, position: 'absolute', top: 50, left: 20, right: 20, borderRadius: 8 },
  adMini: { backgroundColor: '#333', padding: 8, borderRadius: 5, marginTop: 10 },
  adText: { color: '#fff', textAlign: 'center', fontSize: 12, fontWeight: 'bold' },
  adMiniText: { color: '#FF9800', textAlign: 'center', fontSize: 12, fontWeight: 'bold' },
  dashboard: { flex: 1, backgroundColor: '#1a1a1a', padding: 15 },
  header: { marginBottom: 20, marginTop: 40 },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  formCard: { backgroundColor: '#292929', padding: 20, borderRadius: 12 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 15 }
});
