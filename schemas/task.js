var mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

    body:{
        type: String,
        required: true,
    }
});


var tasks =  mongoose.model("tasks", tasksSchema);
module.exports = tasks;