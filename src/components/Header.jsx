import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {BackgroundCustomize, ChevronLeft, ClosenessHeaderIcon} from "./Svgs";
import {useNavigation} from "@react-navigation/native";
import {theme} from "../theme";
import Ionicons from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome5";


export default function Header({title, icon}) {
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => {}}>
                    {/*<ChevronLeft/>*/}
                    {/*<Text style={styles.backTitle}>Orqaga</Text>*/}
                    <FontAwesome name='hands-helping' size={30} color={theme.colors.tint}/>
                    <FontAwesome name='hands-helping' size={30} color={theme.colors.tint}/>
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title ? title : 'Близость'}</Text>
                </View>

                <View style={styles.headerIconContainer}>
                    <Ionicons name={icon ? icon : null} size={30} color={theme.colors.tint}/>
                </View>

                <View style={styles.backgroundContainer}>
                    <BackgroundCustomize />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 120,
        backgroundColor: theme.colors.lime,
        borderBottomEndRadius: 24,
        borderBottomStartRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    headerIconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerIconText: {
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 12
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -11,
    },
    backTitle: {
        marginLeft: 5,
        color: '#FFFFFF',
        fontSize: 17,
        lineHeight: 22,
    },
    backgroundContainer: {
        position: 'absolute',
        right: -50,
        top: -30
    },
     titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: -20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 22,
        lineHeight: 23,
        fontWeight: 'bold',
        marginTop: 10,
    },
    titleDescription: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 19,
    },
})