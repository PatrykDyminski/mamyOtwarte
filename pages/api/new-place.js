import db from '@/lib/db';

export default async function newPlace(req, res) {
  if (req.method == 'POST') {
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
      lng: req.body.lng,
      slug: req.body.name.replace(/\s+/g, '-').toLowerCase(),
      verified: false
    })
    res.status(200).json({ name: req.body.name })
  }
  else {
    res.status(400)
  }
}