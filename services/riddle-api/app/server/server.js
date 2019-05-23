"use strict";

//require
var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  fs = require("fs");

require("dotenv").config({path: path.resolve("server/", ".env")});
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Charge Data Base
const data_base = JSON.parse(fs.readFileSync("./server/data_base.json"));
const max_riddle = data_base.length;
console.log(data_base[4]);

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type"
    );
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    res.header("Content-Type", "application/json");
    console.log("Headers added to the request");
    next();
  });
  app.use("/image", express.static(path.join(__dirname, "img")));https://prod.liveshare.vsengsaas.visualstudio.com/join?23379189DEE814F657AA61222705FE91C1C9

  app.post("/generateGame", (req, res) => {
  if (req.body) {
    console.log(req.body);
  }

  var number_of_game = req.body.number_of_game || 5,
    answer_by_game = req.body.answer_by_game || 4,
    levels = [],
    good_ids = [];
  console.log("\n\n*** Creating new game ***");
  var i = 1;
  while (levels.length != number_of_game) {
    var level = generateLevel(answer_by_game);

    if (!good_ids.includes(level.good_answer)) {
      console.log("Partie " + i);
      i++;
      levels.push(level);
      good_ids.push(level.good_answer);
    }
  }
  res.send(levels).end();
  levels = [];
  good_ids = [];
});

app.get("/images/:id", (req, res) => {
  console.log("Getting images", req.params.id);

  res.sendFile(path.resolve("server/", "img/", req.params.id + ".jpg"));
  res.end();
});

app.listen(process.env.APP_PORT, function() {
  console.log("Server listening on  : " + process.env.APP_PORT);
});

function getRandomInt(max, condition) {
  if (condition) {
    var result = 0;
    do {
      result = Math.floor(Math.random() * (Math.floor(max) - 1)) + 1;
    } while (condition.includes(result));
    return result;
  } else {
    return Math.floor(Math.random() * (Math.floor(max) - 1)) + 1;
  }
}

function generateLevel(nb) {
  var int_tab = [],
    riddle_array = [],
    level = {};

  while (int_tab.length != nb) {
    int_tab.push(getRandomInt(max_riddle, int_tab));
  }
  for (let k = 0; k < int_tab.length; k++) {
    riddle_array.push(data_base[int_tab[k]]);
  }

  level.good_answer =
    riddle_array[Math.floor(Math.random() * riddle_array.length)].id;
  level.answers = riddle_array;
  console.log("Created level : ", level);

  return level;
}
