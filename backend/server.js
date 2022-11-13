/*
@Desc : Backend server connection file in order to create the default routes and port setup.
*/
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwtAuth = require('./routes/jwtAuth');
const testRoute = require('./routes/testRoute');

const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',
}));

app.use('/auth', jwtAuth);
app.use('/test', testRoute);

const port = process.env.PORT;

// Setting the port connection to 4000 for backend.
app.listen(port, () => {
  console.log(`server is up at port ${port}`);
});
