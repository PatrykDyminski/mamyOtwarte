import { auth, doc } from '@/lib/authenticate';

export default async function newPlace(req, res) {
    if (req.method == 'POST') {
        auth();
        await doc.loadInfo();
        var sheet = await doc.sheetsByTitle['Nowe'];
        sheet.addRow({ 
            name: req.body.name, 
            description: req.body.description 
        })
        res.status(200).json({ name: req.body.name })
    }
    else {
        res.status(400)
    }
}