import auth from '@/lib/authenticate';
import setParams from '@/lib/api-functions/set-sheet-params';
import toJSONstr from '@/lib/api-functions/to-json-str';

export default async function getSheet(query, sheetname) {
  const doc = auth();
  await doc.loadInfo();

  var sheet = doc.sheetsByTitle[sheetname];

  var offset;
  var limit;

  if(sheetname!="Zweryfikowane") {
    await setParams(sheet, query);
    offset = parseInt(query.offset);
    limit = parseInt(query.limit);
  }

  const rows = await sheet.getRows({offset: offset, limit: limit})
  var places= [];
  rows.forEach(row => {
    if(row.name != "" && row.name!="name") {//!(row.name == "name" && row.type == "type")) {
      places.push(toJSONstr(row));
    }
  });

  return places;
}