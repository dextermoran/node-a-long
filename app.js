var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var routes = require('./routes')
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', routes.home);

app.get('/episode/:episode_number?', routes.movieSingle);

app.get('*', routes.notFound);

// Specify port
// app.listen(3000, function(){
//   console.log("the app is running on localhost 3000");
// });

app.listen(process.env.PORT || 3000);
