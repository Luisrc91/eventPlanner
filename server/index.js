const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// const userRoutes = require('./models/user');
// const eventRoutes = require('./models/event');
const userRoutes = require('./routes/user');

app.use('/users', userRoutes);
// app.use('/events', eventRoutes);



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});