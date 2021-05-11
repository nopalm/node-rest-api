require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('err', (error) => console.error(error));
db.once('open', () => console.log('conected to db'));

app.use(express.json());
const userRoute = require('./route/user');
app.use('/users', userRoute);

app.listen(3000, () => console.log('started serv'));
