import getSheet from '@/lib/db-get-sheet';

export default async function getPlace(req, res) {
  if (req.method == 'GET') {
    var data = await getSheet(req.query, true);
    console.log(data[0]);
    console.log("slug");
    res.status(200).json(data[0]);
  }
  else {
      res.status(400)
  }
}