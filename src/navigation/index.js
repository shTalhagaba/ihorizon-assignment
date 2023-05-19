/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import DetailScreen from '../screens/detailScreen/DetailScreen';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Navigation(){

    return(
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />

        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
}

