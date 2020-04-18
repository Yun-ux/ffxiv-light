const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const port = 5001;
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
let MongoClient = require("mongodb").MongoClient;
require("dotenv").config({ path: __dirname + "/.env" });
const api_key = process.env["FF_API_KEY"];

app.use(
  cors({
    origin: ["http://localhost:4200", "http://127.0.0.1:4200"],
    credentials: true,
  }),
);
app.use(express.json());
// Connect to the db
app.post('/createaccount', function(request,response) {
  MongoClient.connect("mongodb://localhost:27017/users",{useNewUrlParser: true, useUnifiedTopology: true}, function (err, dbMongo) {
    let userName = req.query.userName;
})


  
// Api request for hero name
app.get("/character", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  const url = `https://xivapi.com/character/search?name=${firstName}+${lastName}&private_key=${api_key}`;
  const lilUrl = "https://xivapi.com/character/";
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.Results[0].ID;
    })
    // need to handle ID not found error
    .then((result) => {
      fetch(lilUrl + result)
        .then((res) => res.json())
        .then((data) => {
          res.send(data);
        });
    })
    .catch((err) => console.log("error : " + err));
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
