import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ItemsScreen from '../screens/ItemsScreen';
import PaymentProcess from '../screens/PaymentProcess';
import PaymentScreen from '../screens/PaymentScreen';











const Stack = createNativeStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator >
      
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='ItemsScreen' component={ItemsScreen} />
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
        <Stack.Screen name='PaymentProcess' component={PaymentProcess} />




        
      

        

    </Stack.Navigator>
  )
}