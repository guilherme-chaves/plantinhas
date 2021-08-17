import { toRefs, reactive } from "vue";
import firebase from "firebase";
import "firebase/database";
import { initializeApp } from "./.env.firebase";
import { UserData } from "@/store/interfaces/user";

initializeApp();

type TState = {
    error: Error | null;
    loading: boolean;
    user: firebase.auth.UserCredential | null | firebase.User;
    userData: UserData | null;
    initialized: boolean;
};

const state = reactive<TState>({
    error: null,
    loading: false,
    user: null,
    userData: null,
    initialized: false
});

export default function() {
    const getUserData = (): UserData | null => {
        firebase
            .database()
            .ref('users/' + firebase.auth().currentUser?.uid)
            .once('value')
            .then(
            (snapshot) => {
                const data = snapshot.val();
                const userData: UserData = {
                    userId: data.userId,
                    userName: data.userName,
                    userEmail: data.userEmail,
                    userPoints: data.userPoints,
                    userLevel: data.userLevel,
                    firstLogin: data.firstLogin
                }
                return userData;
            },
            (error) => {
                throw error;
            });
        return null;
    }

    const setUserData = (name: string): UserData | null => {
        const defaultUserData: UserData = {
            userId: firebase.auth().currentUser?.uid ?? '',
            userName: name,
            userEmail: firebase.auth().currentUser?.email ?? '',
            userLevel: 0,
            userPoints: 0,
            firstLogin: true
        }
        firebase
            .database()
            .ref('users/' + firebase.auth().currentUser?.uid)
            .set(defaultUserData);
        return defaultUserData;
    }

    const login = async (username: string, password: string) => {
        state.loading = true;
        try {
            try {
                const user = await firebase
                    .auth()
                    .signInWithEmailAndPassword(username, password);
                state.error = null;
                state.loading = false;
                state.user = user;
                state.userData = getUserData();
                return user;
            } catch (error) {
                state.error = error;
                state.loading = false;
                throw error;
            }
        } catch (error) {
            state.error = error;
            state.loading = false;
            throw error;
        }
    };

    const logout = async () => {
        state.loading = true;
        try {
            try {
                await firebase
                    .auth()
                    .signOut();
                state.error = null;
                state.loading = false;
                state.user = null;
                state.userData = null;
            } catch (error) {
                state.loading = false;
                state.error = error;
            }
        } catch (error) {
            state.loading = false;
            state.error = error;
        }
    }

    const signIn = async (email: string, password: string, name: string) => {
        state.loading = true;
        try {
            try {
                const user = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                state.user = user;
                state.error = null;
                state.loading = false;
                state.userData = setUserData(name);
            } catch (error) {
                state.error = error;
                state.loading = false;
                throw error;
            }
        } catch (error) {
            state.error = error;
            state.loading = false;
            throw error;
        }
    }

    const authCheck = () => {
        return new Promise((resolve) => {
            state.loading = true;
            !state.initialized &&
             firebase.auth().onAuthStateChanged(async (_user) => {
                if(_user) {
                    state.user = _user;
                    state.userData = getUserData();
                } else {
                    state.user = null;
                }
                state.loading = false;
                state.initialized = true;
                resolve(true);
             })
        })
    }

    return {
        ...toRefs(state),
        login,
        logout,
        signIn,
        authCheck
    }
}