const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(cors());
app.options("*", cors());

app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/route"));

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build,index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`server is runnig at port no ${PORT}`);
});
