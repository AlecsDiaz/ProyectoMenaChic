import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCe4aorFHRtsGB2WSGH-pD8DwKudCRRp0M",
    authDomain: "alex-compe.firebaseapp.com",
    projectId: "alex-compe",
    storageBucket: "alex-compe.appspot.com",
    messagingSenderId: "824826093966",
    appId: "1:824826093966:web:82354d39c2765c63e644df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });