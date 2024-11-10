//import express
const express = require("express")
// run express
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.listen(process.env.Port || 3000)