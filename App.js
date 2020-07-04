import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { Provider } from 'react-redux';
import {state} from 'state';
import {Navigator} from 'navigation';


export default function App() {
  return (
    <Provider store={state}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>

  );
}

