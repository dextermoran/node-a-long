var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var routes = require('./routes')
// Routes
app.get('/', routes.home);

app.get('/episode/:episode_number?', routes.movieSingle);

app.get('*', routes.notFound);

// Specify port
app.listen(3000, function(){
  console.log("the app is running on localhost 3000");
});
