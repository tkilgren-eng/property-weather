export default async function handler(req, res) {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0hC5wFB-bqRFwadbgsMia_EqT73Kfo9UboTDmNWZbEu9uP89chRv0AU0iRyYqi_Ff/exec";
  try {
    const response = await fetch(SCRIPT_URL, { redirect: "follow" });
    const data = await response.json();
    res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
