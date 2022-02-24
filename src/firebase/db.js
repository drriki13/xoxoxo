import firebase from "firebase/compat";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBXa3HoL4SmZ7Hh9X0WINa_derUfTuzW5s",
    authDomain: "xoxoxo-game.firebaseapp.com",
    projectId: "xoxoxo-game",
    storageBucket: "xoxoxo-game.appspot.com",
    messagingSenderId: "77268178497",
    appId: "1:77268178497:web:cc10dd4904b22e08e858c0"
};

export const storage = firebase.initializeApp(firebaseConfig).firestore();