const express = require("express");
const app = express();
const port = Number(process.env.PORT) || 4000;

const indexRoute = require("./routes/index");

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`Exercise Four is running at localhost:${port}`);
});
