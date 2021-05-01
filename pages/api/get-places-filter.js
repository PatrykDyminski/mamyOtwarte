import auth from '@/lib/authenticate';

function toJSONstr(place) {
    return ({
      "name": place.name, 
      "type": place.type, 
      "opis": place.opis,
      "telephone": place.telephone,
      "website": place.website,
      "city": place.city,
      "street": place.street,
      "streetnr": place.streetnr,
      "lat": place.lat,
      "lng": place.lng
    });
}

export default async function getPlacesFilter(req, res) {
  if (req.method == 'GET') {
    const doc = auth();
    await doc.loadInfo();
    var sheet = doc.sheetsByTitle['ZweryfikowaneFiltr'];
     
    const type = req.query.type;
    const name = req.query.name;
    const street = req.query.street;
    const city = req.query.city;
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit)
    
    await sheet.loadCells('L1:L2');
    sheet.getCellByA1('L1').value = type;
    sheet.getCellByA1('L2').value = name;
    await sheet.saveUpdatedCells();

    await sheet.loadCells('N1:N2');
    sheet.getCellByA1('N1').value = street;
    sheet.getCellByA1('N2').value = city;
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