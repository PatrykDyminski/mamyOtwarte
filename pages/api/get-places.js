import getPlaces from '@/lib/get-places';

export default async function getVerifiedPlaces(req, res) {
  if (req.method == 'GET') {
    var data = await getPlaces(req.query, false);
    res.status(200).json(data);
  } else {
    res.status(400)
  }
}