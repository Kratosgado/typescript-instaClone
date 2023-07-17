import { initializeApp, getApps } from "firebase/app";

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, User } from "firebase/auth";

import {
    getFirestore, collection, addDoc, setDoc, getDoc, getDocs, doc, onSnapshot, serverTimestamp, query, orderBy, collectionGroup, arrayUnion, arrayRemove, updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvbA1p_3E-UA2rB8SMOk57wV5bGNhQTKM",
    authDomain: "instagramclone-ace32.firebaseapp.com",
    projectId: "instagramclone-ace32",
    storageBucket: "instagramclone-ace32.appspot.com",
    messagingSenderId: "999955971826",
    appId: "1:999955971826:web:3247b8069d85c4f838da6b",
    measurementId: "G-VWP1H8NZP1"
};

if (!getApps().length) initializeApp(firebaseConfig)

export {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    collection,
    collectionGroup,
    addDoc,
    getFirestore,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
    getDoc,
    getDocs,
    setDoc,
    doc,
    arrayRemove,
    arrayUnion,
    updateDoc,
    User
}