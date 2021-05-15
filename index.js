const express = require('express');
const config = require('./config');
const app = express();
const port = config.port;
const timesRoutes = require('./api/routes/timesRoutes');
const subjectsRoutes = require('./api/routes/subjectsRoutes');
const volumesRoutes = require('./api/routes/volumesRoutes');
const lecturersRoutes = require('./api/routes/lecturersRoutes');
const usersRoutes = require('./api/routes/usersRoutes');
const logger = require('./api/middlewares/logger');


// Middleware for creating req.body in express app
app.use(express.json());
// Routes
app.use('/times', timesRoutes);
app.use('/subjects', subjectsRoutes);
app.use('/volumes', volumesRoutes);
app.use('/lecturers', lecturersRoutes);
app.use('/users', usersRoutes);

// Logger middleware
app.use(logger);

app.listen(port, () => {
  console.log('Server is running on port:', port);
});