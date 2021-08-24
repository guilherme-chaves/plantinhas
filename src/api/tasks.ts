//import { toRefs, reactive } from "vue";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";


import { initializeApp } from "./.env.firebase";
import { getWeekDays } from '@/composables/dateFunctions';
import { TasksInterface } from "../store/interfaces/tasks";
import { UserTaskInterface } from "@/store/interfaces/user"

initializeApp();


const db = firebase.firestore();

export const getTasksWeek = async () => {
    try {
        db.collection("tasks").where("active", "==", true).where("idUser", "==", firebase.auth().currentUser?.uid).get()
        .then((querySnapshot) => {
            const returnData: Array<any> = [];
            const week = getWeekDays();
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                let i = 0;
                for(i; i < 7; i++) {
                    if (doc.data().repeat?.includes(week[i].getDay())){
                        returnData[i].push(doc.id, doc.data());
                    }
                }
            });
            return returnData;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    } catch(error) {
        console.error("Error adding document: ", error);
    }
}

export const setTaskWeek = async (taskData: TasksInterface) => {
    try {
        db.collection("tasks").add(taskData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            Promise.resolve(docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            Promise.reject(error);
        });
    } catch(error) {
        console.error("Error adding document: ", error);
        Promise.reject(error);
    }
}

export const setTaskDone = async (userTaskData: UserTaskInterface) => {
    try {
        const userId = firebase.auth().currentUser?.uid;
        db.collection("users").doc(userId).collection("tasks").add(userTaskData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            Promise.resolve(docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            Promise.reject(error);
        });
    } catch(error) {
        console.error("Error adding document: ", error);
        Promise.reject(error);
    }
}

export const setTaskActive = async (userTaskId: string, newState: boolean) => {
    try {
        const userId = firebase.auth().currentUser?.uid;
        db.collection("users").doc(userId)
            .collection("tasks").doc(userTaskId)
            .update({
                active: newState
            })
    } catch(error) {
        console.error("Error adding document: ", error);
    }
}