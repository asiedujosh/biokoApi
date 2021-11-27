const express = require("express");
const app = express();
const authRoute = require("./routes/api");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

//const mongoURI = "mongodb://localhost:27017/bioko_farms";
const mongoURI =
  "mongodb+srv://asiedujosh:Katalambano90@biokofarm.qf1kl.mongodb.net/BiokoFarm?retryWrites=true&w=majority";

mongoose.connect(
  mongoURI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      process.exit(1);
      console.log("Could not connect to the database");
    } else console.log("Database is connected");
  }
);

//Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(authRoute);

app.listen(port, () => console.log(`You are listening to port ${port}`));
