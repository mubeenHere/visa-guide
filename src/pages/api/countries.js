export default function handler(req, res) {
  res.status(200).json({
    work: ["Jobs in UAE", "Jobs in USA", "Jobs in Canada", "Jobs in Australia"],
    study: [
      "Study in UAE",
      "Study in USA",
      "Study in Canada",
      "Study in Australia",
    ],
  });
}
