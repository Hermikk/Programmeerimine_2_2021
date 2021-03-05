const express = require('express');
const config = require('./config');
const database = require('./database');
const app = express();
const port = config.port;
const timesRoutes = require('./api/routes/timesRoutes');
const subjectsRoutes = require('./api/routes/subjectsRoutes');
const volumesRoutes = require('./api/routes/volumesRoutes');
const lecturersRoutes = require('./api/routes/lecturersRoutes');


app.use(express.json());

const logger = (req, res, next) => {
  console.log(new Date(), req.method, req.url);
  next();
};

// Middleware for creating req.body in express app
app.use(express.json());
// Routes
app.use('/times', timesRoutes);
app.use('/subjects', subjectsRoutes);
app.use('/volumes', volumesRoutes);
app.use('/lecturers', lecturersRoutes);


// Logger middleware
app.use(logger);


//tundide ajad
  
app.get('/times', (req, res) => {
  res.status(200).json({
    times,
  });
});


app.get('/times/:id', (req, res) => {
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
      subjects,
    });
});
  
app.get('/subjects/:id', (req, res) => {
  const id = req.params.id;
  const subject = subjects[id - 1];
  res.status(200).json({
    subject: subject,
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