import "react-native-gesture-handler";
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { StatusBar, Text, View } from 'react-native';
import BookDetail  from './src/screens/BookDetail';
import Tabs from './src/navigation/tabs';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar barStyle={'light-content'}/>
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}>
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* Screens */}
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

