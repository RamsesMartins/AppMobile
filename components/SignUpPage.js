import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button, SafeAreaView, Image } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = () => {
    navigation.replace('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2016/09/pt-logo-6.png' }}
        resizeMode="contain"
      />
      <Text style={styles.text}> Bem vindo ao Futuro do Brasil. 🇧🇷 </Text>

      <View style={styles.divForm}>
        <TextInput
          style={styles.inputText}
          placeholder="Defina username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Defina uma password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" onPress={handleSignup} color="red" />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.replace('Login')}>
        <Text style={styles.signUpLink}>Já tem uma conta? Faça login aqui</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  logo: {
    height: 128,
    width: 128,
    marginBottom: 24,
  },
  divForm: {
    paddingHorizontal: '5%',
    paddingTop: '10%',
  },
   inputText: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 8, 
    width: 280,
    paddingHorizontal: 12,
    color: 'red',
    height: 45,
    marginBottom: 16, 
    fontSize: 16, 
  },
  buttonContainer: {
    marginTop: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: "#c6122e"
  },
  signUpLink: {
    marginTop: 32,
    color: 'red',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
