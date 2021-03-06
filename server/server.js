const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const organizationRoute = require("./routes/organization");
const singupAndLoginRoute = require("./routes/singupAndLogin");
const donationRoute = require("./routes/donation");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

//app.use(express.static("public"));

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/organization", organizationRoute);
app.use("/", singupAndLoginRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
