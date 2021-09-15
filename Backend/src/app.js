const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

//middlewars
app.use(cors());
app.use(express.json());

// routes
app.use('/orders', require('./routes/orders'));
app.use('/products', require('./routes/products'));

module.exports = app;