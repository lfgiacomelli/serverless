export default function handler(req, res) {
  const a = parseInt(req.query.a || "0");
  const b = parseInt(req.query.b || "0");
  res.status(200).json({ resultado: a + b });
}