import firebase from "firebase/app";
import "firebase/database";

let firebaseConfig = {
    apiKey: "AIzaSyCPAFFIzE2rCtcaRV2KZPIrtQwqFN4wsog",
    authDomain: "no-future-c6f84.firebaseapp.com",
    projectId: "no-future-c6f84",
    storageBucket: "no-future-c6f84.appspot.com",
    messagingSenderId: "312683072992",
    appId: "1:312683072992:web:b587da428536de3b00ef85",
    measurementId: "G-ZXM808NVTY"
};


firebase.initializeApp(firebaseConfig);

export default firebase.database();