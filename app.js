const express = require("express");
const app = express();
const path = require("node:path");
const { indexRouter } = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/", messageRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(`Server Error ${err.message}`);
});

app.listen(port, () => {
  console.log(`Port is alive on: ${port}`);
});
