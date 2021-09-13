import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCBZ4szBMfcry6Fea82YaMeNzgA7yk5-Os",
    authDomain: "waebentunes.firebaseapp.com",
    projectId: "waebentunes",
    storageBucket: "waebentunes.appspot.com",
    messagingSenderId: "777059933603",
    appId: "1:777059933603:web:b1b4053893fecf75584e16",
    measurementId: "G-FBJSVNBDNL"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export default firestore;
