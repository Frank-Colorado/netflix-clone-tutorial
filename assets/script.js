// DOM element variables
const originalsDiv = document.querySelector(".netflixOriginals");
const trendingDiv = document.getElementById("trending");
const topRatedDiv = document.getElementById("top_rated");

// function that fetches data from movie API
const fetchMovies = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((movies) => console.log(movies));
};

// function that fetches Netflix Originals
const getOriginals = () => {
  let url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
  fetchMovies(url);
};

getOriginals();
