import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import routesStack from './src/routes/stack';
import routesTab from './src/routes/tab';
import { colors } from './src/helpers/constants';
import Home from './src/containers/tab/Home'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={
    {
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }
  }>
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: colors.primary
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        height: 90,
        ...styles.shadow
      }
    }}>
      {routesTab.map((route, i) => {
        if (i === 2) {
          return (
            <>
              <Tab.Screen name='add' component={Home} options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Icon name='plus' size={25} color='#FFFFFF' />
                    </View>)
                },
                tabBarButton: (props) => (
                  <CustomTabBarButton {...props} />
                )

              }} />
              <Tab.Screen key={route.path} name={route.path} component={route.component} options={{
                headerStyle: {
                  backgroundColor: '#e7305b'
                },
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 15 }}>
                      <Icon name={route.icon} size={25} color={focused ? colors.primary : colors.gray} />
                      <Text style={{ color: focused ? '#000' : colors.gray, fontSize: 12 }}>{route.label}</Text>
                    </View>)
                }
              }} />
            </>
          )
        }
        return (
          <Tab.Screen key={route.path} name={route.path} component={route.component} options={{
            headerStyle: {
              backgroundColor: '#e7305b'
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center', top: 15 }}>
                  <Icon name={route.icon} size={25} color={focused ? colors.primary : colors.gray} />
                  <Text style={{ color: focused ? '#000' : colors.gray, fontSize: 12 }}>{route.label}</Text>
                </View>)
            }
          }} />
        )
      })}


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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default App;