const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("EXPRESS JS");
});
app.listen(3000);
