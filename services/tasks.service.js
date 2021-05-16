const tasksModel = require("../models/tasks.model.js");


function getAllTasks(){
    return tasksModel.getTasks().then(function(data){
        return data;
      });
}

function createTask(taskObject){
    return tasksModel.createTask(taskObject).then(function(data){
        return data;
      });
}

module.exports = {
    getAllTasks : getAllTasks,
    createTask: createTask
}