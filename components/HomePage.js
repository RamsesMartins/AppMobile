import React from 'react';
import { StyleSheet, SafeAreaView, Text, Pressable, Image, TouchableOpacity } from 'react-native';

export default function HomePage({ navigation }) {
  const handleLogout = () => {
    navigation.replace('Login'); 
  };

  const goToList = () => {
    navigation.replace('List'); 
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2016/09/pt-logo-6.png' }}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>Compre nossos produtos e nos ajude a mudar o Brasil.</Text>
      <Pressable onPress={goToList}> 
        <Text style={styles.subText}>Produtos</Text>
      </Pressable>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 16,
  },
  logo: {
    height: 128,
    width: 128,
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 32,
    textDecorationLine: "underline"
  },
  button: {
    backgroundColor: '#c4122d',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    width: '60%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
