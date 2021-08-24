import firebase from 'firebase/app';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyA-vdH9-YlaP2icPtzDnCTci5ikHawRnjs",
    authDomain: "redpenguin-plantinhas.firebaseapp.com",
    databaseURL: "https://redpenguin-plantinhas-default-rtdb.firebaseio.com",
    projectId: "redpenguin-plantinhas",
    storageBucket: "redpenguin-plantinhas.appspot.com",
    messagingSenderId: "963703952659",
    appId: "1:963703952659:web:2796808bd1b0d39038b6e6",
    measurementId: "G-0211CYB702"
};

export const initializeApp = () => {
    if (firebase.apps.length === 0) {
        const app = firebase.initializeApp(FIREBASE_CONFIG);
        return { app }
    }
}