import db from '@/lib/db';

export default async function getPlaces(req, res) {
  if (req.method == 'GET') {
    var places = [];

    await db.collection('places')
      .where('verified', '==', true)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          places.push(doc.data());
        })
      });

    res.status(200).json(places);
    
  } else {
    res.status(400)
  }
}