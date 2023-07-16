import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCUN_kMYKN64crStOwBKDO_OpKKPBLKWSs",
    authDomain: "linkedin-clone-1e3f4.firebaseapp.com",
    projectId: "linkedin-clone-1e3f4",
    storageBucket: "linkedin-clone-1e3f4.appspot.com",
    messagingSenderId: "107582667966",
    appId: "1:107582667966:web:e086472bc95a86a010b2ef"
  };

  //connect local server with online server
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  //gets the firebase database
  const db=firebaseApp.firestore();

  //authentication
  const auth=firebase.auth();

  export { db,auth }