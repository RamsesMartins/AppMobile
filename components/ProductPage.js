import { Text, Image, View } from 'react-native';
import { StyleSheet } from 'react-native';

export const Product = ({ product }) => {
    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  productContainer: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
});