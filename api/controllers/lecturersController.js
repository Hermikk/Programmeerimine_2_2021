const lecturersService = require('../services/lecturersService');

const lecturersController = {};

//Get all lecturers
lecturersController.getLecturers = (req, res) => {
  const lecturers = lecturersService.getLecturers();
  if (lecturers) {
    res.status(200).json({
      lecturers: lecturers,
    });
  } else {
    res.status(400).json({
      error: 'No lecturers found',
    });
  }
}; 

//Get lecturer by id
lecturersController.getLecturerById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const lecturer = lecturersService.getLecturerById(id);
  if (lecturer) {
    res.status(200).json({
      lecturer: lecturer,
    });
  } else {
    res.status(400).json({
      error: `No lecturer found with id: ${id}`,
    });
  }
};

//Create lecturer
lecturersController.createLecturers = (req, res) => {
  const description = req.body.description;
  if (description) {
    const lecturer = {
      description: description
    };
    const id = lecturersService.createLecturers(lecturer);
    res.status(201).json({
      id,
    });
  } else {
    res.status(400).json({
      error: 'Description is missing'
    });
  }

};

//Delete lecturer
lecturersController.deleteLecturers = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const lecturer = lecturersService.getLecturerById(id);
  if (lecturer) {
    const success = lecturersService.deleteLecturers(id);
    if (success) {
      res.status(201).json({
        notice: `Lecturer deleted with id: ${id}`,
      });
    } else {
    res.status(400).json({
      error: `No lecturer found with id: ${id}`,
    });
    }
  };
};

module.exports = lecturersController;
