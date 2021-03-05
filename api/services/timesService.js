const database = require('../../database');

const timesService = {};

// Returns all times
timesService.getTimes = () => {
  const { times: times } = database;
  return times;
};

//returns times by id
timesService.getTimeById = (id) => {
    const time = database.times.find((element) => element.id === id);
    if (time) {
      return time;
    }
    return false;
  };
        
// Creates new times
timesService.createTimes = (newTime) => {
    const id = database.times.length + 1;
    const time = {
      id,
      ...newTime,
    };
    database.times.push(time);
    return id;
  };
  
  // Deletes time
  timesService.deleteTimes = (id) => {
    // Find time index
    const index = database.times.findIndex((element) => element.id === id);
    // Remove time from 'database'
    database.times.splice(index, 1);
    return true;
  };
  
module.exports = timesService;