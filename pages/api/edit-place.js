import db from '@/lib/db';
const firebase = require('firebase');

export default async function verify(req, res) {
  if (req.method == 'POST') {
    const places = db.collection('places')
    var slug = req.body.slug;

    await places.where('slug', '==', slug).get().then(snapshots => {
      if (snapshots.size > 0) {
        snapshots.forEach(p => {
          places.doc(p.id).update({
            name: req.body.name,
            description: req.body.description,
            telephone: req.body.telephone,
            website: req.body.website,
            city: req.body.city,
            street: req.body.street,
            streetnr: req.body.streetnr,
            slug: req.body.name.replace(/\s+/g, '-').toLowerCase(),
            verified: req.body.verified,
            type: req.body.type,
          })
        })
        res.status(200).json({ slug });
      }
      else 
        res.status(400);
    });
  }
  else {
    res.status(400)
  }
}