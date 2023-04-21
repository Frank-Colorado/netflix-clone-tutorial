// DOM element variables
const originalsDiv = document.querySelector(".netflixOriginals");
const trendingDiv = document.getElementById("trending");
const topRatedDiv = document.getElementById("top_rated");

// function that fetches data from movie API
const fetchMovies = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      console.log(movies);
      displayMovie(movies);
    });
};

const displayMovie = (movies) => {
  for (movie of movies) {
    console.log(movie);
  }
};

// function that fetches Netflix Originals
const getOriginals = () => {
  let url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
  fetchMovies(url, originalsDiv);
};

getOriginals();

// function that fetches Trending movies
const getTrending = () => {
  let url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, trendingDiv);
};

//getTrending();

// function that fetches Top Rated movies
const getTopRated = () => {
  let url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, topRatedDiv);
};

//getTopRated();
