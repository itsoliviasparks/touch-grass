import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6GE4qD3Vum4_6mitA_SwW99U_d5--_Yk",
  authDomain: "touch-grass-882fb.firebaseapp.com",
  projectId: "touch-grass-882fb",
  storageBucket: "touch-grass-882fb.appspot.com",
  messagingSenderId: "289620322216",
  appId: "1:289620322216:web:2eafefffbe501ec079df9d"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;