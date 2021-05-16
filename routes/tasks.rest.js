const express = require('express');
const router = express.Router();

const taskService = require("../services/tasks.service");

router.get('/', (req, res) => {
    return taskService.getAllTasks().then((data)=>{
        res.json(data);
    });
})
  
router.post('/',(req, res)=>{
    return taskService.createTask(req.body).then((data)=>{
        res.json(data);
    });
})

module.exports = router;