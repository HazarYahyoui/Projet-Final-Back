const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const mongoose = require('./database/connect');
// mongoose.set('strictQuery', true);



const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(3000, () => console.log('listening on port 3000!'));
