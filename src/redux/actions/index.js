export const FETCH_NEW_RELEASES_REQUEST = "FETCH_NEW_RELEASES_REQUEST";
export const FETCH_NEW_RELEASES_SUCCESS = "FETCH_NEW_RELEASES_SUCCESS";
export const FETCH_NEW_RELEASES_FAILURE = "FETCH_NEW_RELEASES_FAILURE";

export const fetchNewReleases = () => (dispatch) => {
  dispatch({ type: FETCH_NEW_RELEASES_REQUEST });

  const query = "stray kids";

  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${encodeURIComponent(query)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const tracks = data.data.slice(0, 12);
      dispatch({
        type: FETCH_NEW_RELEASES_SUCCESS,
        payload: tracks,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_NEW_RELEASES_FAILURE,
        payload: error.message || "Impossibile caricare le nuove uscite",
      });
    });
};
