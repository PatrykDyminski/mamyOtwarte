import auth from '@/lib/authenticate';
import setParams from '@/lib/api-functions/set-sheet-params';
import toJSONstr from '@/lib/api-functions/to-json-str';

export default async function getPlace(req, res) {
  if (req.method == 'GET') {
    const doc = auth();
    await doc.loadInfo();
    var sheet = doc.sheetsByTitle['ZweryfikowaneFiltr'];

    await setParams(sheet, req.query);

    const rows = await sheet.getRows()
    var placesStr = '{"places": []}';
    var placesJSON = JSON.parse(placesStr);
    rows.forEach(row => {
      if(row.name != "" && !(row.name == "name" && row.type == "type")) {
        placesJSON['places'].push(toJSONstr(row));
      }
    });
  
    res.status(200).json(placesJSON);
  }
  else {
      res.status(400)
  }
}