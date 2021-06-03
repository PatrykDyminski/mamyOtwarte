const firebase = require('firebase');

if(firebase.apps.length == 0){
  console.log("firebase apps 0");
}

export default async function signin(req, res) {
  firebase.auth().signOut().then(() => {
    console.log("Wylogowano")
  }).catch((error) => {
    console.log(error.message);
  })
  res.status(200).json(user);
}