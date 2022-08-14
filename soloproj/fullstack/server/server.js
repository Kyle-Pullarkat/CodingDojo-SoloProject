require('./config/mongoose.config');

const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", 
}), 
);

require('./config/mongoose.config');
require('./routes/solo.routes')(app);

app.listen(port, () => console.log(`Server is up on ${port}`) );