import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Navigation} from "./Navigation"
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
     <SafeAreaProvider>
        <StatusBar style={"auto"}/>
        <Navigation/>
     </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
