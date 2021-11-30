import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../OnboardScreen';
import Login from '../Login/login';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'OnboardScreen'}
      >
        <Stack.Screen
          name="OnboardScreen"
          component={OnboardScreen}
          
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default MyStack;