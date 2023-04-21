// DOM element variables
const originalsDiv = document.querySelector(".original__movies");
const trendingDiv = document.getElementById("trending");
const topRatedDiv = document.getElementById("top_rated");

// function that fetches data from movie API
const fetchMovies = (url, div) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const movies = data.results;
      console.log(movies);
      displayMovie(movies, div);
    });
};

const displayMovie = (movies, div) => {
  movies.map((movie) => {
    const movieImg = document.createElement("img");
    movieImg.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    div.appendChild(movieImg);
  });
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

getTrending();

// function that fetches Top Rated movies
const getTopRated = () => {
  let url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, topRatedDiv);
};

getTopRated();
