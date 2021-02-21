import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAYNf_bSpC0DCLfA7bZKtNEgJGaVZO_8DU",
    authDomain: "crudreact-d34bc.firebaseapp.com",
    projectId: "crudreact-d34bc",
    storageBucket: "crudreact-d34bc.appspot.com",
    messagingSenderId: "842371970077",
    appId: "1:842371970077:web:22fbc32f6c5fad0fabc2f4"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)