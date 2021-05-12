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
  return db;

  /*if(firebase.apps.length == 0) {
    const firebaseConfig = {
    };
    firebase.initializeApp(firebaseConfig);
  }
  return firebase.database();*/
}