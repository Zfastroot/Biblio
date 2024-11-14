if (process.env.NODE_ENV !== "production") {
    // Load environment variables from a .env file
    require('dotenv').config();
}

// Import the Express module
const express = require("express")

// Import body-parser module for manupilating data whe creating it
const bodyParser = require("body-parser")
// Run Express by creating an instance of the Express application
const app = express()

// manipalating data
app.use(bodyParser.urlencoded({limit:'10mb',extended:false}))

// Import the express-ejs-layouts module for layout support in EJS
const expressLayouts = require('express-ejs-layouts')
//Import our Router
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
// Set EJS as the templating engine for rendering views
app.set('view engine', 'ejs')

// Set the directory where the view templates (EJS files) are stored
app.set('views', __dirname + '/views')

// Define the default layout file for all views (layouts/layout.ejs)
app.set('layout', 'layouts/layout')

// Use express-ejs-layouts middleware to enable layout functionality
app.use(expressLayouts)

// Serve static files (like CSS, images, JS) from the "public" directory
app.use(express.static('public'))

//use the routes  
app.use('/',indexRouter)
app.use('/authors',authorRouter)

//DATABASE :
// Import the mongoose library for MongoDB object modeling
const mongoose = require('mongoose')

// Connect to the MongoDB database using the URL stored in the environment variable 'DATABASE_URL'
mongoose.connect(process.env.DATABASE_URL)

// Access the database connection object
const db = mongoose.connection

// Listen for connection errors and log them to the console
db.on('error', error => console.error(error))

// Once the database connection is successfully open, log a success message to the console
db.once('open', () => console.log("Connected to mongoose"))


// Start the server on the environment's specified port (process.env.Port) or default to port 3000
app.listen(process.env.Port || 3000)

