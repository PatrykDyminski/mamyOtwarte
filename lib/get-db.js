//import * as firebase from "firebase";
const admin = require('firebase-admin');
//const serviceAccount = require('firebasedata.json');
const serviceAccount = {
  projectId: process.env.FIRESTORE_PROJECT_ID,
  clientEmail: process.env.FIRESTORE_CLIENT_EMAIL,
  privateKey: process.env.FIRESTORE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
}
if(admin.apps.length == 0){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

export default function getDB() {
  console.log(admin.apps.length);
  return db;

  /*if(firebase.apps.length == 0) {
    const firebaseConfig = {
      apiKey: "AIzaSyALb_ddJ3nLdyp4uhruWVUilmF9wRNyMBM",
      authDomain: "coastal-hue-307911.firebaseapp.com",
      databaseURL: "https://coastal-hue-307911-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "coastal-hue-307911",
      storageBucket: "coastal-hue-307911.appspot.com",
      messagingSenderId: "536343522259",
      appId: "1:536343522259:web:f28f97866769b42e501d26"
    };
    firebase.initializeApp(firebaseConfig);
  }
  return firebase.database();*/
}