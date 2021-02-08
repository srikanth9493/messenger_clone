import  firebase from 'firebase'
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAxc5YupGWxN8249aVVRqGMi72sc6uqvjY",
    authDomain: "facebook-messanger-clone-7b94e.firebaseapp.com",
    projectId: "facebook-messanger-clone-7b94e",
    storageBucket: "facebook-messanger-clone-7b94e.appspot.com",
    messagingSenderId: "755914153040",
    appId: "1:755914153040:web:cc67e6cb6044ef55b60555",
    measurementId: "G-5YW0LW6QMX"
    })



const db=firebaseApp.firestore()
export default db;