const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello new msg");
});

app.listen(port, () => {
  console.log(`Example application listening on port ${port}`);
});
