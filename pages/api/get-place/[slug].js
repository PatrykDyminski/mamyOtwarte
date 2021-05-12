import getSheet from '@/lib/db-get-sheet';

export default async function getPlace(req, res) {
  if (req.method == 'GET') {
    var data = await getSheet(req.query, true);
    res.status(200).json(data[0]);
  }
  else {
      res.status(400)
  }
}