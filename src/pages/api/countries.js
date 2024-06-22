export default function handler(req, res) {
  res.status(200).json({
    work: ["UAE", "USA", "Canada", "Australia"],
    study: ["UAE", "USA", "Canada", "Australia"],
  });
}
