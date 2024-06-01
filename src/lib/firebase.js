import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey:"AIzaSyAAeQwBLDcPMFaKv_ojeAL_j7nrzKR9R_Y",
  authDomain: "reactchatapp-d8221.firebaseapp.com",
  projectId: "reactchatapp-d8221",
  storageBucket: "reactchatapp-d8221.appspot.com",
  messagingSenderId: "524669119606",
  appId: "1:524669119606:web:460ae9344774bd59a4c357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()