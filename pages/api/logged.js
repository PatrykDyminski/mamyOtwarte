const firebase = require('firebase');

if(firebase.apps.length == 0){
  console.log("firebase apps 0");
}

export default async function signin(req, res) {
  
  var user = firebase.auth().currentUser;
  if (user) {
   console.log(user.email);
  } else {
    console.log("no user");
  }
  
  res.status(200).json(user);
}