import { Text, Image, View, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import {Product} from './ProductPage';

const products = [
  {
    id: 1,
    image: 'https://http2.mlstatic.com/D_NQ_NP_678399-MLB52293409505_112022-O.webp', 
    name: 'Camiseta do PT',
    price: 39.90,
  },
  {
    id: 2,
    image: 'https://http2.mlstatic.com/D_NQ_NP_727363-MLB44308496238_122020-O.webp', 
    name: 'Bandeira do PT',
    price: 29.90,
  },
  {
    id: 3,
    image: 'https://img.elo7.com.br/product/main/42AEF90/cortador-biscoitos-pasta-americana-biscuit-estrela-pt-cortador.jpg', 
    name: 'Bolacha do PT',
    price: 10.00,
  },
  {
    id: 4,
    image: 'https://atelie.com.br/wp-content/uploads/2024/04/Historia-do-PT-quadrado-1.jpg',
    name: 'Livro sobre a História do PT',
    price: 49.90,
  },
];


const ProdutosScreen = ({ navigation }) => {

  const goBackHome = () => {
    navigation.replace("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
        style={styles.logo}
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2016/09/pt-logo-6.png' }}
        resizeMode="contain"
      />
        <TouchableOpacity onPress={goBackHome}>
          <Text style={styles.textLink}>Voltar para home</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={products}
        renderItem={({item}) => <Product product={item}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    logo: {
    height: 128,
    width: 128,
    marginBottom: 24,
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    paddingBottom: 24,
  },

  textLink: {
    fontSize: 14,
    color: "#FFD700",
  },
  scrollContainer: {
    paddingBottom: 16,
  },
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

export default ProdutosScreen;
