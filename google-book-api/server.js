const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api/index");
const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


app.listen(PORT, () =>
  console.log(`listening on PORT ${PORT}!`)
);