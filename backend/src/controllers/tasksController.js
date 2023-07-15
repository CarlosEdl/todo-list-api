const tasksModel = require('../models/tasksModel');

const getALL = async (req,res) => {

    const tasks = await tasksModel.getALL();

    return res.status(200).json(tasks);
};

module.exports = {
    getALL
};