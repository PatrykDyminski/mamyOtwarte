import Head from 'next/head'
import auth from '@/lib/authenticate';

function toJSONstr(place) {
    return ({
      "name": place.name, 
      "type": place.type, 
      "opis": place.opis
    });
}

export default async function listPlacesFilter(req, res) {
  if (req.method == 'GET') {
    const doc = auth();
    await doc.loadInfo();
    var sheet = doc.sheetsByTitle['ZweryfikowaneFiltr'];
     
    const type = req.query.type;
    const name = req.query.name;
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit)
    
    await sheet.loadCells('E1:E2');
    sheet.getCellByA1('E1').value = type;
    sheet.getCellByA1('E2').value = name;
    await sheet.saveUpdatedCells();

    const rows = await sheet.getRows({offset: offset, limit: limit})
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