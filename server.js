const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const usersRouter = require("./routes/usersRouter");
const tickersRouter = require("./routes/tickersRouter");
const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/tickers", tickersRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is up and listening on ${PORT}`);
});
