// build your `/api/resources` router here
const express = require("express");
const router = express.Router();

const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resourceList => {
            res.json(resourceList)
        })
        .catch(next);
})

router.post('/', (req, res, next) => {
    Resources.postResource(req.body)
        .then(insertedResource => {
            res.status(201).json(insertedResource)
        })
        .catch(next);
})

module.exports = router;