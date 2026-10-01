import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Wireless Headphones', price: '$59.99' },
  { id: '2', name: 'Smart Watch', price: '$129.99' },
  { id: '3', name: 'Bluetooth Speaker', price: '$39.99' },
  { id: '4', name: 'Mechanical Keyboard', price: '$89.99' },
  { id: '5', name: 'USB-C Hub', price: '$24.99' },
];

function ProductItem({ name, price }) {
  return (
    <View style={styles.productRow}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </View>
  );
}

export default function App() {
  const brokenSyntax = ;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>
      <Text style={styles.name}>Umar Riaz</Text>
      <Text style={styles.roll}>23i-3028</Text>

      <FlatList
        style={styles.list}
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem name={item.name} price={item.price} />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 48,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  roll: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
    marginBottom: 24,
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2a7',
  },
});
