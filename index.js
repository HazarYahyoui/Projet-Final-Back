const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./database/connect');
mongoose.set('strictQuery', true);



const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
const passport = require('./passport-strategies/bearer')

const company = require('./routes/apiCompany');
const event = require('./routes/apiEvent');
const tag = require('./routes/apiTags');
const auth = require('./routes/apiAuth');

app.use('/api', company);
app.use('/api', event);
app.use('/api', tag);
app.use('/api', auth);

app.listen(3000, () => console.log('listening on port 3000!'));
