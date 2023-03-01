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
const forgotP = require('./routes/apiForgotPass');
const resetP = require('./routes/apiResetPass');

app.use('/api', company);
app.use('/api', event);
app.use('/api', tag);
app.use('/api', auth);
app.use('/api', forgotP);
app.use('/api', resetP);

app.listen(3000, () => console.log('listening on port 3000!'));
