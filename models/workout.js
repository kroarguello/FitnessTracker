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
       duration:{type: Number, required:true},
       weight:{type: Number},
       reps:{type: Number},
       sets:{type: Number},
       distance:{type: Number},
      // resistanceDuration:{type: Number,trim:true, required:true}

    }]
//}//,
/*{
  toJSON: {
    virutals:true
  }
}
);

WorkoutSchema.virtual("duration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);*/
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;