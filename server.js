// Import the Express module
const express = require("express")
// Run Express by creating an instance of the Express application
const app = express()

// Import the express-ejs-layouts module for layout support in EJS
const expressLayouts = require('express-ejs-layouts')
//Import our Router
const indexRouter = require('./routes/index')
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

// Start the server on the environment's specified port (process.env.Port) or default to port 3000
app.listen(process.env.Port || 3000)

