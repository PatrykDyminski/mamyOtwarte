import getSheet from '@/lib/db-get-sheet';
import getDB from '@/lib/get-db';

export default async function getPlace(req, res) {
  if (req.method == 'GET') {
    const db = getDB();
    var data = await getSheet(req.query, true);
    console.log(data.length);
    res.status(200).json(data);
  }
  else {
      res.status(400)
  }
}