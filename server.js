const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//const db = require("./models");

//express

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// connection and Mongodb
var PORT = process.env.PORT || 3000;

//const Workout = require("./workoutPlan.js");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

app.get("/exercise", ({ body }, res) => {
    console.log("new workout");

    //User.create(body)
    //  .then(dbUser => {
    //    res.json(dbUser);
    //  })
    //  .catch(err => {
    //    res.json(err);
    //  });
  });

  app.get("/exercise?", ({ body }, res) => {
      console.log("continue workout");
    //User.create(body)
    //  .then(dbUser => {
    //    res.json(dbUser);
    //  })
    //  .catch(err => {
    //    res.json(err);
    //  });
  });

  



  app.get("/stats", ({ body }, res) => {
    console.log("STATS");
    //User.create(body)
    //  .then(dbUser => {
    //    res.json(dbUser);
    //  })
    //  .catch(err => {
    //    res.json(err);
    //  });
  });



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
