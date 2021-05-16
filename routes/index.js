const express = require('express');
const router = express.Router();

const indexRouter = require("./emptyslash.rest");
const tasksRouter = require("./tasks.rest");

router.use('/', indexRouter);
router.use('/tasks', tasksRouter);

module.exports = router;