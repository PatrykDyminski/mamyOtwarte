import getDB from '@/lib/get-db';

export default async function newPlace(req, res) {
  if (req.method == 'POST') {
    const db = getDB();
    /*const db = getDB();
    db.ref('places/' + new Date().getTime()).set({
      name: req.body.name,
    })*/
    const docRef = db.collection('places').doc(new Date().getTime().toString());
    await docRef.set({
      name: req.body.name,
      description: req.body.description,
      telephone: req.body.telephone,
      website: req.body.website,
      city: req.body.city,
      street: req.body.street,
      streetnr: req.body.streetnr,
      lat: req.body.lat,
      lng: req.body.lng
    })
    res.status(200).json({ name: req.body.name })
  }
  else {
    res.status(400)
  }
}