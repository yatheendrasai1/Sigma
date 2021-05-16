const tasksModel = require("../models/tasks.model.js");
const webPush = require('web-push');
var config = require("../sigmaConfig.json");

function getAllTasks(){
    return tasksModel.getTasks().then(function(data){
        return data;
      });
}

function createTask(taskObject){
    const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
    const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
    const subscription = taskObject;
    let mail = 'mailto:'+config.emailId;
    console.log("process Env Variables :::: ", mail, publicVapidKey, privateVapidKey);
    // webPush.setVapidDetails(mail, publicVapidKey, privateVapidKey);
    // const payload = JSON.stringify({ title: 'test' });
    // webPush.sendNotification(subscription, payload).catch(error => {
    //     console.error(error.stack);
    // });
    return tasksModel.createTask(taskObject).then(function(data){
        return data;
      });
}

module.exports = {
    getAllTasks : getAllTasks,
    createTask: createTask
}