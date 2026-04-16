const express = require("express");
const path = require("path");

const app = express();

// 🔥 WICHTIG für Render!
const PORT = process.env.PORT || 3000;

// Statische Dateien (index.html)
app.use(express.static(path.join(__dirname, "public")));

// TEST ROUTE (wichtig zum Debuggen)
app.get("/test", (req, res) => {
  res.send("Server läuft richtig ✅");
});

// Fallback (verhindert Lade-Loop!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server starten
app.listen(PORT, () => {
  console.log("Server läuft auf Port " + PORT);
});
