//Require modules and set up setting variables
const express = require('express');
const port = process.env.PORT || 5000;
// const session = require('express-session');
const cors = require('cors');
const logger = require('morgan');

// Load the Env Vars
require('dotenv').config();

// Require Routes Pathways
// const favoritesRouter = require ('./routes/api/favorites');
const reviewsRouter = require('./routes/api/reviews');
const usersRouter = require('./routes/api/users');

// Create Middleware Path
const morgan = require('morgan');


//Create the Express App
const app = express();

// Connect to the MongoDB with Mongoose
require('./config/database');

//View Engine Setup
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
// app.use(methodOverride('_method'));
app.use(logger('dev')); 
app.use(express.json());
app.use(cors());
//app.use(database());
app.use(express.urlencoded({
    extended: true
}));

// make req.user available everywhere:
app.use(function (req, res, next) {
    res.locals.consumer = req.consumer
    next();
});

// Mount Routes Here
// app.use('/api/favorites', favoritesRouter); 
app.use('/api/reviews', reviewsRouter);
app.use('/api/users', usersRouter); 

// Tell the Application to Listen
app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
});



