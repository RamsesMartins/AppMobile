import { StyleSheet, TextInput, View, Button, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
const navigation = useNavigation();

    const handleLogin = () => {
      if(username && password) {
       navigation.replace('Home')
       } else {
         setMessage(true)
       }
  };
  
  const handlNewAccount = () => {
    navigation.replace('SignUp')
  }
  return (
    <SafeAreaView style={stylesheet.container}>
      <Image
        style={stylesheet.logo}
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2016/09/pt-logo-6.png' }}
        resizeMode="contain"
      />
      <Text style={stylesheet.text}> Bem vindo ao Futuro do Brasil. 🇧🇷 </Text>
      { message &&
      <Text style={stylesheet.error}> Digite um Email e uma senha qualquer. </Text>
      }
      <View style={stylesheet.divForm}>

        <TextInput
          placeholder="Nome"
          value={username}
          onChangeText={setUsername}
          style={stylesheet.inputText}
        />

        <TextInput
          placeholder="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          style={stylesheet.inputText}
        />

        <View style={stylesheet.buttonContainer}>
          <Button title="Entrar" onPress={handleLogin} color="red"  />
        </View>
      
    </View>
      <TouchableOpacity onPress={handlNewAccount}>
        <Text style={stylesheet.signUpLink}>Cadastre-se aqui</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  error: {
    color: "black",
    fontSize: 16,
    marginTop: 12,
  },
  text: {
    color: "red",
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'white', 
    padding: 16,
  },
  logo: {
    height: 128,
    width: 128,
    marginBottom: 24, 
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
  divForm: {
    paddingHorizontal: '5%',
    paddingTop: '10%',
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
