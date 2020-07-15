import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { Provider } from 'react-redux';
import {state} from 'state';
import SideNavigator from 'navigation/sideNavigator';
import { ThemeContextProvider } from 'hooks/withTheme';



export default function App() {
  return (
    <Provider store={state}>
      <ThemeContextProvider>
        <NavigationContainer>
          <SideNavigator  />
        </NavigationContainer>
      </ThemeContextProvider>
    </Provider>

  );
}

