import Head from 'next/head'
const { GoogleSpreadsheet } = require('google-spreadsheet');

export default async function helloAPI(req, res) {
  const { GoogleSpreadsheet } = require('google-spreadsheet');

  

  //async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet('1AMPlXBjPoB_V0o6Va52reO24gDgn4qP5GgFr14aMD6Y');
  //await doc.useServiceAccountAuth(creds);

  /*await doc.useServiceAccountAuth({
    ///client_email: creds.client_email,
    //private_key: creds.private_key,
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo();
  console.log(doc.title)

  var newSheet = await doc.sheetsByIndex[1]
  var name;
  const rows = await newSheet.getRows();
  name = rows[1].name;*/
  res.status(200).json({ name: 'Test' })
}
