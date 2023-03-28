const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./database/connect');
mongoose.set('strictQuery', true);
const port = 3000;
 require('dotenv').config() ;



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
const home = require('./routes/apiHome');
const contact = require('./routes/apiContact');
const reservation = require('./routes/apiReservation');

app.use('', company);
app.use('', event);
app.use('', tag);
app.use('', auth);
app.use('', forgotP);
app.use('', resetP);
app.use('', home);
app.use('', contact);
app.use('', reservation);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
