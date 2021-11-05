// build your `/api/tasks` router here
const express = require("express");
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasksList => {
            res.json(tasksList)
        })
        .catch(next);
})

router.post('/', (req, res, next) => {
    Tasks.postTasks(req.body)
        .then(insertedTask => {
            res.status(201).json(insertedTask)
        })
        .catch(next);
})

module.exports = router;
