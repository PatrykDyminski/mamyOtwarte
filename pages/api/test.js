import Head from 'next/head'
const { GoogleSpreadsheet } = require('google-spreadsheet');

function printPlace(place) {
  console.log(`Name: ${place.name}`);
  console.log(`Type: ${place.type}`);
}

export default async function helloAPI(req, res) {
  const { GoogleSpreadsheet } = require('google-spreadsheet');

  //async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet('1AMPlXBjPoB_V0o6Va52reO24gDgn4qP5GgFr14aMD6Y');

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
  })
  await doc.loadInfo();
  console.log(doc.title)

  var sheet = await doc.sheetsByTitle['Zweryfikowane'];
  var name;
  const rows = await sheet.getRows();
  name = rows[0].name;

  rows.forEach(row => printPlace(row))

  res.status(200).json({ name: name })
}
