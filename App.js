import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { Provider } from 'react-redux';
import {state} from 'state';
import {Navigator, SideNavigator} from 'navigation';


export default function App() {
  return (
    <Provider store={state}>
      <NavigationContainer>
        <SideNavigator />
      </NavigationContainer>
    </Provider>

  );
}

