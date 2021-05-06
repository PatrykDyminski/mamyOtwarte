import getSheet from '@/lib/get-sheet';

export default async function getPlaces(req, res) {
  if (req.method == 'GET') {
    var data = await getSheet(req.query, "Zweryfikowane");
    res.status(200).json(data);
  }
  else {
    res.status(400)
  }
}