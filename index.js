const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/transform", (req, res) => {
  const { words } = req.body;

  if (!words) {
    return res.status(400).json({ error: "Error" });
  }

  const word = words.split(/\s+/);
  const word_length = word.length;
  const unique_words = [...new Set(word.map((i) => i.toLowerCase()))];
  const reversed_word = word.reverse().join(" ");

  res.json({
    word_length,
    unique_words,
    reversed_word,
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
