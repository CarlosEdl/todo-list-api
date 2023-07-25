const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksController.getALL);
router.post('/tasks', tasksMiddleware.validateFieldtitle,tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', 
    tasksMiddleware.validateFieldtitle, 
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask
    );

module.exports = router;