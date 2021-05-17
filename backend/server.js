require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('err', (error) => console.error(error));
db.once('open', () => console.log('conected to db'));

app.use(cors());
app.use(express.json());
const userRoute = require('./route/user');
const productRoute = require('./route/product');
app.use('/users', userRoute);
app.use('/products', productRoute);

app.listen(5000, () => console.log('started serv'));
