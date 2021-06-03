const firebase = require('firebase');

var firebaseConfig = {
  apiKey: process.env.FC_APIKEY,
  authDomain: process.env.FC_AUTH,
  databaseURL: process.env.FC_DB,
  projectId: process.env.FIRESTORE_PROJECT_ID,
  storageBucket: process.env.FC_STORAGE,
  messagingSenderId: process.env.FC_MESS,
  appId: process.env.FC_AID,
};
// Initialize Firebase
if(firebase.apps.length == 0){
  firebase.initializeApp(firebaseConfig);
}

export default async function signin(req, res) {
  
  var email = req.query.email;
  var password = req.query.password;

  var user;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential)=> {
    console.log("Zalogowano");
    user = "user"
    /*firebase.auth().signOut().then(() => {
      console.log("Wylogowano")
    }).catch((error) => {
      console.log(error.message);
    })*/
  })
  .catch((error) => {
    res.status(200).json(error);
    console.log(error.message);
  })
  res.status(200).json(user);
} 