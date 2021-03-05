const express = require('express');
const timesController = require('../controllers/timesController');

const router = express.Router();


router.get('/', timesController.getTimes);
router.get('/:id', timesController.getTimeById);
router.post('/', timesController.createTimes);
router.delete('/:id', timesController.deleteTimes);

module.exports = router;
