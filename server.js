const express = require("express");
const mongoose = require("mongoose");


const Example = require("./workoutPlan.js");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
