import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import SplashScreen from "./src/screens/SplashScreen";
import SignUp from './src/screens/SignUp'
import AuthLoadingScreen from "./src/screens/AuthLoadingScreen";
import HomeScreen from "./src/screens/HomeScreen"
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export function TabScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={HomeScreen}/>
        </Tab.Navigator>
    )
}

export function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SplashScreen} screenOptions={{
                    headerTitle: () => null, header: null
            }}>
                <Stack.Screen name={'SplashScreen'} component={SplashScreen} options={{ headerShown: false }}/>
                <Stack.Screen name={'AuthLoadingScreen'} component={AuthLoadingScreen} options={{ headerShown: false }}/>
                <Stack.Screen name={'SignUp'} component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name={'TabScreen'} component={TabScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
