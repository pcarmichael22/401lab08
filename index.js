'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

require('./docs/config/swagger');

mongoose.connect('mongodb://localhost:27017/class08', { useNewUrlParser: true, useUnifiedTopology: true });

require('./app.js').start(3000);