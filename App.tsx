// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import store from './store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="DrawerNavigator" >
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;