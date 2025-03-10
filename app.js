const express = require("express");
const app = express();
const path = require("path");

// Serve static files
app.use(express.static(path.join(__dirname, "frontend")));

// Your existing routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/home.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/contact.html"));
});
app.get("/donate", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/donate.html"));
});
app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/gallery.html"));
});
app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/project.html"));
});
app.get("/what-on", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/what-on.html"));
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
