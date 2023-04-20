// DOM element variables
const originalsDiv = document.querySelector(".netflixOriginals");
const trendingDiv = document.getElementById("trending");
const topRatedDiv = document.getElementById("top_rated");

// function that fetches API
const fetchMovies = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((movies) => console.log(movies));
};
