import getSheet from '@/lib/get-sheet';

export default async function getPlace(req, res) {
  if (req.method == 'GET') {
    var data = await getSheet(req.query, "ZweryfikowaneFiltr");
    res.status(200).json(data[0]);
  }
  else {
      res.status(400)
  }
}