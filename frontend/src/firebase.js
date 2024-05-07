import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtzcB4zHt8SeWRsxGCTyq6qraSjtgAn_0",
  authDomain: "ayestate-4d467.firebaseapp.com",
  projectId: "ayestate-4d467",
  storageBucket: "ayestate-4d467.appspot.com",
  messagingSenderId: "79820850531",
  appId: "1:79820850531:web:be6e9dd389f8145173ff56",
  measurementId: "G-ZRDY1WE8ML"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
const db = getFirestore(app);
export default db;