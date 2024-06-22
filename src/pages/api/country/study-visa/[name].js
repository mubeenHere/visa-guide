// /api/country/study_visa/[name].js
import data from "@/constants/study_visa.json";

export default function handler(req, res) {
  const { name } = req.query;
  const country = data?.find((x) => x?.country?.includes(name));
  if (country) {
    res.status(200).json(country);
  } else {
    res.status(404).json({ error: "Country not found" });
  }
}
