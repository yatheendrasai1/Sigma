var Tasks = require("../schemas/task");

function getTasks(){
    return Tasks.find({}).then(function(data){
        return data;
      });
}

function createTask(taskObject){
    return Tasks.create(taskObject).then(function(data){
        return data;
      });
}

module.exports = {
    getTasks: getTasks,
    createTask: createTask
}