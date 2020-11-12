//schema

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day:{
    type: Date,
    default: Date.now
    },
    exercises: [{
       type: {type: String, required:true},
       name:{type: String, trim:true,required:true},
       duration:{type: Number, trim:true, required:true},
       weight:{type: Number,trim:true, required:true},
       reps:{type: Number, trim:true,required:true},
       sets:{type: Number,trim:true, required:true},
      // distance:{type: Number,trim:true, required:true},
      // resistanceDuration:{type: Number,trim:true, required:true}

    }]



})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;