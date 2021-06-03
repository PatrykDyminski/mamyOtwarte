const firebase = require('firebase');
import getPlaces from '@/lib/get-places';

if(firebase.apps.length == 0){
  console.log("firebase apps 0");
}

export default async function signin(req, res) {
  
  var user = firebase.auth().currentUser;
  var data;
  if (user) {
   console.log(user.email);
   data = await getPlaces(req.query, true, true);
  } else {
    console.log("no user");
  }
  
  res.status(200).json(data);

}