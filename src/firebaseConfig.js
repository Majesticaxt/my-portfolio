// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBUlisnRrQCcBSuZ4qGIhWxdvwaD9ec5Sw",
  authDomain: "blog-b4125.firebaseapp.com",
  projectId: "blog-b4125",
  storageBucket: "blog-b4125.appspot.com",
  messagingSenderId: "192450480451",
  appId: "1:192450480451:web:7e1c2dca9ed3871274c7f6",
  measurementId: "G-0ZERKWX39Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
