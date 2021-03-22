var doc;
export function auth() {
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    })
}
export { doc };