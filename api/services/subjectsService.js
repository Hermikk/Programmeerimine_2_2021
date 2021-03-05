const database = require('../../database');

const subjectsService = {};

// Returns all subjects
subjectsService.getSubjects = () => {
  const { volumes: subjects } = database;
  return subjects;
};

//returns subjects by id
subjectsService.getSubjectById = (id) => {
    const subject = database.volumes.find((element) => element.id === id);
    if (subject) {
      return subject;
    }
    return false;
  };
        
// Creates new subjects
subjectsService.createSubjects = (newSubject) => {
    const id = database.volumes.length + 1;
    const subject = {
      id,
      ...newSubject,
    };
    database.volumes.push(subject);
    return id;
  };
  
  // Deletes subject
  subjectsService.deleteSubjects = (id) => {
    // Find subject index
    const index = database.volumes.findIndex((element) => element.id === id);
    // Remove subject from 'database'
    database.volumes.splice(index, 1);
    return true;
  };
  
module.exports = subjectsService;