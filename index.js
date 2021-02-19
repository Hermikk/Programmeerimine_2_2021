const express = require('express');
const app = express();

const port = 3000;

const times = [
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
  ];
const subjects = [
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
  ];
const volumes = [
    {
      id: 1,
      description: '4'
    },
    {
      id: 2,
      description: '8'
    },
  ];
const lecturers = [
    {
      id: 1,
      description: 'Õppejõu nimi 1'
    },
    {
      id: 2,
      description: 'Õppejõu nimi 2'
    },
  ];
  
app.use(express.json());



//tundide ajad
app.get('/times', (req, res) => {
    res.status(200).json({
      times: times
    });
  });
  
  app.get('/times/:id', (req, res) => {
    const key = req.query.key;
    const id = req.params.id;
    const time = times[id - 1];
    res.status(200).json({
      time: time
    });
  });
  
  app.post('/times', (req, res) => {
    const description = req.body.description;
    if (description) {
      const time = {
        id: times.length + 1,
        description: description
      };
      times.push(time);
      res.status(201).json({
        id: time.id
      });
    } else {
      res.status(400).json({
        error: 'Description is missing'
      });
    }
  });
  
  app.delete('/times/:id', (req, res) => {
    const id = req.params.id;
    times.splice(id - 1, 1);
    res.status(200).end();
  });
  
  app.patch('/times/:id', (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    times[id - 1].description = description;
    res.status(200).json({
      success: true
    });
  });
  
//Õppeainete nimetused
app.get('/subjects', (req, res) => {
    res.status(200).json({
      subjects: subjects
    });
  });
  
  app.get('/subjects/:id', (req, res) => {
    const key = req.query.key;
    const id = req.params.id;
    const subject = subjects[id - 1];
    res.status(200).json({
      subject: subject
    });
  });
  
  app.post('/subjects', (req, res) => {
    const description = req.body.description;
    if (description) {
      const subject = {
        id: subjects.length + 1,
        description: description
      };
      subjects.push(subject);
      res.status(201).json({
        id: subject.id
      });
    } else {
      res.status(400).json({
        error: 'Description is missing'
      });
    }
  });
  
  app.delete('/subjects/:id', (req, res) => {
    const id = req.params.id;
    subjects.splice(id - 1, 1);
    res.status(200).end();
  });
  
  app.patch('/subjects/:id', (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    subjects[id - 1].description = description;
    res.status(200).json({
      success: true
    });
  });
//tundide arvud
app.get('/volumes', (req, res) => {
    res.status(200).json({
      volumes: volumes
    });
  });
  
  app.get('/volumes/:id', (req, res) => {
    const key = req.query.key;
    const id = req.params.id;
    const volume = volumes[id - 1];
    res.status(200).json({
      volume: volume
    });
  });
  
  app.post('/volumes', (req, res) => {
    const description = req.body.description;
    if (description) {
      const volume = {
        id: volumes.length + 1,
        description: description
      };
      volumes.push(volume);
      res.status(201).json({
        id: subject.id
      });
    } else {
      res.status(400).json({
        error: 'Description is missing'
      });
    }
  });
  
  app.delete('/volumes/:id', (req, res) => {
    const id = req.params.id;
    volumes.splice(id - 1, 1);
    res.status(200).end();
  });
  
  app.patch('/volumes/:id', (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    volumes[id - 1].description = description;
    res.status(200).json({
      success: true
    });
  });
//Õppejõudude nimed
app.get('/lecturers', (req, res) => {
    res.status(200).json({
      lecturers: lecturers
    });
  });
  
  app.get('/lecturers/:id', (req, res) => {
    const key = req.query.key;
    const id = req.params.id;
    const lecturer = lecturers[id - 1];
    res.status(200).json({
      lecturer: lecturer
    });
  });
  
  app.post('/lecturers', (req, res) => {
    const description = req.body.description;
    if (description) {
      const lecturer = {
        id: lecturers.length + 1,
        description: description
      };
      lecturers.push(lecturer);
      res.status(201).json({
        id: lecturer.id
      });
    } else {
      res.status(400).json({
        error: 'Description is missing'
      });
    }
  });
  
  app.delete('/lecturers/:id', (req, res) => {
    const id = req.params.id;
    lecturers.splice(id - 1, 1);
    res.status(200).end();
  });
  
  app.patch('/lecturers/:id', (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    lecturers[id - 1].description = description;
    res.status(200).json({
      success: true
    });
  });

app.listen(port, () => {
  console.log('Server is running on port:', port);
});