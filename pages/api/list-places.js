import auth from '@/lib/authenticate';

function toJSONstr(place) {
  return ({
    "name": place.name,
    "type": place.type,
    "opis": place.opis
  });
}

export default async function listPlaces(req, res) {
  if (req.method == 'GET') {
    const doc = auth();
    await doc.loadInfo();
    var sheet = doc.sheetsByTitle['Zweryfikowane'];

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