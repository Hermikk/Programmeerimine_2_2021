const volumesService = require('../services/volumesService');

const volumesController = {};

//Get all volumes
volumesController.getVolumes = (req, res) => {
  const volumes = volumesService.getVolumes();
  if (volumes) {
    res.status(200).json({
      volumes: volumes,
    });
  } else {
    res.status(400).json({
      error: 'No volumes found',
    });
  }
}; 

//Get volume by id
volumesController.getVolumeById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const volume = volumesService.getVolumeById(id);
  if (volume) {
    res.status(200).json({
      volume: volume,
    });
  } else {
    res.status(400).json({
      error: `No volume found with id: ${id}`,
    });
  }
};

//Create volume
volumesController.createVolumes = (req, res) => {
  const description = req.body.description;
  if (description) {
    const volume = {
      description: description
    };
    const id = volumesService.createVolumes(volume);
    res.status(201).json({
      id,
    });
  } else {
    res.status(400).json({
      error: 'Description is missing'
    });
  }

};

//Delete volume
volumesController.deleteVolumes = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const volume = volumesService.getVolumeById(id);
  if (volume) {
    const success = volumesService.deleteVolumes(id);
    if (success) {
      res.status(201).json({
        notice: `Volume deleted with id: ${id}`,
      });
    } else {
    res.status(400).json({
      error: `No volume found with id: ${id}`,
    });
    }
  };
};

module.exports = volumesController;
