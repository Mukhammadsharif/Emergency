import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {theme} from "../theme";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';


export default function SplashScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Button
                mode={'contained'}
                compact={true}
                style={styles.firstButton}
                onPress={() => {navigation.navigate('AuthLoadingScreen')}}>
                Dori yuklash
            </Button>

            <Button
                mode={'contained'}
                compact={true}
                style={styles.firstButton}>
                Dori olish
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.lime,
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    firstButton: {
        borderRadius: 30
    }
})