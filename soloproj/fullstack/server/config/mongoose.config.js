const mongoose = require('mongoose');

const mongoEndpoint = 'mongodb://localhost/';
const dbName = 'products3';

mongoose
    .connect(mongoEndpoint + dbName)
    .then(() => console.log(`Connected to ${dbName} database`))
    .catch((err) => console.log('Error in connection to DB', err));
