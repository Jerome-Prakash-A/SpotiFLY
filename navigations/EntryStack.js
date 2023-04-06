import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TabNavigatorScreen from '../screens/TabNavigatorScreen';










const Stack = createNativeStackNavigator();

export default function EntryStack({navigation}) {
  return (
    <Stack.Navigator >
      
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='TabNavigatorScreen' component={TabNavigatorScreen} />
      

        

    </Stack.Navigator>
  )
}