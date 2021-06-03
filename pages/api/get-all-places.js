import getPlaces from '@/lib/get-places';
import getDB from '@/lib/get-db';

export default async function getPlace(req, res) {
  if (req.method == 'GET') {
    const db = getDB();
    var data = await getPlaces(req.query, true, true);
    res.status(200).json(data);
  }
  else {
      res.status(400)
  }
}