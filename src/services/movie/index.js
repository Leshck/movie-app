const URL_MOVIE = 'http://reactjs-cdp.herokuapp.com/movies';

export const fetchMovies = async ({ sortBy, search, searchBy, suggestedGenre }) => {
  return fetch(
    `${URL_MOVIE}?sortBy=${sortBy}&sortOrder=desc&offset=0&limit=6&search=${search}&searchBy=${searchBy}&filter=${suggestedGenre}`,
  ).then((response) => response.json());
};

export const fetchMovie = async (id) => {
  return fetch(`${URL_MOVIE}/${id}`).then((response) => response.json());
};
