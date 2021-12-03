import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import SplashScreen from "./src/screens/SplashScreen";
import SignUp from './src/screens/SignUp'
import AuthLoadingScreen from "./src/screens/AuthLoadingScreen";
import HomeScreen from "./src/screens/HomeScreen"
import LogIn from "./src/screens/Login"
import NewDrug from "./src/screens/NewDrug";
import Profile from "./src/screens/Profile";
import Header from './src/components/Header'
import Ionicons from 'react-native-vector-icons/Fontisto';
import { theme } from "./src/theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export function TabScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }
              },
              tabBarActiveTintColor: theme.colors.lime,
              tabBarInactiveTintColor: 'gray',
              tabBarLabelStyle: {fontSize: 12},
            })}>
            <Tab.Screen name='HomeScreen' component={HomeScreen}
                options={{
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="drug-pack" size={30} color={theme.colors.lime}/>
                ),
                header: ({ navigation, route, options }) => {
                  return <Header title='Mening dorilarim' icon={'drug-pack'}/>;
                },
                tabBarLabel: `Mening dorilarim`
            }}/>

            <Tab.Screen name='NewDrug' component={NewDrug}
                options={{
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="shopping-basket-add" size={30} color={theme.colors.lime}/>
                ),
                header: ({ navigation, route, options }) => {
                  return <Header title={`Yangi dori qo'shish`} icon={'shopping-basket-add'}/>;
                },
                tabBarLabel: `Yangi dori qo'shish`,
            }}/>

            <Tab.Screen name='Profile' component={Profile}
                options={{
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="database" size={30} color={theme.colors.lime}/>
                ),
                header: ({ navigation, route, options }) => {
                  return <Header title={`Ma'lumotlarim`} icon={'database'}/>;
                },
                tabBarLabel: `Ma'lumotlarim`,
            }}/>
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
                <Stack.Screen name={'LogIn'} component={LogIn} options={{ headerShown: false }}/>
                <Stack.Screen name={'TabScreen'} component={TabScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
