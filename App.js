import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginApp from './components/LoginPage';
import SignUpApp from './components/SignUpPage';
import HomePage from './components/HomePage';
import ListPage from './components/ListPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator       
      screenOptions={{
        headerShown: false,
      }} 
      initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginApp} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="SignUp" component={SignUpApp} />
        <Stack.Screen name="List" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
