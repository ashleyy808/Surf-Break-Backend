//Require modules and set up setting variables
const express = require('express');
const port = process.env.PORT || 5000;
const session = require('express-session');
const cors = require('cors');
const logger = require('morgan');
//const bodyParser = require('body-parser'); 

//const database = require('./config/database'); 
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/surf-break', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;

// db.on('connected', function () {
//     console.log(`Mongoose connected to:${db.host}:${db.port}`);
// });

// db.on('error', function (error) {
//     console.log(`Encountered an error: ${error.message}`);
// });



// Create Middleware Path
const morgan = require('morgan');
const methodOverride = require('method-override');

//Create the Express App
const app = express();

// Require Routes Pathways
const surfSpotsRouter = require ('./routes/api/surfSpots');
const reviewsRouter = require('./routes/api/reviews');
const usersRouter = require('./routes/api/users'); 

// Load the Env Vars
require('dotenv').config();

// Connect to the MongoDB with Mongoose
require('./config/database');

//View Engine Setup
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(logger('dev')); 
app.use(express.json());
app.use(cors());
//app.use(database());
app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// make req.user available everywhere:
app.use(function (req, res, next) {
    res.locals.consumer = req.consumer
    next();
});

// Mount Routes Here
app.use('/api/surfSpots', surfSpotsRouter); 
//app.use('/api/weatherData', weatherDataRouter); 
app.use('/api/reviews', reviewsRouter);
app.use('/api/users', usersRouter); 

// Tell the Application to Listen
app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
});



