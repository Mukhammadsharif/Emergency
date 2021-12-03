import React from 'react'
import { Alert } from "react-native";
import auth from '@react-native-firebase/auth'




// export async function resetPassword({ email }) {
//     try {
//         await firebase.auth().sendPasswordResetEmail(email)
//         return {}
//     } catch (error) {
//         return {
//             error: error.message
//         }
//     }
// }

export function logOut(){
    getAuth().signOut().then(r => {})
}