const database = require('../../database');

const volumesService = {};

// Returns all volumes
volumesService.getVolumes = () => {
  const { volumes: volumes } = database;
  return volumes;
};

//returns volumes by id
volumesService.getVolumeById = (id) => {
    const volume = database.volumes.find((element) => element.id === id);
    if (volume) {
      return volume;
    }
    return false;
  };
        
// Creates new volumes
volumesService.createVolumes = (newVolume) => {
    const id = database.volumes.length + 1;
    const volume = {
      id,
      ...newVolume,
    };
    database.volumes.push(volume);
    return id;
  };
  
  // Deletes volume
  volumesService.deleteVolumes = (id) => {
    // Find volume index
    const index = database.volumes.findIndex((element) => element.id === id);
    // Remove volume from 'database'
    database.volumes.splice(index, 1);
    return true;
  };
  
module.exports = volumesService;