const mongoose = require('mongoose');

//environment variable
const URI = process.env.URI?
            process.env.URI:'mongodb://localhost/blaze';

//mongodb connection
mongoose.connect(URI);

const connect = mongoose.connection;
connect.once('open',() =>{
    console.log('DB is connected');
});