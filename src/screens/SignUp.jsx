import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import emailValidator from "../../helpers/emailValidator";
import passwordValidator from "../../helpers/passwordValidator";
import BackButton from "../components/BackButton";
import nameValidator from "../../helpers/nameValidator";
import {theme} from "../theme";
import auth from "@react-native-firebase/auth";

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState({value: '', error: ''})
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [loading, setLoading] = useState(false)


    const onSignupPressed = async () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError || nameError) {
            setName({...name, error: nameError})
            setEmail({...email, error: emailError})
            setPassword({...password, error:passwordError})
        }
        setLoading(true)
        auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((response) => {
            Alert.alert(`Siz ro'yxatdan muvaffaqiyatli o'tdingiz`)
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              Alert.alert(`Bu pochta manzili ro'yxatdan o'tgan`);
            }

            if (error.code === 'auth/invalid-email') {
              Alert.alert(`Pochta manzilingizni to'g'ri kor'sating`);
            }

            console.error(error);
          });
        setLoading(false)
    }
    return (
        <Background>
            <BackButton/>
            {/*<Logo />*/}
            <Navbar>Create Account</Navbar>
            <TextInput
                label="Name"
                onChangeText={(text) => setName({value:text, error: ''})}
                value={name.value}
                error={name.error}
                errorText={name.error}
            />
            <TextInput
                label="Email"
                onChangeText={(text) => setEmail({value:text, error: ''})}
                value={email.value}
                error={email.error}
                errorText={email.error}
            />
            <TextInput
                label="Password"
                onChangeText={(text) => setPassword({value:text, error: ''})}
                value={password.value}
                error={password.error}
                secureTextEntry
                errorText={password.error}
            />
            <Button mode="contained"
                    loading={loading}
                    onPress={onSignupPressed}>
                Sign up
            </Button>
            <View style={styles.row}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    row: {
      flexDirection: 'row',
      marginTop: 4
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary
    }
})