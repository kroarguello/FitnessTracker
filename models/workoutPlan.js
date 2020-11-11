//schema

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day:{
    type: Date,
    default: Date.now
    },
    exercise: [{
       type: {},
       name:{},
       duration:{},
       weight:{},
       reps:{},
       set:{},
       distance:{},
       resistanceDuration:{}

    }]



})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;