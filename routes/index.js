// Routes
exports.home = function(req, res) {
  res.render('home', {
    title: "Star Wars movies",
    movies: ["Phantom Menace", "Attack of the Clones", "Revenge of The Sith",
              "A New Hope", "Empire Strikes Back", "Return of The Jedi"]
  });
};

exports.movieSingle = function(req, res){
  var episode_number = req.params.episode_number;
  res.send("this is the page for episode " + episode_number);
};

exports.notFound = function(req, res){
  res.send("This is not the page you are looking for.");
};
