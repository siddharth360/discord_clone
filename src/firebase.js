import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBRLWFPpp79gfc5cHQGyTcSLRAHS8FpLAE",
    authDomain: "discord-clone-908a0.firebaseapp.com",
    databaseURL: "https://discord-clone-908a0.firebaseio.com",
    projectId: "discord-clone-908a0",
    storageBucket: "discord-clone-908a0.appspot.com",
    messagingSenderId: "362864070324",
    appId: "1:362864070324:web:e6205a449a5097af0911e1",
    measurementId: "G-7ZFPMJQFPB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;