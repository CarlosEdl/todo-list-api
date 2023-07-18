const tasksModel = require('../models/tasksModel');

const getALL = async (_req,res) => {
    const tasks = await tasksModel.getALL();
    return res.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask);
};

module.exports = {
    getALL,
    createTask,
};