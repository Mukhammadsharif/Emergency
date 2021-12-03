import React, { useEffect } from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
// import database , { firebase } from '@react-native-firebase/database';
import { getDatabase } from "@firebase/database";
import { initializeApp } from "firebase/app";
import {app} from "../../config";
import firebase from "firebase/compat";


export default function NewDrug() {

    const getInfo =  async () => {
         firebase.database().ref().on("value", snapshot => console.log(snapshot))
         console.log(app)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => getInfo()}>
                <Text>aaaaaa</Text>
            </TouchableOpacity>

        </View>
    )
}