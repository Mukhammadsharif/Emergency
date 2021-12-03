import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View } from 'react-native'
import auth from "@react-native-firebase/auth";
import { useNavigation } from '@react-navigation/native'
import HomeScreen from "./HomeScreen";
import SignUp from './SignUp'
import { TabScreen } from '../../Navigation'

export default function AuthLoadingScreen(){
    const navigation = useNavigation()

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState()

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }

      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

      if (initializing) return null;

      if(user){
            return (
                <TabScreen/>
            )
        } else {
            return (
                <SignUp/>
            )
        }
}