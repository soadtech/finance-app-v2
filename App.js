import React from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import routesStack from './src/routes/stack';
import routesTab from './src/routes/tab';
import { colors } from './src/helpers/constants'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {routesTab.map(route => (
        <Tab.Screen key={route.path} name={route.path} component={route.component} options={{
          headerStyle: {
            backgroundColor: '#e7305b'
          },
          tabBarLabel: ({ focused }) => {
            return <Text style={{ color: focused ? '#000' : colors.gray, fontSize: 12 }}>{route.label}</Text>
          },
          tabBarIcon: ({ focused }) => {
            return <Icon name={route.icon} size={25} color={focused ? colors.primary : colors.gray} />
          }
        }} />

      ))}
    </Tab.Navigator>
  )
}

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        {routesStack.map(route => (
          <Stack.Screen key={route.path} name={route.path} component={route.component} />
        ))}
        <Stack.Screen name="home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;