const express = require('express');
const subjectsController = require('../controllers/subjectsController');

const router = express.Router();


router.get('/', subjectsController.getSubjects);
router.get('/:id', subjectsController.getSubjectById);
router.post('/', subjectsController.createSubjects);
router.delete('/:id', subjectsController.deleteSubjects);

module.exports = router;
