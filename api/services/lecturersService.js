const database = require('../../database');

const lecturersService = {};

// Returns all lecturers
lecturersService.getLecturers = () => {
  const { lecturers: lecturers } = database;
  return lecturers;
};

//returns lecturers by id
lecturersService.getLecturerById = (id) => {
    const lecturer = database.volumes.find((element) => element.id === id);
    if (lecturer) {
      return lecturer;
    }
    return false;
  };
        
// Creates new lecturers
lecturersService.createLecturers = (newLecturer) => {
    const id = database.volumes.length + 1;
    const lecturer = {
      id,
      ...newLecturer,
    };
    database.volumes.push(lecturer);
    return id;
  };
  
  // Deletes lecturer
  lecturersService.deleteLecturers = (id) => {
    // Find lecturer index
    const index = database.lecturers.findIndex((element) => element.id === id);
    // Remove lecturer from 'database'
    database.volumes.splice(index, 1);
    return true;
  };
  
module.exports = lecturersService;