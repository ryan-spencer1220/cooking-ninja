import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCn5IazE7k89VXBrtfqGDvsoLLypACJgg",
  authDomain: "cooking-ninja-site-a86a6.firebaseapp.com",
  projectId: "cooking-ninja-site-a86a6",
  storageBucket: "cooking-ninja-site-a86a6.appspot.com",
  messagingSenderId: "701314631473",
  appId: "1:701314631473:web:657b625ea227be5ee51210",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
