const subjectsService = require('../services/subjectsService');

const subjectsController = {};

//Get all subjects
subjectsController.getSubjects = (req, res) => {
  const subjects = subjectsService.getSubjects();
  if (subjects) {
    res.status(200).json({
      subjects: subjects,
    });
  } else {
    res.status(400).json({
      error: 'No subjects found',
    });
  }
}; 

//Get subject by id
subjectsController.getSubjectById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const subject = subjectsService.getSubjectById(id);
  if (subject) {
    res.status(200).json({
      subject: subject,
    });
  } else {
    res.status(400).json({
      error: `No subject found with id: ${id}`,
    });
  }
};

//Create subject
subjectsController.createSubjects = (req, res) => {
  const description = req.body.description;
  if (description) {
    const subject = {
      description: description
    };
    const id = subjectsService.createSubjects(subject);
    res.status(201).json({
      id,
    });
  } else {
    res.status(400).json({
      error: 'Description is missing'
    });
  }

};

//Delete subject
subjectsController.deleteSubjects = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const subject = subjectsService.getSubjectById(id);
  if (subject) {
    const success = subjectsService.deleteSubjects(id);
    if (success) {
      res.status(201).json({
        notice: `Subject deleted with id: ${id}`,
      });
    } else {
    res.status(400).json({
      error: `No subject found with id: ${id}`,
    });
    }
  };
};

module.exports = subjectsController;
