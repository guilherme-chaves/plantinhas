import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";


import { initializeApp } from "./.env.firebase";

initializeApp();

const db = firebase.firestore();

export const getPlantaData = (idPlanta: string) => {
    try {
        db.collection("plantas").where("idPlanta", "==", idPlanta).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                return doc.data();
            });
        })
    } catch(error) {
        console.log("Error getting documents: ", error);
    }
}

export const getPlantaList = () => {
    try {
        const returnData: Array<any> = [];
        db.collection("plantas").orderBy("name").limit(20).get()
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