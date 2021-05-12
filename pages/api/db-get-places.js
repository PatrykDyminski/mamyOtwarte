import getDB from '@/lib/get-db';

export default async function getPlaces(req, res) {
  if (req.method == 'GET') {
    const db = getDB();
    var places = [];
    const snapshot = await db.collection('places').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        places.push(doc.data());
      })
    });
    /*const snapshot = await db.ref('places').get();
      snapshot.forEach(p => {
      console.log(p.val());
    });*/
    console.log(places);
    res.status(200).json(places);
  }
  else {
    res.status(400)
  }
}