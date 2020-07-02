import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {Home, Details, CreateRecipe} from 'pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Details} />
        <Tab.Screen name="Create Recipe" component={CreateRecipe} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
});
