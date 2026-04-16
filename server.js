const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Fake Login Daten
const USER = {
  username: "admin",
  password: "1234"
};

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log("Server läuft auf Port " + PORT);
});
