const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//const db = require("./models");
const path = require("path");

//express
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// connection and Mongodb
var PORT = process.env.PORT || 3000;

//this is in seed.js

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


//const { update } = require("./models/workoutPlan");
//const { Workout } = require("./models");

// ROUTER


app.get("/exercise", ({ body }, res) => {
    console.log("new workout");
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
    
  });

  app.get("/stats", ({ body }, res) => {
    console.log("STATS");
    res.sendFile(path.join(__dirname, "./public/stats.html"))
    
  });

 


 //api

 
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(event => {
            res.json(event);
        })
        .catch(err => {
            res.json(err);
        });
});


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
