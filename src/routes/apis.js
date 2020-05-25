const express = require('express');
const router =  express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) =>{
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    await Task.insertMany([req.body]);
    res.json({
        status: "200"
    });
});

router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: "200"
    });
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        status: "200"
    });
});
module.exports = router;