import fs from "fs";
import path from "path";

const dictPath = path.join(process.cwd(), "dictionary.json");
const BRAINROT_DICT = JSON.parse(fs.readFileSync(dictPath, "utf-8"));

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "No text provided" });
  }

  // Translate text
  const words = text.split(/\s+/);
  const translated = words.map(word => {
    const cleaned = word.toLowerCase().replace(/[!?.,]/g, "");
    return BRAINROT_DICT[cleaned] || word;
  });

  res.status(200).json({ translated: translated.join(" ") });
}
