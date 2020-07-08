import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../index'

const Drawer = createDrawerNavigator();

export default function SideNavigator() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
  );
}