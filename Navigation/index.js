// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import ResturantScreen from '../Screen/ResturantScreen';
import CartScreen from '../Screen/CartScreen';
import OrderPreparingScreen from '../Screen/OrderPreparingScreen';
import DeliveryScreen from '../Screen/DeliveryScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}> 
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen name="Cart" options={{presentation:"modal"}} component={CartScreen} />
        <Stack.Screen name="OrderPreparing" options={{presentation:"fullScreenModal"}} component={OrderPreparingScreen} />
        <Stack.Screen name="Delivery" options={{presentation:"fullScreenModal"}} component={DeliveryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;