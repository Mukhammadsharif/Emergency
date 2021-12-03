import React from 'react'
import { Alert } from "react-native";
import auth from '@react-native-firebase/auth'



export async function loginUser({ email, password }) {
    const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

}


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