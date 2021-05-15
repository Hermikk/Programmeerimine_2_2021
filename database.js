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
        description: 'Õppejõu nimi 1'
      },
      {
        id: 2,
        description: 'Õppejõu nimi 2'
      },
    ],
  users: [
    {
      id: 1,
      firstName: 'Juku',
      lastName: 'Juurikas',
      email: 'juku@juurikas.ee',
      password: 'juku',
      role: 'User',
    },
    {
      id: 2,
      firstName: 'Mati',
      lastName: 'Maasikas',
      email: 'mati@maasikas.ee',
      password: 'mati',
      role: 'Admin',
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