import fs from "fs";
import path from "path";

const dictPath = path.join(process.cwd(), "dictionary.json");
 // replaced ts idk figure it out yourself
const BRAINROT_DICT = JSON.parse(fs.readFileSync(dictPath, "utf-8"));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  let body = "";
  for await (const chunk of req) {
    body += chunk;
  }

  const { text } = JSON.parse(body || "{}");
  if (!text) {
    return res.status(400).json({ error: "No text provided" });
  }

  // ... translation logic ...
}

