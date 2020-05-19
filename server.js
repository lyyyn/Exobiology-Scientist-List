// Dependencies
const express = require('express');
const app = express();

// Configuration
const port = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
// Body Parser - parses out form data from body of request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static - allows us to have access to a folder called public that will house our css and other static files
app.use(express.static('public'));

//include the method-override package
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// The order is import here the require route must be after express middleware urlencoded and json in order to parse req.body 
require('./router')(app);

app.listen(port, () => {
    console.log('Exobiology is listening on port', port);
});
