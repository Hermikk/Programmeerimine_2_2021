const timesService = require('../services/timesService');

const timesController = {};

//Get all times
timesController.getTimes = (req, res) => {
  const times = timesService.getTimes();
  if (times) {
    res.status(200).json({
      times,
    });
  } else {
    res.status(400).json({
      error: 'No times found',
    });
  }
}; 

//Get time by id
timesController.getTimeById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const time = timesService.getTimeById(id);
  if (time) {
    res.status(200).json({
      time,
    });
  } else {
    res.status(400).json({
      error: `No time found with id: ${id}`,
    });
  }
};

//Create time
timesController.createTimes = (req, res) => {
  const description = req.body.description;
  if (description) {
    const time = {
      description: description
    };
    const id = timesService.createTimes(time);
    res.status(201).json({
      id,
    });
  } else {
    res.status(400).json({
      error: 'Description is missing'
    });
  }

};

//Delete time
timesController.deleteTimes = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const time = timesService.getTimeById(id);
  if (time) {
    const success = timesService.deleteTimes(id);
    if (success) {
      res.status(201).json({
        notice: `Time deleted with id: ${id}`,
      });
    } else {
    res.status(400).json({
      error: `No time found with id: ${id}`,
    });
    }
  };
};

module.exports = timesController;
