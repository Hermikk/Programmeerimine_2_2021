const express = require('express');
const volumesController = require('../controllers/volumesController');

const router = express.Router();


router.get('/', volumesController.getVolumes);
router.get('/:id', volumesController.getVolumeById);
router.post('/', volumesController.createVolumes);
router.delete('/:id', volumesController.deleteVolumes);

module.exports = router;
