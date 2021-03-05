const express = require('express');
const lecturersController = require('../controllers/lecturersController');

const router = express.Router();


router.get('/', lecturersController.getLecturers);
router.get('/:id', lecturersController.getLecturerById);
router.post('/', lecturersController.createLecturers);
router.delete('/:id', lecturersController.deleteLecturers);

module.exports = router;
