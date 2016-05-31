var moviesJson  = require('../movies.json');

// Routes
exports.home = function(req, res) {
  var movies = moviesJson.movies;

  res.render('home', {
    title: "Star Wars movies",
    movies: movies});
};

exports.movieSingle = function(req, res){
  var episode_number = req.params.episode_number;
  var movies = moviesJson.movies;

  if ( episode_number >= 1 && episode_number <= 6 ) {
    var movie = movies[episode_number - 1];
    var title = movie.title;
    var main_characters = movie.main_characters;

    res.render('movie_single', {
        movies: movies,
        title: title,
        movie: movie,
        main_characters: main_characters
     });
  } else {
    res.render('notFound', {
      movies: movies,
      title: "This is not the page you are looking for."
    })
  };
};

exports.notFound = function(req, res){
  var movies = moviesJson.movies;

  res.render('notFound', {
    movies: movies,
    title: "This is not the page you are looking for."
  })
};
