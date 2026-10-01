import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>
      <Text style={styles.name}>Umar Riaz</Text>
      <Text style={styles.roll}>23i-3028</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  roll: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
});
