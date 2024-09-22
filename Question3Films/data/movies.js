let movies = [
  { id: 1, titulo: "Washington", diretor: "12345", ano: 1099, genero: "misterio" },
  { id: 2, titulo: "Alencouro", diretor: "19982", ano: 2000, genero: "romance" }
];
let nextId = 3;

function addMovie(movie) {
  movie.id = nextId++;
  movies.push(movie);
  return movie;
}

function getMovies() {
  return movies;
}

function searchMovies({ titulo, diretor, ano, genero }) {
  return movies.filter(movie =>
    (titulo ? movie.titulo.includes(titulo) : true) &&
    (diretor ? movie.diretor.includes(diretor) : true) &&
    (ano ? movie.ano == ano : true) &&
    (genero ? movie.genero.includes(genero) : true)
  );
}

function updateMovie(id, updatedMovie) {
  const index = movies.findIndex(movie => movie.id === parseInt(id));
  if (index !== -1) {
    movies[index] = { id: parseInt(id), ...updatedMovie };
    return movies[index];
  }
  return null;
}

function deleteMovie(id) {
  const index = movies.findIndex(movie => movie.id === parseInt(id));
  if (index !== -1) {
    movies.splice(index, 1);
    return true;
  }
  return false;
}

function validateMovieData({ titulo, diretor, ano, genero }) {
  if (!titulo) return "O campo 'titulo' é obrigatório.";
  if (!diretor) return "O campo 'diretor' é obrigatório.";
  if (!ano || isNaN(parseInt(ano))) return "O campo 'ano' deve ser um número válido.";
  if (!genero) return "O campo 'genero' é obrigatório.";
  return null;
}

module.exports = { 
  addMovie, 
  getMovies, 
  searchMovies, 
  updateMovie, 
  deleteMovie, 
  validateMovieData 
};
