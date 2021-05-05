import auth from '@/lib/authenticate';
import setParams from '@/lib/api-functions/set-sheet-params';
import toJSONstr from '@/lib/api-functions/to-json-str';


export default async function getPlaces(req, res) {
  if (req.method == 'GET') {
    const doc = auth();
    await doc.loadInfo();
    var sheet = doc.sheetsByTitle['Zweryfikowane'];

    await setParams(sheet, req.query);
    
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);

    const rows = await sheet.getRows({ offset: offset, limit: limit });

    var placesStr = '{"places": []}';
    var placesJSON = JSON.parse(placesStr);
    rows.forEach(row => placesJSON['places'].push(toJSONstr(row)));

    res.status(200).json(placesJSON)
  }
  else {
    res.status(400)
  }
}