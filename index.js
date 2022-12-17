const express = require("express");
const { contentType } = require("express/lib/response");
const app = express();

app.listen(3001, console.log("server is running"));

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./contact-me.html", { root: __dirname });
});

app.get("*", (req, res) => {
  res.sendFile("./404.html", { root: __dirname });
});
