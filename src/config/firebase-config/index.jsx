import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDnEnynoj5l_3Me88qJ294T05G_uStWQ8g",
  authDomain: "react-firebase-database-5a84d.firebaseapp.com",
  databaseURL: "https://react-firebase-database-5a84d-default-rtdb.firebaseio.com",
  projectId: "react-firebase-database-5a84d",
  storageBucket: "react-firebase-database-5a84d.appspot.com",
  messagingSenderId: "707956654762",
  appId: "1:707956654762:web:2996b7170d4075bf5a46d3"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app)
const database = getDatabase(firebase_app)

export {firebase_app, auth, database}
