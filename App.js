import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routesStack from './src/routes/stack';

const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        {routesStack.map(route => (
          <Stack.Screen key={route.path} name={route.path} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;