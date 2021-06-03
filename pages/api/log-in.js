export default async function logIn(req, res) {
  const r = req.body.email+'&'+req.body.password
  if (req.method == 'POST' && r == process.env.ACCOUNT) {
    res.status(200).json({ path: process.env.VERIFY })
  }
  else {
    res.status(400).end();
  }
}