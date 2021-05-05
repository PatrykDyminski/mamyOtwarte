import auth from '@/lib/authenticate';

export default async function newPlace(req, res) {
  if (req.method == 'POST') {
    const doc = auth();
    await doc.loadInfo();
    var sheet = doc.sheetsByTitle['Nowe'];
    sheet.addRow({
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