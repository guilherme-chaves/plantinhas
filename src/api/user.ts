import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { initializeApp } from "./.env.firebase";
import { UserData } from "../store/interfaces/user";
import { useState } from "@/composables/state";

initializeApp();

const db = firebase.firestore();

export const getUserData = () => {
    const [user, setUser] = useState({});
    firebase
        .database()
        .ref('users/' + firebase.auth().currentUser?.uid)
        .on('value', (snapshot) => {
            const data = snapshot.val();
            const userData: UserData = {
                userId: data.userId,
                userName: data.userName,
                userEmail: data.userEmail,
                userPoints: data.userPoints,
                userLevel: data.userLevel,
                firstLogin: data.firstLogin
            }
            setUser(userData);
        },
        (error) => {
            throw error;
        });
    return {user, setUser};
}


export const getPlantasUsuario = () => {
    const returnData: Array<any> = [];
    try {
        const userId = firebase.auth().currentUser?.uid;
        db.collection("user").doc(userId).collection("plantas").limit(20).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                returnData.push(doc.data());
            });
        });
        return returnData;
    } catch(error) {
        console.log("Error getting documents: ", error);
    }
}