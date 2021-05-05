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
    var place;
    rows.forEach(row => {
      if(row.name != "" && !(row.name == "name" && row.type == "type")) {
        place = toJSONstr(row);
      }
    });
  
    res.status(200).json(place);
  }
  else {
      res.status(400)
  }
}