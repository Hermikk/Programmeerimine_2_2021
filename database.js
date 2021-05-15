const database = {
  times: [
      {
        id: 1,
        description: '10:00-13:15'
      },
      {
        id: 2,
        description: '14:15-17:30'
      },
      {
        id: 3,
        description: '10:00-17.30'
      },
    ],
  subjects: [
      {
        id: 1,
        description: 'Üld- ja sotsiaalpsühholoogia'
      },
      {
        id: 2,
        description: 'Sissejuhatus disaini'
      },
      {
        id: 3,
        description: 'Multimeediumi praktika'
      },
      {
        id: 4,
        description: 'IT ja õigus'
      },
    ],
  volumes: [
      {
        id: 1,
        description: '4'
      },
      {
        id: 2,
        description: '8'
      },
    ],
  lecturers: [
      {
        id: 1,
        description: 'Dr Tark'
      },
      {
        id: 2,
        description: 'Iti Mees'
      },
    ],
  users: [
    {
      id: 1,
      firstName: 'Mikk',
      lastName: 'Herde',
      email: 'mikk@herde.ee',
      password: '$2b$10$oS3mun8dxRkD.K4zFugkpeXelrTKXWQi4fDEeQdqU21BuMyd9id8e',
      role: 'Admin',
    },
    {
      id: 2,
      firstName: 'Mati',
      lastName: 'Maasikas',
      email: 'mati@maasikas.ee',
      password: '$2b$10$Dv7y5133dUL.DTiogU1bXeODhoEpuE.AsiiCdUmvQJwKHU57YISyW',
      role: 'User',
    },
    {
      id: 3,
      firstName: 'Mikk',
      lastName: 'MH',
      email: 'mh@mh.ee',
      password: 'parool',
      role: 'Admin',
    },

  ],
  
};
  module.exports = database;