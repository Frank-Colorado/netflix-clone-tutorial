// DOM element variables
const originalsDiv = document.querySelector(".original__movies");
const trendingDiv = document.getElementById("trending");
const topRatedDiv = document.getElementById("top_rated");

window.onload = () => {
  getOriginals();
  getTrending();
  getTopRated();
};
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
    movieImg.setAttribute("data-id", movie.id);
    movieImg.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    movieImg.addEventListener("click", (e) => {
      getMovieID(e);
    });
    div.appendChild(movieImg);
  });
};

// function that fetches Netflix Originals
const getOriginals = () => {
  let url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
  fetchMovies(url, originalsDiv);
};

// function that fetches Trending movies
const getTrending = () => {
  let url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, trendingDiv);
};

// function that fetches Top Rated movies
const getTopRated = () => {
  let url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, topRatedDiv);
};

// async function that fetches movie data based on ID parameter
async function getMovieTrailer(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const movie = await response.json();
  return movie;
}
// function that gets the 'data-id' from the target clicked
const getMovieID = (e) => {
  const id = e.target.getAttribute("data-id");
  console.log(id);
  getMovieTrailer(id).then((movie) => {
    console.log(movie);
  });
};
