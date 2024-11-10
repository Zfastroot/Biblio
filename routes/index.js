// Import the Express module
const express = require('express')

// Create a new router object using Express Router
const router = express.Router()

// Define a GET route for the root URL ('/') and send a response when it's accessed
router.get('/', (req, res) => {
    // Send 'hello World' as the response to the client
    res.render('index')
})

// Export the router so it can be used in other parts of the application
module.exports = router
